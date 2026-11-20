import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb, { breadcrumbJsonLd, type Crumb } from "../components/Breadcrumb";

const canonical = "https://aisupports.cc/retail-profit-analytics";
const description =
  "食品スーパー・小売店向けの売上・粗利・PL（損益）分析支援。POS・Excel・CSV・会計データを整理し、店舗別・部門別の経営ダッシュボードを設計・構築。北海道から全国オンライン対応。";

export const metadata: Metadata = {
  title: "小売業の売上・粗利・PL分析と経営ダッシュボード構築 | AISupports",
  description,
  keywords: [
    "小売業 売上分析", "スーパー 粗利分析", "店舗別 損益分析",
    "PL ダッシュボード", "POSデータ 分析", "経営ダッシュボード",
    "食品スーパー DX", "Excel CSV 集計",
  ],
  alternates: { canonical: "/retail-profit-analytics" },
  openGraph: {
    type: "website",
    url: canonical,
    title: "小売業の売上・粗利・PL分析と経営ダッシュボード構築 | AISupports",
    description,
    siteName: "AISupports",
    locale: "ja_JP",
  },
};

const crumbs: Crumb[] = [
  { name: "ホーム", path: "/" },
  { name: "売上・粗利・PL分析", path: "/retail-profit-analytics" },
];

