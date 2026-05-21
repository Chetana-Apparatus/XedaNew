import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/know",
        destination: "/the-science-behind-fresh-wheatgrass",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
