import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb, { breadcrumbJsonLd, type Crumb } from "../components/Breadcrumb";
import { caseStudies } from "../data/caseStudies";

const DESCRIPTION =
  "AISupportsが中小企業の現場で実装したAI・DX・業務自動化の導入事例。課題・対応・結果・使用技術を、実際の数字とともに紹介します。";

export const metadata: Metadata = {
  title: "導入事例 | AISupports",
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "https://aisupports.cc/case-studies",
    title: "導入事例 | AISupports",
    description: DESCRIPTION,
    siteName: "AISupports",
    locale: "ja_JP",
  },
};

const crumbs: Crumb[] = [
  { name: "ホーム", path: "/" },
  { name: "導入事例", path: "/case-studies" },
];

export default function CaseStudiesPage() {
  return (
    <main className="cs-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      <div className="cs-container">
        <Breadcrumb items={crumbs} />

        <header className="cs-header">
          <span className="cs-label">CASE STUDIES</span>
          <h1 className="cs-title">導入事例</h1>
          <p className="cs-summary">
            AISupportsが中小企業の現場で実装したAI・DX・業務自動化の事例です。
            それぞれの事例で、どんな課題があり、何を実装し、どれだけ業務が減ったのかを紹介しています。
          </p>
        </header>

        <ul className="cs-list">
          {caseStudies.map((c) => (
            <li key={c.slug} className="cs-list-item">
              <span className="cs-list-industry">{c.industry}</span>
              <h2 className="cs-list-title">
                <Link href={`/case-studies/${c.slug}`}>{c.title}</Link>
              </h2>
              <p className="cs-list-desc">{c.description}</p>
              <Link className="cs-list-link" href={`/case-studies/${c.slug}`}>
                {c.shortTitle}の導入事例を読む →
              </Link>
            </li>
          ))}
        </ul>

        <aside className="cs-cta">
          <p className="cs-cta-text">
            「どの業務から自動化すべきか分からない」という段階からご相談いただけます。
          </p>
          <Link className="btn btn-primary" href="/#contact">自社でAI化できる業務を相談する</Link>
        </aside>
      </div>
    </main>
  );
}
