import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb, { breadcrumbJsonLd, type Crumb } from "../../components/Breadcrumb";
import { caseStudies, getCaseStudy } from "../../data/caseStudies";

// 静的出力：caseStudies に登録された事例だけをビルド時にページ化する
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

// 「約10時間/月」のような短い値は途中で折り返さない（長い文章は通常どおり折り返す）
const nowrap = (v: string) => (v.length <= 12 ? "cs-nowrap" : "");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const path = `/case-studies/${cs.slug}`;
  return {
    title: `${cs.shortTitle}の導入事例 | AISupports`,
    description: cs.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: `https://aisupports.cc${path}`,
      title: `${cs.shortTitle}の導入事例 | AISupports`,
      description: cs.description,
      siteName: "AISupports",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.shortTitle}の導入事例 | AISupports`,
      description: cs.description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const path = `/case-studies/${cs.slug}`;
  const crumbs: Crumb[] = [
    { name: "ホーム", path: "/" },
    { name: "導入事例", path: "/case-studies" },
    { name: cs.shortTitle, path },
  ];

  // 構造化データは画面に表示している内容と同じデータから生成する
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.description,
    datePublished: cs.publishedAt,
    dateModified: cs.updatedAt,
    inLanguage: "ja",
    mainEntityOfPage: `https://aisupports.cc${path}`,
    author: { "@type": "Organization", name: "AISupports", url: "https://aisupports.cc" },
    publisher: { "@type": "Organization", name: "AISupports", url: "https://aisupports.cc" },
    about: cs.target,
  };

  return (
    <main className="cs-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />

      <article className="cs-container">
        <Breadcrumb items={crumbs} />

        <header className="cs-header">
          <span className="cs-label">CASE STUDY</span>
          <h1 className="cs-title">{cs.title}</h1>
          <p className="cs-summary">{cs.summary}</p>
          <p className="cs-date">
            公開日：<time dateTime={cs.publishedAt}>{cs.publishedAt.replaceAll("-", "/")}</time>
          </p>
        </header>

        <section className="cs-section" aria-labelledby="cs-overview">
          <h2 id="cs-overview">概要</h2>
          <table className="cs-table cs-table-overview">
            <tbody>
              <tr><th scope="row">業種</th><td>{cs.industry}</td></tr>
              <tr><th scope="row">対象業務</th><td>{cs.target}</td></tr>
            </tbody>
          </table>
        </section>

        <section className="cs-section" aria-labelledby="cs-challenge">
          <h2 id="cs-challenge">課題</h2>
          {cs.challenge.map((t) => <p key={t}>{t}</p>)}
        </section>

        <section className="cs-section" aria-labelledby="cs-solution">
          <h2 id="cs-solution">対応</h2>
          <ol className="cs-steps">
            {cs.solution.map((t) => <li key={t}>{t}</li>)}
          </ol>
        </section>

        <section className="cs-section" aria-labelledby="cs-results">
          <h2 id="cs-results">結果</h2>
          <table className="cs-table cs-table-results">
            <thead>
              <tr><th scope="col">対象</th><th scope="col">導入前</th><th scope="col">導入後</th></tr>
            </thead>
            <tbody>
              {cs.results.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  <td data-label="導入前" className={nowrap(r.before)}>{r.before}</td>
                  <td data-label="導入後" className={`cs-after ${nowrap(r.after)}`}>{r.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="cs-section" aria-labelledby="cs-tech">
          <h2 id="cs-tech">{cs.devNote ? "使用技術と開発体制" : "使用技術"}</h2>
          <ul className="cs-tags">
            {cs.techStack.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {cs.devNote && <p>{cs.devNote}</p>}
        </section>

        <section className="cs-section" aria-labelledby="cs-readers">
          <h2 id="cs-readers">同じような課題をお持ちの方へ</h2>
          <p>{cs.forReaders}</p>
        </section>

        <aside className="cs-cta">
          <p className="cs-cta-text">
            「自社の業務でも同じことができるか」を、現在の業務内容をうかがったうえで無料でご提案します。
          </p>
          <Link className="btn btn-primary" href="/#contact">{cs.ctaLabel}</Link>
        </aside>

        <nav className="cs-more" aria-label="関連リンク">
          <Link href="/case-studies">ほかの導入事例を見る</Link>
          <Link href="/#services">AISupportsの提供サービスを見る</Link>
        </nav>
      </article>
    </main>
  );
}