const faq = [
  {
    question: "POSのデータを使って、店舗別や部門別の売上・粗利を分析できますか？",
    answer: "はい。POSや基幹システムから出せるCSV・Excelなどの項目を確認し、店舗別・部門別・商品別など、取得できる粒度に応じて集計・可視化します。粗利の計算には原価情報が必要です。",
  },
  {
    question: "売上CSVだけでPL（損益計算書）まで作れますか？",
    answer: "売上CSVだけでは正確なPLは作成できません。売上・売上原価のほか、人件費、家賃、配送費などの経費や、店舗・部門への配賦ルールを確認する必要があります。まず取得可能なデータを整理します。",
  },
  {
    question: "既存のPOSや会計ソフトを入れ替える必要がありますか？",
    answer: "原則として入れ替えを前提にしません。既存システムのCSV出力や利用可能なAPIを調べ、無理のない連携方法をご提案します。自動連携の可否はシステムの仕様・権限によります。",
  },
  {
    question: "費用と導入期間はどれくらいですか？",
    answer: "初回ヒアリングは無料です。費用と期間は、データの種類、対象店舗数、更新頻度、必要な画面・連携範囲によって変わるため、要件を整理したうえで個別にお見積もりします。",
  },
  {
    question: "相談のときに実際の売上やPLデータを送る必要がありますか？",
    answer: "最初のご相談では必要ありません。データ項目の一覧や匿名化したサンプルで構いません。実データを取り扱う場合は、守秘義務やアクセス権限、受け渡し方法を事前に取り決めます。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "小売業の売上・粗利・PL分析と経営ダッシュボード構築",
  description,
  url: canonical,
  provider: {
    "@type": "Organization",
    name: "AISupports",
    url: "https://aisupports.cc",
  },
  serviceType: "POS・Excel・CSV・会計データを用いた小売業の売上・粗利・損益分析と経営ダッシュボード構築",
  areaServed: { "@type": "Country", name: "Japan" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "食品スーパー、小売店、複数店舗事業者",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const analyses = [
  {
    label: "売上",
    title: "売上を、比較できる数字に。",
    text: "店舗別・部門別・月別の推移、前年同月比、商品別の構成などを一画面で確認。",
  },
  {
    label: "粗利",
    title: "売れている商品と、儲かる商品を分ける。",
    text: "原価データがある範囲で売上総利益・粗利率を算出。値上げ後の価格検討にも使える形へ。",
  },
  {
    label: "PL",
    title: "最終的に、利益が残っているか。",
    text: "売上・原価・経費を突き合わせ、店舗別・部門別の損益を把握。配賦ルールは事前に確認。",
  },
  {
    label: "経営判断",
    title: "気になる数字に、すぐたどり着く。",
    text: "経営者向けの全体画面から、現場の原因分析まで必要な粒度に絞って表示。",
  },
];

const steps = [
  {
    title: "現状と経営課題の確認",
    detail: "経営者が朝確認したい数字、現場が困っている集計、既存システムをヒアリングします。",
  },
  {
    title: "データ項目と権限を整理",
    detail: "POS・基幹・会計などから取得可能なデータ、更新頻度、欠損やコード体系を確認します。",
  },
  {
    title: "小さな分析画面を試作",
    detail: "まずは対象店舗・部門を絞って試作。集計結果が元データと一致するかを検証します。",
  },
  {
    title: "運用しながら必要な範囲を拡張",
    detail: "確認する指標や更新方法を整え、必要に応じて自動化や店舗・部門の追加を検討します。",
  },
];

export default function RetailProfitAnalyticsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd(crumbs), serviceJsonLd, faqJsonLd]),
        }}
      />

      <div className="wrap">
        <header className="pg-head">
          <div data-head><Breadcrumb items={crumbs} /></div>
          <p className="kicker" data-head>RETAIL PROFIT ANALYTICS</p>
          <h1 data-head>売上は見えている。<br />利益まで、見えていますか。</h1>
          <p className="p-lead" data-head>
            食品スーパー・小売店のための、売上・粗利・PL（損益）分析。
            いまお使いのPOS、Excel、CSV、会計データを生かし、
            経営者が必要な数字をすぐに確認できるダッシュボードをつくります。
          </p>
          <div data-head style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32, alignItems: "center" }}>
            <Link className="btn btn-ink" href="/#contact">無料で相談する</Link>
            <a className="tlink" href="#data-needed">必要なデータを確認 <span aria-hidden="true">→</span></a>
          </div>
          <ul className="techs" aria-label="対象業務" style={{ marginTop: 32 }}>
            {["食品スーパー", "小売店・多店舗", "POSデータ", "Excel・CSV", "経営ダッシュボード"].map((x) => <li key={x}>{x}</li>)}
          </ul>
        </header>
      </div>

      <section className="sec" style={{ paddingTop: 16 }} aria-labelledby="retail-problems">
        <div className="wrap">
          <p className="kicker" data-r>THE QUESTION</p>
          <h2 className="h2" id="retail-problems" data-r>「売上がある」の先を、見えるように。</h2>
          <p className="p-lead" data-r>
            売上速報だけでは、値上げや販促、人員配置、ネット宅配の採算を判断しきれません。
            まずは数字の出どころをそろえ、売上と原価・経費を分けて捉えます。
          </p>
          <div className="vgrid">
            {analyses.map((item, i) => (
              <article className="v" data-r key={item.label}>
                <span className="n">0{i + 1} / {item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="data-needed" style={{ background: "var(--bg2)" }} aria-labelledby="retail-data">
        <div className="wrap">
          <p className="kicker" data-r>DATA FIRST</p>
          <h2 className="h2" id="retail-data" data-r>PLまで見るには、何のデータが必要か。</h2>
          <p className="p-lead" data-r>
            売上CSVだけで正確な利益は出せません。既存の管理データと会計データを確認し、
            どこまでを自動集計できるかを最初に切り分けます。
          </p>
          <div style={{ marginTop: 40, overflowX: "auto" }} data-r>
            <table className="rtable">
              <thead>
                <tr><th scope="col">データ</th><th scope="col">分かること・確認事項</th></tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">POS・売上データ</th>
                  <td className="bf" data-label="確認事項">日付・店舗・部門・商品・売上・数量・返品など。日次売上や商品構成を把握。</td>
                </tr>
                <tr>
                  <th scope="row">原価・仕入データ</th>
                  <td className="bf" data-label="確認事項">商品別仕入単価、原価、値引、廃棄、棚卸など。粗利計算の前提を確認。</td>
                </tr>
                <tr>
                  <th scope="row">会計・経費データ</th>
                  <td className="bf" data-label="確認事項">人件費、家賃、物流費など。PLの勘定科目と集計期間を照合。</td>
                </tr>
                <tr>
                  <th scope="row">店舗・部門マスタ</th>
                  <td className="bf" data-label="確認事項">店舗コードや部門コード、共通費の配賦ルールを統一。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--sub)", fontSize: 14, marginTop: 20 }} data-r>
            ※粗利やPLの精度は元データと計算ルールに依存します。欠損や不整合がある場合は、分かる範囲を明示して設計します。
          </p>
        </div>
      </section>

      <section className="sec" aria-labelledby="retail-process">
        <div className="wrap">
          <p className="kicker" data-r>HOW WE WORK</p>
          <h2 className="h2" id="retail-process" data-r>システムを入れ替える前に、データを生かす。</h2>
          <p className="p-lead" data-r>
            大がかりな刷新を前提にせず、既存システムで出せる情報から始めます。
            API連携の可否や更新方法は、システム提供元の仕様と権限を確認して決めます。
          </p>
          <div className="svc-list" data-list>
            {steps.map((step, i) => (
              <div className="svc" key={step.title}>
                <span className="n">0{i + 1}</span>
                <h3 style={{ fontFamily: "var(--jp)", fontSize: "clamp(19px,2vw,24px)" }}>{step.title}</h3>
                <div><p>{step.detail}</p></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }} data-r>
            <Link className="tlink" href="/case-studies">小売・業務改善を含む導入事例を見る <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="retail-fee">
        <div className="wrap">
          <p className="kicker" data-r>START SMALL</p>
          <h2 className="h2" id="retail-fee" data-r>必要な範囲だけ。費用は個別にご提案。</h2>
          <p className="p-lead" data-r>
            初回ヒアリングは無料です。対象店舗数、データ項目、更新頻度、
            ダッシュボードの画面数、自動連携の有無を整理してお見積もりします。
            まずは「今、経営判断に必要な数字は何か」からお聞かせください。
          </p>
          <div style={{ marginTop: 40 }} className="cta-box" data-r>
            <p className="kicker">RETAIL ANALYTICS CONSULTATION</p>
            <h2 style={{ margin: 0, fontWeight: 500, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.4 }}>売上データから、経営判断へ。</h2>
            <p>
              最初はデータ項目の一覧や、匿名化したサンプルだけで構いません。
              実際の売上・原価・PLデータは、守秘義務とアクセス権限を確認してから取り扱います。
            </p>
            <Link className="btn btn-light" href="/#contact">無料相談・問い合わせへ</Link>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="retail-faq">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker" data-r>FAQ</p>
            <h2 className="h2" id="retail-faq" data-r>よくあるご質問</h2>
          </div>
          <div className="qa" data-r>
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
