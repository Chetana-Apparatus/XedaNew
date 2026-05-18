export type BlogEntry = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  /** Square / listing images: `public/images/Blog/…` */
  cardImage: string;
  /** Wider hero on article page: `public/images/Blog/…` */
  heroImage: string;
  bodyId: 1 | 2 | 3;
};

export const blogs: BlogEntry[] = [
  {
    id: 1,
    slug: "wheatgrass-for-muscle-recovery",
    title:
      "How Soon Can You See Muscle Recovery Benefits from 30 ml Fresh Wheatgrass Juice?",
    excerpt:
      "Learn how 30 ml fresh wheatgrass juice supports muscle recovery, energy, and strength over time.",
    date: "January 15, 2026",
    author: "Xeda Farm Team",
    cardImage: "/images/Blog/Blog1.webp",
    heroImage: "/images/Blog/B1.webp",
    bodyId: 1,
  },
  {
    id: 2,
    slug: "wheatgrass-juice-benefits-for-gym-muscle-recovery",
    title: "Wheatgrass Shots Explained: Benefits, Usage & What You Should Know",
    excerpt:
      "Discover what wheatgrass really is, its powerful health benefits, and how to incorporate it into your daily routine.",
    date: "January 20, 2026",
    author: "Xeda Farm Team",
    cardImage: "/images/Blog/Blog (2).webp",
    heroImage: "/images/Blog/Blog(2).webp",
    bodyId: 2,
  },
  {
    id: 3,
    slug: "wheatgrass-shots-immunity-real-use-in-fitness-spaces",
    title:
      "Wheatgrass Shots for Immunity | Use Cases, Research & Why Fitness Spaces Use them.",
    excerpt:
      "Explore real use cases of wheatgrass shots, research-backed insights, and why gyms and wellness centres are adding them as part of daily routines.",
    date: "April 29, 2026",
    author: "Xeda Farm Team",
    cardImage: "/images/Blog/blog3.jpg",
    heroImage: "/images/Blog/Blog 3.jpg",
    bodyId: 3,
  },
];

export function getBlogBySlug(slug: string): BlogEntry | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((b) => b.slug);
}
