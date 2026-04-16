import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { stdin as input, stdout as output } from "node:process";
import readline from "node:readline/promises";

const repoRoot = process.cwd();
const spinnerFrames = ["-", "\\", "|", "/"];
const line = "=".repeat(78);
const gitignoreHeader =
  "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.";
const recommendedGitignoreSections = [
  {
    title: "# dependencies",
    entries: [
      "/node_modules",
      "/.pnp",
      ".pnp.*",
      ".yarn/*",
      "!.yarn/patches",
      "!.yarn/plugins",
      "!.yarn/releases",
      "!.yarn/versions",
    ],
  },
  { title: "# testing", entries: ["/coverage"] },
  { title: "# next.js", entries: ["/.next/", "/out/"] },
  { title: "# production", entries: ["/build"] },
  { title: "# misc", entries: [".DS_Store", "*.pem"] },
  {
    title: "# debug",
    entries: [
      "npm-debug.log*",
      "yarn-debug.log*",
      "yarn-error.log*",
      ".pnpm-debug.log*",
    ],
  },
  {
    title: "# env files (can opt-in for committing if needed)",
    entries: [".env*", "!.env.example"],
  },
  { title: "# vercel", entries: [".vercel"] },
  { title: "# typescript", entries: ["*.tsbuildinfo", "next-env.d.ts"] },
];

const renderHaxBanner = () => {
  console.log(line);
  console.log("             ");
  console.log("HH    HH    AAAAAA    XX    XX");
  console.log("HH    HH   AA    AA    XX  XX ");
  console.log("HHHHHHHH   AAAAAAAA     XXXX  ");
  console.log("HH    HH   AA    AA    XX  XX ");
  console.log("HH    HH   AA    AA   XX    XX");
  console.log("             ");

  console.log(line);
};

const printSection = (title) => {
  console.log(`\n--- ${title} ---`);
};

const parsePort = (value) => {
  const parsed = Number.parseInt(value.trim(), 10);

  if (Number.isNaN(parsed) || parsed < 1 || parsed > 65535) {
    throw new Error("Port must be a number between 1 and 65535.");
  }

  return parsed;
};

const parseProjectName = (value) => {
  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error("Project name cannot be empty.");
  }

  if (!/^[a-z0-9-_.]+$/.test(trimmed)) {
    throw new Error(
      "Project name must be lowercase and use only letters, numbers, hyphen, underscore, or dot.",
    );
  }

  return trimmed;
};

const parseYesNo = (value, defaultValue) => {
  const normalized = value.trim().toLowerCase();

  if (!normalized) {
    return defaultValue;
  }

  if (["y", "yes"].includes(normalized)) {
    return true;
  }

  if (["n", "no"].includes(normalized)) {
    return false;
  }

  throw new Error("Please answer yes or no.");
};

const askYesNo = async (rl, question, defaultValue = false) => {
  const suffix = defaultValue ? "Y/n" : "y/N";
  const answer = await rl.question(`${question} [${suffix}]: `);
  return parseYesNo(answer, defaultValue);
};

const updateNextPortScript = (scriptValue, port) => {
  const cleaned = scriptValue.replace(/\s+-p\s+\d+/g, "").trim();
  return `${cleaned} -p ${port}`;
};

const runCommand = (command, args) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: repoRoot,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(`${command} ${args.join(" ")} failed with code ${code}`),
      );
    });

    child.on("error", (error) => reject(error));
  });

const updateJsonFile = async (filePath, updater) => {
  const absolutePath = path.join(repoRoot, filePath);
  const content = await readFile(absolutePath, "utf8");
  const data = JSON.parse(content);
  const updated = updater(data);
  await writeFile(
    absolutePath,
    `${JSON.stringify(updated, null, 2)}\n`,
    "utf8",
  );
};

const updateTextFile = async (filePath, updater) => {
  const absolutePath = path.join(repoRoot, filePath);
  const content = await readFile(absolutePath, "utf8");
  const updated = updater(content);

  if (updated === content) {
    return false;
  }

  await writeFile(absolutePath, updated, "utf8");
  return true;
};

const ensureTrailingNewline = (content) =>
  content.endsWith("\n") ? content : `${content}\n`;

const appendMissingGitignoreSections = (content) => {
  const normalizedContent = ensureTrailingNewline(content);
  const existingLines = new Set(
    normalizedContent
      .split("\n")
      .map((lineValue) => lineValue.trim())
      .filter(Boolean),
  );
  const chunks = [];

  if (!existingLines.has(gitignoreHeader)) {
    chunks.push(gitignoreHeader);
  }

  for (const section of recommendedGitignoreSections) {
    const missingEntries = section.entries.filter(
      (lineValue) => !existingLines.has(lineValue),
    );
    const hasSectionTitle = existingLines.has(section.title);

    if (!hasSectionTitle && missingEntries.length === 0) {
      continue;
    }

    const sectionLines = [];
    if (!hasSectionTitle) {
      sectionLines.push(section.title);
    }
    sectionLines.push(...missingEntries);

    if (sectionLines.length > 0) {
      chunks.push(sectionLines.join("\n"));
    }
  }

  if (chunks.length === 0) {
    return normalizedContent;
  }

  return `${normalizedContent}\n${chunks.join("\n\n")}\n`;
};

