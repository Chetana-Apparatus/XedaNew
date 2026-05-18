import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";

import type { BlogEntry } from "@/data/blogs";
import { getBlogBySlug } from "@/data/blogs";

function BlogContent1() {
  return (
    <div>
      <p className="mb-4 leading-relaxed text-secondary">
        Fresh wheatgrass juice is widely used as a natural recovery and wellness
        supplement. When taken consistently at 30 ml per day, its benefits
        appear gradually in stages rather than instantly. Below is a realistic
        timeline of what most people experience.
      </p>

      <h3 className="mt-8 mb-4 font-bold text-foreground">
        Within 3–7 Days: Early Internal Effects
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        During the first week, the body begins internal adjustments. Many people
        notice reduced muscle heaviness and morning stiffness, improved
        digestion, better hydration, and a mild increase in daily energy. These
        changes are subtle but noticeable, especially in physically active
        individuals or those undergoing physiotherapy.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        Within 10–14 Days: Muscle Recovery Improvements
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        By the second week, muscle-specific benefits become clearer. Recovery
        after workouts or therapy sessions feels faster, muscle soreness (DOMS)
        reduces, inflammation-related discomfort decreases, and endurance during
        physical activity improves. This is when most users clearly feel
        recovery support.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        Within 3–4 Weeks: Cellular and Tissue Repair
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Consistent intake over three to four weeks supports deeper healing.
        Muscle tone and flexibility improve; tissue repair accelerates, cramps
        and fatigue reduce, and oxygen utilization becomes more efficient,
        making physical activity feel easier.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        6–8 Weeks: Whole-Body Benefits
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        With long-term use, wheatgrass supports immunity, hemoglobin levels,
        oxidative stress reduction, and overall stamina. Many users also report
        better sleep quality and skin health.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        Factors That Affect The Speed of Results
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Results may vary depending on activity level, protein intake, hydration,
        sleep quality, and consistency. Active individuals and those consuming
        adequate protein often experience faster benefits.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        Best Practices for Faster Recovery
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Take 30 ml on an empty stomach or post-workout. Avoid tea or coffee for
        at least 30 minutes after consumption. Combine with adequate protein
        intake within one hour and maintain consistency for at least 21 days.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">Conclusion</h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Fresh wheatgrass juice is not a replacement for protein but works as a
        powerful recovery support drink. With daily 30 ml intake, initial
        effects appear within a week, clear muscle recovery benefits in two
        weeks, and full benefits within one month.
      </p>
    </div>
  );
}

