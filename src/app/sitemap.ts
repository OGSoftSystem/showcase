import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //   const posts: PostType[] = await fetchPosts();

  //   const postEntries: MetadataRoute.Sitemap = posts.map(({ _id }) => ({
  //     url: `${siteConfig.baseUrl}/blog/post/${_id}`,
  //   }));
  return [
    {
      url: `${siteConfig.url}`,
    },
    {
      url: `${siteConfig.url}/our-story`,
    },
    {
      url: `${siteConfig.url}/burn`,
    },

    // ...postEntries,
  ];
}
