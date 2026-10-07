import type { MetadataRoute } from "next";
import { caseStudies } from "./data/caseStudies";

// output: "export"（静的出力）で sitemap.xml を生成するために必要
export const dynamic = "force-static";

const BASE_URL = "https://aisupports.cc";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

// 固定ページの一覧。
// 新しい固定ページ（サービスページなど）を追加したら、ここに1行追加すると sitemap.xml に載る。
// 導入事例は app/data/caseStudies.ts に追加すれば自動で載る。
const pages: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: "/",             priority: 1.0, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" },
  { path: "/meo",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/company",      priority: 0.5, changeFrequency: "yearly" },
  { path: "/tokushoho",    priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy",      priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms",        priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = pages.map((p) => ({
    url: p.path === "/" ? BASE_URL : `${BASE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const cases = caseStudies.map((c) => ({
    url: `${BASE_URL}/case-studies/${c.slug}`,
    lastModified: c.updatedAt,
    changeFrequency: "monthly" as Freq,
    priority: 0.8,
  }));

  return [...fixed, ...cases];
}
