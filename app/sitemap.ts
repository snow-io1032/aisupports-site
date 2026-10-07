import type { MetadataRoute } from "next";

// output: "export"（静的出力）で sitemap.xml を生成するために必要
export const dynamic = "force-static";

const BASE_URL = "https://aisupports.cc";

// サイトに公開しているページの一覧。
// 新しいページ（サービスページ・導入事例など）を追加したら、ここに1行追加すると sitemap.xml に載る。
const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",          priority: 1.0, changeFrequency: "weekly" },
  { path: "/meo",       priority: 0.8, changeFrequency: "monthly" },
  { path: "/company",   priority: 0.5, changeFrequency: "yearly" },
  { path: "/tokushoho", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy",   priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms",     priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: p.path === "/" ? BASE_URL : `${BASE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
