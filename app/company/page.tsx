import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | AISupports",
  description: "AISupports（mlma）の会社概要・登記情報・所在地・代表者情報。北海道を拠点にAI・DX支援を提供しています。",
  alternates: {
    canonical: "/company",
  },
};

const rows = [
  { label: "会社名",         value: "mlma（エムエルエムエー）" },
  { label: "代表者",         value: "代表 林 毅（Hayashi Tsuyoshi）" },
  { label: "設立",           value: "2024年" },
  { label: "所在地",         value: "〒060-0005 北海道札幌市中央区北5条西11丁目15-4" },
  { label: "事業内容",       value: "AI・DX支援、業務自動化コンサルティング、AIエージェント実装" },
  { label: "サービスエリア", value: "北海道全域（オンライン対応可）" },
  { label: "お問い合わせ",   value: "サイト内お問い合わせフォームよりご連絡ください" },
  { label: "Webサイト",      value: "https://aisupports.cc" },
];

export default function CompanyPage() {
  return (
    <main className="legal">
      <header className="pg-head">
        <p className="kicker" data-head>COMPANY</p>
        <h1 data-head>会社概要</h1>
      </header>

      <div className="dlist" data-list>
        {rows.map((row, i) => (
          <div className="r" key={i}>
            <div className="k">{row.label}</div>
            <div className="val">{row.value}</div>
          </div>
        ))}
      </div>

      <div className="boxed" data-r>
        <h2>
          代表メッセージ
        </h2>
        <p>
          AISupportsは、北海道の中小企業・地域企業が「AIを使いこなす側」になれるよう、
          現場に寄り添った支援を提供しています。<br /><br />
          業務効率化はゴールではなく、スタートです。
          生まれた「余白」と「データ」を活かし、経営者と共に次のステージへの道筋を描きます。
          小さな一歩から、確実に成果を積み重ねてまいります。
        </p>
        <p className="sig">
          mlma 代表　林 毅
        </p>
      </div>

      <div className="back">
        <Link className="tlink" href="/">← トップページに戻る</Link>
      </div>
    </main>
  );
}
