import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://your-domain.com", lastModified: new Date() }]; // replace with your domain
}
