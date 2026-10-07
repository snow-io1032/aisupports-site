import type { MetadataRoute } from "next";

// output: "export"（静的出力）で robots.txt を生成するために必要
export const dynamic = "force-static";

// 方針：検索エンジン・AIクローラー（GPTBot, ClaudeBot, PerplexityBot など）を含め全クローラーを許可する。
// AI検索で情報源として参照されることを目的としているため、意図的にブロックしていない。
// 学習用クローラーだけ拒否したくなった場合は、ここに個別の rules を追加する。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://aisupports.cc/sitemap.xml",
  };
}