function BlogContent2() {
  return (
    <div>
      <p className="mb-4  font-semibold leading-relaxed text-secondary">
        It started with a simple question… &quot;Why am I still feeling tired
        even after eating healthy?&quot;
      </p>

      <p className="mb-4 leading-relaxed text-secondary">
        That question does not sound dramatic, but it is surprisingly common.
        Between busy routines, gym sessions, skipped meals, and quick fixes,
        many people end up missing out on something fundamental: real
        nourishment. That is where something as small as wheatgrass shots
        quietly enters the conversation. Not as a miracle. Not as hype. Just as
        a simple, natural addition that people are rediscovering.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        What Is Wheatgrass, Really?
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Wheatgrass is the young grass of the wheat plant, harvested early when
        it is still fresh and nutrient-rich. It is usually consumed as a fresh
        juice shot, known for its deep green colour and strong, earthy taste.
        Think of it less like a drink and more like a concentrated plant extract
        – one that delivers a dense mix of nutrients in a very small quantity.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        What&apos;s Inside That Tiny Shot?
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        If you have ever wondered why wheatgrass is often called a superfood,
        the answer lies in its composition. It is naturally rich in:
      </p>

      <ul className="mb-4 ml-4 list-inside list-disc space-y-2 text-secondary">
        <li>
          <strong className="text-foreground">Chlorophyll</strong> – often
          linked to detox support and oxygenation
        </li>

        <li>
          <strong className="text-foreground">Vitamins</strong> – especially A,
          C, E, K and B complex
        </li>

        <li>
          <strong className="text-foreground">Minerals</strong> – including
          iron, magnesium, and calcium
        </li>

        <li>
          <strong className="text-foreground">
            Enzymes &amp; antioxidants
          </strong>{" "}
          – which support internal recovery
        </li>
      </ul>

      <p className="mb-4 leading-relaxed text-secondary">
        What makes it different from many packaged health drinks is that, when
        consumed as a fresh juice, these nutrients are still active and easily
        absorbed.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        The Real Health Benefits
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Let&apos;s keep this honest. Wheatgrass is not magic, but when taken
        consistently, it does support your body in noticeable ways.
      </p>

      <div className="mb-4 space-y-4">
        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            1. Supports Natural Detox
          </p>

          <p className="leading-relaxed text-secondary">
            Wheatgrass is often associated with detox, not because it cleanses
            instantly but because it supports your liver and digestive system.
          </p>
        </div>

        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            2. Helps With Blood Health
          </p>

          <p className="leading-relaxed text-secondary">
            Its chlorophyll content is structurally similar to haemoglobin,
            which is why it is often linked to improved oxygen flow and overall
            vitality.
          </p>
        </div>

        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            3. Strengthens Immunity
          </p>

          <p className="leading-relaxed text-secondary">
            With its antioxidant profile, wheatgrass helps your body respond
            better to daily stress, pollution, and fatigue.
          </p>
        </div>

        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            4. Promotes Glowing Skin
          </p>

          <p className="leading-relaxed text-secondary">
            Many people notice gradual improvements in skin clarity and texture.
            This is more about internal balance showing up externally.
          </p>
        </div>

        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            5. Encourages Inner Recovery
          </p>

          <p className="leading-relaxed text-secondary">
            Whether it is post-workout fatigue or general burnout, wheatgrass
            supports your body&apos;s natural recovery process over time.
          </p>
        </div>
      </div>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        How to Take Wheatgrass Shots
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        One of the biggest advantages? It is simple.
      </p>

      <div className="mb-4 space-y-4">
        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            Best Time
          </p>

          <ul className="ml-4 list-inside list-disc space-y-1 text-secondary">
            <li>Early morning, on an empty stomach</li>
            <li>Works well as part of a morning detox routine</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">Quantity</p>

          <ul className="ml-4 list-inside list-disc space-y-1 text-secondary">
            <li>Start with 30 ml</li>
            <li>Gradually increase if your body feels comfortable</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            Beginner Tips
          </p>

          <ul className="ml-4 list-inside list-disc space-y-1 text-secondary">
            <li>Do not expect to love the taste immediately</li>
            <li>Take it in one quick shot</li>
            <li>Avoid mixing it with sugary juices</li>
          </ul>
        </div>
      </div>

      <p className="mb-4 italic font-medium leading-relaxed text-secondary">
        Consistency matters more than quantity. A small daily habit works better
        than occasional overload.
      </p>

      <h3 className="mt-8 mb-4 font-bold text-foreground">
        A Small Habit That Adds Up
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Health does not always come from big changes. Sometimes, it comes from
        small, consistent actions. A daily wheatgrass shot is not a radical
        transformation. It is a quiet shift towards better digestion, better
        energy, and a more aware lifestyle.
      </p>

      <h3 className="mt-8 mb-4  font-bold text-foreground">
        Ready to Experience It for Yourself?
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        If you are curious about adding wheatgrass shots to your routine, the
        easiest way to start is by trying it fresh and consistently. Good health
        begins with small, natural choices.
      </p>
    </div>
  );
}