const withSpinner = async (label, action) => {
  let frameIndex = 0;
  process.stdout.write(`${spinnerFrames[frameIndex]} ${label}`);

  const timer = setInterval(() => {
    frameIndex = (frameIndex + 1) % spinnerFrames.length;
    process.stdout.write(`\r${spinnerFrames[frameIndex]} ${label}`);
  }, 100);

  try {
    const result = await action();
    clearInterval(timer);
    process.stdout.write(`\r[OK] ${label}\n`);
    return result;
  } catch (error) {
    clearInterval(timer);
    process.stdout.write(`\r[ERR] ${label}\n`);
    throw error;
  }
};

const main = async () => {
  const packageJsonPath = path.join(repoRoot, "package.json");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
  const currentProjectName = packageJson.name ?? "my-next-app";
  const dockerfile = await readFile(
    path.join(repoRoot, "Dockerfile"),
    "utf8",
  ).catch(() => "");
  const portMatch = dockerfile.match(/EXPOSE\s+(\d+)/);
  const currentPort = portMatch ? Number.parseInt(portMatch[1], 10) : 3000;

  const rl = readline.createInterface({ input, output });

  try {
    console.clear();
    renderHaxBanner();
    printSection("Configuration");
    const projectAnswer = await rl.question(
      `Project name [${currentProjectName}]: `,
    );
    const portAnswer = await rl.question(`Port [${currentPort}]: `);
    const shouldUpgradeNextJs = await askYesNo(
      rl,
      "Run Next.js upgrade now?",
      false,
    );
    const shouldRunNpmInstall = await askYesNo(
      rl,
      "Run npm install now?",
      true,
    );
    const shouldUpdateGitignore = await askYesNo(
      rl,
      "Update .gitignore with recommended local file rules?",
      true,
    );

    const projectName = parseProjectName(projectAnswer || currentProjectName);
    const port = parsePort(portAnswer || String(currentPort));

    printSection("Applying Updates");
    await withSpinner("Updating project files", async () => {
      await updateJsonFile("package.json", (data) => {
        const nextData = { ...data };
        nextData.name = projectName;

        if (nextData.scripts?.dev) {
          nextData.scripts.dev = updateNextPortScript(
            nextData.scripts.dev,
            port,
          );
        }

        if (nextData.scripts?.start) {
          nextData.scripts.start = updateNextPortScript(
            nextData.scripts.start,
            port,
          );
        }

        return nextData;
      });

      await updateJsonFile("package-lock.json", (data) => {
        const nextData = { ...data };
        nextData.name = projectName;

        if (nextData.packages?.[""]) {
          nextData.packages[""].name = projectName;
        }

        return nextData;
      });

      await updateTextFile("Dockerfile", (content) =>
        content
          .replace(/EXPOSE\s+\d+/g, `EXPOSE ${port}`)
          .replace(
            /http:\/\/localhost:\d+\/api\/health/g,
            `http://localhost:${port}/api/health`,
          ),
      );

      await updateTextFile("Jenkinsfile", (content) =>
        content
          .replace(/IMAGE_NAME\s*=\s*'[^']*'/, `IMAGE_NAME = '${projectName}'`)
          .replace(
            /CONTAINER_NAME\s*=\s*'[^']*'/,
            `CONTAINER_NAME = '${projectName}'`,
          )
          .replace(
            /ENV_CREDENTIAL_ID\s*=\s*"[^"]*"/,
            `ENV_CREDENTIAL_ID = "${projectName}_env"`,
          )
          .replace(/HOST_PORT\s*=\s*'[^']*'/, `HOST_PORT = '${port}'`)
          .replace(
            /CONTAINER_PORT\s*=\s*'[^']*'/,
            `CONTAINER_PORT = '${port}'`,
          ),
      );

      await updateTextFile("README.md", (content) =>
        content.replace(/http:\/\/localhost:\d+/g, `http://localhost:${port}`),
      );
    });

    if (shouldUpgradeNextJs) {
      printSection("Next.js Upgrade");
      console.log("[STEP] Running Next.js upgrade...");
      await runCommand("npx", ["@next/codemod@canary", "upgrade", "latest"]);
    } else {
      printSection("Next.js Upgrade");
      console.log("[SKIP] Next.js upgrade.");
    }

    if (shouldRunNpmInstall) {
      printSection("Dependency Install");
      console.log("[STEP] Running npm install...");
      await runCommand("npm", ["install"]);
    } else {
      printSection("Dependency Install");
      console.log("[SKIP] npm install.");
    }

    if (shouldUpdateGitignore) {
      const didUpdateGitignore = await withSpinner("Updating .gitignore", () =>
        updateTextFile(".gitignore", appendMissingGitignoreSections),
      );
      if (didUpdateGitignore) {
        console.log("[OK] Added missing entries to .gitignore.");
      } else {
        console.log("[OK] .gitignore already had the required entries.");
      }
    } else {
      printSection(".gitignore");
      console.log("[SKIP] .gitignore update.");
    }

    printSection("Done");
    console.log("[OK] Setup completed successfully.");
    console.log(line);
  } finally {
    rl.close();
  }
};

main().catch((error) => {
  console.error(`\nSetup failed: ${error.message}`);
  process.exit(1);
});
