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
const nowrap = (v: string) => (v.length <= 12 ? "nowrap" : "");

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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />

      <article>
        <div className="wrap">
          <header className="pg-head">
            <div data-head><Breadcrumb items={crumbs} /></div>
            <p className="kicker" data-head>CASE STUDY</p>
            <h1 data-head>{cs.title}</h1>
            <p className="p-lead" data-head>{cs.summary}</p>
            <p className="meta-date" data-head>
              公開日：<time dateTime={cs.publishedAt}>{cs.publishedAt.replaceAll("-", "/")}</time>
            </p>
          </header>

          <div className="hl" aria-label="導入の成果">
            {cs.results.map((r) => (
              <div className="hl-card" data-r key={r.label} aria-hidden="true">
                <span className="lb">{r.label}</span>
                <div className="ba">
                  {r.before !== "—" && <><span className="b">{r.before}</span><span className="ar">→</span></>}
                  <span className="a">{r.after}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="art">
            <aside className="side" data-r aria-labelledby="cs-overview">
              <h2 id="cs-overview" className="sr-only">概要</h2>
              <dl>
                <div><dt>業種</dt><dd>{cs.industry}</dd></div>
                <div><dt>対象業務</dt><dd>{cs.target}</dd></div>
              </dl>
            </aside>
            <div className="abody">
              <section aria-labelledby="cs-challenge">
                <h2 id="cs-challenge" data-r><span>01</span>課題</h2>
                {cs.challenge.map((t) => <p data-r key={t}>{t}</p>)}
              </section>
              <section aria-labelledby="cs-solution">
                <h2 id="cs-solution" data-r><span>02</span>対応</h2>
                <ol className="steps" data-list>
                  {cs.solution.map((t) => <li key={t}>{t}</li>)}
                </ol>
              </section>
              <section aria-labelledby="cs-results">
                <h2 id="cs-results" data-r><span>03</span>結果</h2>
                <table className="rtable" data-r>
                  <thead>
                    <tr><th scope="col">対象</th><th scope="col">導入前</th><th scope="col" className="af">導入後</th></tr>
                  </thead>
                  <tbody>
                    {cs.results.map((r) => (
                      <tr key={r.label}>
                        <th scope="row">{r.label}</th>
                        <td data-label="導入前" className={`bf ${nowrap(r.before)}`}>{r.before}</td>
                        <td data-label="導入後" className={`af ${nowrap(r.after)}`}>{r.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              <section aria-labelledby="cs-tech">
                <h2 id="cs-tech" data-r><span>04</span>{cs.devNote ? "使用技術と開発体制" : "使用技術"}</h2>
                <ul className="techs" data-r>
                  {cs.techStack.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {cs.devNote && <p data-r>{cs.devNote}</p>}
              </section>
              <section aria-labelledby="cs-readers">
                <h2 id="cs-readers" data-r><span>05</span>同じような課題をお持ちの方へ</h2>
                <p data-r>{cs.forReaders}</p>
              </section>

              <aside className="cta-box" data-r>
                <p>
                  「自社の業務でも同じことができるか」を、現在の業務内容をうかがったうえで無料でご提案します。
                </p>
                <Link className="btn btn-light" href="/#contact">{cs.ctaLabel}</Link>
              </aside>

              <nav className="more" aria-label="関連リンク" data-r>
                <Link className="tlink" href="/case-studies">ほかの導入事例を見る <span aria-hidden="true">→</span></Link>
                <Link className="tlink" href="/#services">AISupportsの提供サービスを見る <span aria-hidden="true">→</span></Link>
              </nav>
            </div>
          </div>
        </div>
      </article>

      <section className="others" aria-labelledby="others-h">
        <div className="wrap">
          <p className="kicker" data-r>More case studies</p>
          <h2 className="h2" id="others-h" data-r style={{ fontSize: "clamp(24px,3vw,36px)" }}>ほかの導入事例</h2>
          <div className="ogrid">
            {caseStudies.filter((o) => o.slug !== cs.slug).map((o) => (
              <Link className="ocard" data-r key={o.slug} href={`/case-studies/${o.slug}`}>
                <span className="ind">{o.industry}</span>
                <h3>{o.title}</h3>
                <span className="go">{o.shortTitle}の導入事例を読む →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