function BlogContent3() {
  return (
    <div>
      <h2 className="mb-6  font-bold text-secondary">
        Wheatgrass Shots and Immunity: Beyond the Basics
      </h2>

      <h3 className="mt-6 mb-3 font-bold text-foreground">
        Wheatgrass Isn&apos;t New But Its Use Has Changed
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Wheatgrass has been studied for years, not as a trend, but as a
        nutrient-dense plant.
      </p>

      <p className="mb-2 font-semibold text-foreground">Research highlights:</p>

      <ul className="mb-4 ml-6 list-disc space-y-2 text-secondary">
        <li>High chlorophyll content</li>
        <li>Presence of essential amino acids</li>
        <li>Antioxidant compounds linked to cellular protection</li>
      </ul>

      <p className="mb-4 leading-relaxed text-secondary">
        What has changed today is not the ingredient — it is how it is being
        used in real environments like gyms and wellness centres.
      </p>

      <h3 className="mt-6 mb-3  font-bold text-foreground">
        What Research Actually Points Toward
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Instead of exaggerated claims, studies consistently show wheatgrass
        supports the following:
      </p>

      <div className="mb-4 space-y-4">
        <div>
          <p className="mb-2  font-semibold text-foreground">
            1. Oxidative Stress Reduction
          </p>

          <p className="leading-relaxed text-secondary">
            Antioxidants in wheatgrass help reduce oxidative stress, which is
            linked to fatigue and slower recovery.
          </p>
        </div>

        <div>
          <p className="mb-2  font-semibold text-foreground">
            2. Blood Health Support
          </p>

          <p className="leading-relaxed text-secondary">
            Some studies indicate improved haemoglobin levels and better
            oxygen-carrying capacity.
          </p>
        </div>

        <div>
          <p className="mb-2  font-semibold text-foreground">
            3. Nutrient Absorption &amp; Gut Support
          </p>

          <p className="leading-relaxed text-secondary">
            Wheatgrass contains enzymes that may support digestion and nutrient
            uptake.
          </p>
        </div>
      </div>

      <p className="mb-4 leading-relaxed text-secondary">
        These are not instant effects. They are support functions that work over
        time.
      </p>

      <h3 className="mt-6 mb-3 font-bold text-foreground">
        Where Wheatgrass Shots Actually Add Value
      </h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Here&apos;s where wheatgrass shots fit practically in real-world
        routines:
      </p>

      <div className="mb-6 space-y-4">
        <div>
          <p className="mb-2  font-semibold text-foreground">
            1. Post-Workout Recovery
          </p>

          <ul className="ml-6 list-disc space-y-1 text-secondary">
            <li>Quick intake after training</li>
            <li>Supports the recovery process</li>
            <li>Light and easy to consume</li>
          </ul>
        </div>

        <div>
          <p className="mb-2  font-semibold text-foreground">
            2. Morning Wellness Routine
          </p>

          <ul className="ml-6 list-disc space-y-1 text-secondary">
            <li>Creates a structured start to the day</li>
            <li>Encourages healthy consistency</li>
            <li>Fits naturally into fitness spaces</li>
          </ul>
        </div>

        <div>
          <p className="mb-2  font-semibold text-foreground">
            3. Wellness Centre Support
          </p>

          <ul className="ml-6 list-disc space-y-1 text-secondary">
            <li>Supports natural energy levels</li>
            <li>Helps reduce dependence on caffeine</li>
            <li>Fits into detox and recovery programs</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-6 mb-4  font-bold text-foreground">
        Quick Comparison: Why Wheatgrass Shots Work
      </h3>

      <div className="mb-6 overflow-x-auto">
        <table className="w-full border border-secondary text-left">
          <thead className="bg-background">
            <tr>
              <th className="border p-3">Factor</th>
              <th className="border p-3">Traditional Supplements</th>
              <th className="border p-3">Wheatgrass Shots</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">Time to consume</td>
              <td className="border p-3">High</td>
              <td className="border p-3">Low</td>
            </tr>

            <tr>
              <td className="border p-3">Routine fit</td>
              <td className="border p-3">Inconsistent</td>
              <td className="border p-3">Easy</td>
            </tr>

            <tr>
              <td className="border p-3">Repeat usage</td>
              <td className="border p-3">Irregular</td>
              <td className="border p-3">Daily habit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3  font-bold text-foreground">
        What Makes Xeda Farms Different
      </h3>

      <div className="mb-6 space-y-4">
        <div>
          <p className="mb-2  font-semibold text-foreground">Locally Grown</p>

          <ul className="ml-6 list-disc space-y-1 text-secondary">
            <li>Freshly harvested</li>
            <li>Controlled growing environments</li>
            <li>Better freshness and nutrient retention</li>
          </ul>
        </div>

        <div>
          <p className="mb-2  font-semibold text-foreground">
            Designed for Real Use
          </p>

          <ul className="ml-6 list-disc space-y-1 text-secondary">
            <li>Ready-to-consume format</li>
            <li>No preparation needed</li>
            <li>Perfect for fast-paced lifestyles</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-6 mb-3  font-bold text-foreground">Key Takeaway</h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Wheatgrass shots are not about hype. They are about consistency,
        usability, and long-term wellness support.
      </p>

      <ul className="mb-4 ml-6 list-disc space-y-2 text-secondary">
        <li>Backed by research</li>
        <li>Easy to integrate into routines</li>
        <li>Designed for daily wellness habits</li>
      </ul>

      <h3 className="mt-6 mb-3  font-bold text-foreground">Closing</h3>

      <p className="mb-4 leading-relaxed text-secondary">
        Xeda Farms wheatgrass shots are built around this exact idea — fresh,
        locally grown, and designed to fit into real-world routines across gyms
        and wellness centres.
      </p>
    </div>
  );
}

function ArticleBody({ blog }: { blog: BlogEntry }) {
  switch (blog.bodyId) {
    case 1:
      return <BlogContent1 />;
    case 2:
      return <BlogContent2 />;
    case 3:
      return <BlogContent3 />;
    default:
      return null;
  }
}

type Props = { slug: string };

export default function BlogDetails({ slug }: Props) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center bg-background px-4 pt-24 text-secondary">
        <h2 className="mb-4  font-bold text-secondary">Blog Not Found</h2>
        <Link
          href="/blogs"
          className="text-foreground underline hover:text-secondary"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background pt-24 text-secondary">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="group mb-8 flex w-fit items-center gap-2 text-secondary transition-colors hover:text-foreground"
        >
          <FaArrowLeft
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden
          />
          <span>Back to Blogs</span>
        </Link>

        <div className="mb-8 overflow-hidden rounded-2xl bg-secondary/10 shadow-2xl ring-1 ring-secondary/10">
          <div className="relative aspect-[16/9] w-full min-h-[200px] sm:min-h-[280px]">
            <Image
              src={blog.heroImage}
              alt={blog.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <header className="mb-8">
          <h2 className="mb-6  font-extrabold leading-tight text-secondary">
            {blog.title}
          </h2>

          <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <FaUser className="text-foreground" aria-hidden />
              <span>{blog.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-foreground" aria-hidden />
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
          </div>

          <p className="border-l-4 border-foreground pl-6  leading-relaxed text-secondary">
            {blog.excerpt}
          </p>
        </header>

        <article className="prose prose-lg max-w-none text-secondary">
          <ArticleBody blog={blog} />
        </article>
      </div>
    </div>
  );
}
