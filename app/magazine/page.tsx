import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { magazineIssues } from "../data/magazineIssues";
import styles from "./magazineIndex.module.css";

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
    <main className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[
          { name: "ホーム", path: "/" },
          { name: "AI実践マガジン", path: "/magazine" },
        ]} />
        <header className={styles.intro}>
          <p className={styles.eyebrow}>AI PRACTICE MAGAZINE</p>
          <h1>AI実践マガジン</h1>
          <p className={styles.lead}>AIニュースを、<br className={styles.mobileBreak} />現場で使える判断材料へ。</p>
          <p>一次出典をたどり、数字の前提を確かめる。<br />ニュースと架空データの試行から、仕事へのヒントを届けます。</p>
        </header>
        <section aria-labelledby="magazine-issues-heading">
          <h2 id="magazine-issues-heading" className={styles.sectionTitle}>最新号・バックナンバー</h2>
          <ul className={styles.list}>
            {magazineIssues.map((issue, index) => (
              <li key={issue.date} className={styles.card}>
                <div className={styles.issueMeta}>
                  {index === 0 && <span className={styles.latest}>最新号</span>}
                  <time dateTime={issue.date}>{issue.date.replaceAll("-", ".")} 号</time>
                </div>
                <h3><Link href={`/magazine/${issue.date}`}>{issue.title}</Link></h3>
                <p>{issue.description}</p>
                <span className={styles.note}>出典・試行条件つき / 情報確認 {issue.verifiedAt.replaceAll("-", "/")}</span>
                <Link className={styles.readLink} href={`/magazine/${issue.date}`}>この号を読む <span aria-hidden="true">→</span></Link>
              </li>
            ))}
          </ul>
        </section>
        <aside className={styles.policy}>
          <h2>読むときの約束</h2>
          <p>企業発表の数値には条件を添え、事実と本誌の考察を分けます。試行は架空データによるもので、実在顧客の成果や効果を保証するものではありません。</p>
        </aside>
        <nav className={styles.footer} aria-label="関連ページ">
          <Link href="/">AISupportsのサービスを見る</Link>
          <Link href="/#contact">自社のAI活用について相談する</Link>
        </nav>
      </div>
    </main>
  );
}
