import type { Metadata } from "next";

import Blogs from "./Blogs";

export const metadata: Metadata = {
  title: "Our Blog | Xeda Farm",
  description:
    "Latest insights, tips, and stories about wheatgrass, wellness, and healthy living from Xeda Farm.",
};

export default function BlogsPage() {
  return <Blogs />;
}
