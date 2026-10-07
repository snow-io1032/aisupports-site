import Link from "next/link";

export type Crumb = { name: string; path: string };

const BASE_URL = "https://aisupports.cc";

/** パンくずの BreadcrumbList JSON-LD（画面のパンくずと同じ配列から生成） */
export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? BASE_URL : `${BASE_URL}${c.path}`,
    })),
  };
}

/** 画面に表示するパンくず。最後の項目は現在のページなのでリンクにしない */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト" className="cs-breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={c.path}>
            {i < items.length - 1 ? (
              <Link href={c.path}>{c.name}</Link>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
