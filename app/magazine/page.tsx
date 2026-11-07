import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { magazineIssues } from "../data/magazineIssues";

const title = "AI実践マガジン | AISupports";
const description =
  "AIニュースを、現場で使える判断材料へ。一次出典と架空データの試行をもとに、仕事での使い方と確かめ方を紹介します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/magazine" },
  openGraph: {
    type: "website",
    url: "https://aisupports.cc/magazine",
    title,
    description,
    siteName: "AISupports",
    locale: "ja_JP",
  },
  twitter: { card: "summary", title, description },
};

export default function MagazineIndexPage() {
  return (
    <main>
      <div className="wrap">
        <header className="pg-head">
          <div data-head>
            <Breadcrumb items={[
              { name: "ホーム", path: "/" },
              { name: "AI実践マガジン", path: "/magazine" },
            ]} />
          </div>
          <p className="kicker" data-head>AI PRACTICE MAGAZINE</p>
          <h1 data-head>AI実践マガジン</h1>
          <p className="mag-lead" data-head>AIニュースを、<br className="mb" />現場で使える判断材料へ。</p>
          <p className="p-lead" data-head>一次出典をたどり、数字の前提を確かめる。<br />ニュースと架空データの試行から、仕事へのヒントを届けます。</p>
        </header>
        <section aria-labelledby="magazine-issues-heading">
          <h2 id="magazine-issues-heading" className="kicker" data-r style={{ marginBottom: 20, fontSize: 14 }}>最新号・バックナンバー</h2>
          <ul className="rows" data-list>
            {magazineIssues.map((issue, index) => (
              <li key={issue.date}>
                <div className="row">
                  <div className="meta">
                    {index === 0 && <span className="latest">最新号</span>}
                    <time dateTime={issue.date}>{issue.date.replaceAll("-", ".")} 号</time>
                  </div>
                  <div>
                    <h3><Link href={`/magazine/${issue.date}`}>{issue.title}</Link></h3>
                    <p>{issue.description}</p>
                    <span className="notex">出典・試行条件つき / 情報確認 {issue.verifiedAt.replaceAll("-", "/")}</span>
                    <Link className="rd" href={`/magazine/${issue.date}`}>この号を読む <span aria-hidden="true">→</span></Link>
                  </div>
                  <span className="arr" aria-hidden="true">→</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <aside className="policy" data-r>
          <h2>読むときの約束</h2>
          <p>企業発表の数値には条件を添え、事実と本誌の考察を分けます。試行は架空データによるもので、実在顧客の成果や効果を保証するものではありません。</p>
        </aside>
        <nav className="more" aria-label="関連ページ" data-r style={{ margin: "36px 0 clamp(72px,9vw,120px)" }}>
          <Link className="tlink" href="/">AISupportsのサービスを見る <span aria-hidden="true">→</span></Link>
          <Link className="tlink" href="/#contact">自社のAI活用について相談する <span aria-hidden="true">→</span></Link>
        </nav>
      </div>
    </main>
  );
}
