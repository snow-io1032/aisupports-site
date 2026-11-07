import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb, { breadcrumbJsonLd, type Crumb } from "../components/Breadcrumb";
import { caseStudies } from "../data/caseStudies";
import { sapporoFaqs } from "../data/sapporoFaqs";

// 「札幌 AI導入」「札幌 AI導入支援」など、札幌でAI導入を検討する人の質問にまとめて答えるページ。
// 冒頭に数字つきの結論を置き、AI検索に引用されやすい形にしている。
// 補助金の情報は公的機関の公表内容から書き、確認日を必ず更新すること。
const PATH = "/sapporo-ai";
const URL = `https://aisupports.cc${PATH}`;
const TITLE = "札幌のAI導入・AIエージェント構築支援｜費用・期間・補助金 | AISupports";
const DESCRIPTION =
  "札幌でAI導入を検討する中小企業向けに、AIエージェント構築の進め方・期間・費用の考え方・札幌市の補助金をまとめました。札幌市中央区を拠点に北海道全域で現地対応。初回ヒアリングと提案書は無料です。";
const CHECKED = "2026年11月7日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "AISupports",
    locale: "ja_JP",
  },
};

const crumbs: Crumb[] = [
  { name: "ホーム", path: "/" },
  { name: "札幌のAI導入支援", path: PATH },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sapporoFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "札幌のAI導入・AIエージェント構築支援",
  serviceType: "AIエージェント構築・業務自動化",
  url: URL,
  provider: { "@id": "https://aisupports.cc/#organization" },
  areaServed: [
    { "@type": "City", name: "札幌市" },
    { "@type": "AdministrativeArea", name: "北海道" },
  ],
  description: DESCRIPTION,
};

const steps = [
  { title: "ヒアリング（無料）", text: "現場の業務フローと課題をヒアリング。ムダな工程と自動化できる領域を特定します。" },
  { title: "設計", text: "最適なツール選定と実装設計。既存システムとの接続方法まで具体化します。" },
  { title: "構築", text: "スピーディに実装し、実際の業務フローに組み込みます。小さく始めて確実に動かします。" },
  { title: "改善", text: "運用データを見ながら継続改善・拡張。「使われる仕組み」へと育てます。" },
];

export default function SapporoAiPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />

      <div className="wrap">
        <header className="pg-head">
          <div data-head><Breadcrumb items={crumbs} /></div>
          <p className="kicker" data-head>AI ADOPTION IN SAPPORO</p>
          <h1 data-head>札幌のAI導入・<span className="nowrap">AIエージェント構築支援</span></h1>
          <p className="p-lead" data-head>
            札幌の中小企業が、くり返し業務をAIエージェントと自動化で減らすための進め方・期間・費用の考え方・補助金を、
            AISupportsの導入事例の数字とあわせてまとめました。
          </p>
          <p className="meta-date" data-head>情報の確認日：{CHECKED}</p>
        </header>

        {/* ── 結論（ファーストビュー） ── */}
        <section className="sp-answer" aria-labelledby="sp-ans" data-r>
          <h2 id="sp-ans">結論：札幌でのAI導入は「1つの業務から、1〜2週間で」始められます</h2>
          <dl>
            <div><dt>何ができる？</dt><dd>問い合わせへの返信、見積もり、点検記録、在庫管理、レポート作成など、くり返し発生する業務をAIエージェントと自動化で減らします。</dd></div>
            <div><dt>どれだけ減る？</dt><dd>食品小売の事例では、現場の記録入力が<strong>月約10時間から約3時間</strong>に。建設業の事例では、社長が毎回行っていた見積もり作成が不要になり、<strong>事務スタッフ1名分相当</strong>の工数を削減しました。</dd></div>
            <div><dt>期間は？</dt><dd>シンプルな自動化なら<strong>1〜2週間</strong>で動く仕組みを構築します。</dd></div>
            <div><dt>費用は？</dt><dd>業務の範囲で変わるため、ヒアリング後に提案書でお伝えします。<strong>初回ヒアリングと提案書は無料</strong>です。</dd></div>
            <div><dt>補助金は？</dt><dd>札幌市の「デジタル化・AI導入促進補助金」は、国の補助金の自己負担額の1/2（<strong>最大225万円</strong>）を上乗せする制度です。条件があるため、<a href="#subsidy">下の解説</a>をご覧ください。</dd></div>
            <div><dt>どこまで来てくれる？</dt><dd>札幌市中央区を拠点に、<strong>北海道全域で現地対応</strong>。道外はオンラインで対応します。</dd></div>
          </dl>
        </section>
      </div>

      {/* ── 事例 ── */}
      <section className="sec" aria-labelledby="sp-cases">
        <div className="wrap">
          <p className="kicker" data-r>CASE STUDIES</p>
          <h2 className="h2" id="sp-cases" data-lines><span className="ln">導入事例の数字</span></h2>
          <p className="p-lead" data-r>どの事例も、実際に現場へ導入した結果です。</p>
          <div className="sp-cases">
            {caseStudies.map((c) => (
              <article className="hl-card" data-r key={c.slug}>
                <p className="lb">{c.industry}</p>
                <h3><Link href={`/case-studies/${c.slug}`}>{c.shortTitle}</Link></h3>
                <ul>
                  {c.results.map((r) => (
                    <li key={r.label}>
                      <span>{r.label}</span>
                      <b>{r.before !== "—" ? `${r.before} → ${r.after}` : r.after}</b>
                    </li>
                  ))}
                </ul>
                <Link className="tlink" href={`/case-studies/${c.slug}`}>事例を読む →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 進め方 ── */}
      <section className="sec" aria-labelledby="sp-steps">
        <div className="wrap">
          <p className="kicker" data-r>PROCESS</p>
          <h2 className="h2" id="sp-steps" data-lines><span className="ln">札幌でAI導入を進める4ステップ</span></h2>
          <p className="p-lead" data-r>最初から全社に広げず、効果を確かめながら1業務ずつ広げます。</p>
          <ol className="steps sp-steps" data-list>
            {steps.map((s) => (
              <li key={s.title}><div><strong>{s.title}</strong><p>{s.text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 補助金 ── */}
      <section className="sec" id="subsidy" aria-labelledby="sp-sub">
        <div className="wrap">
          <p className="kicker" data-r>SUBSIDY</p>
          <h2 className="h2" id="sp-sub" data-lines><span className="ln">札幌市の補助金を使う場合</span></h2>
          <div className="abody sp-sub" data-r>
            <p>
              札幌市は、市内中小企業のDXと賃上げを支援する事業の中で、2種類の補助金を用意しています。
              どちらも、札幌市が指定する専門家の無料「伴走支援」を受けて<strong>DX推進計画</strong>を作ることが前提です。
            </p>
            <div>
              <table className="sp-table">
                <thead><tr><th scope="col">制度</th><th scope="col">内容</th><th scope="col">状況（{CHECKED}確認）</th></tr></thead>
                <tbody>
                  <tr>
                    <th scope="row">札幌市デジタル化・AI導入促進補助金</th>
                    <td>国の「デジタル化・AI導入補助金2026」に採択された事業に、自己負担額の1/2（最大225万円）を上乗せ</td>
                    <td>伴走支援の申し込み前に国の補助金に採択済みの事業者も、9月新設の「ツール利活用促進コース」で対象に</td>
                  </tr>
                  <tr>
                    <th scope="row">札幌市DX・賃上げ加速化補助金</th>
                    <td>3.5%以上の賃上げを誓約し、独自のシステム開発やITツール導入を行う場合に最大500万円</td>
                    <td>予定募集枠に達したため受付を一時停止中（募集枠の拡大を検討中）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>注意したい点</h3>
            <ul>
              <li>国の「デジタル化・AI導入補助金」は、事務局に登録されたITツールを、登録された「IT導入支援事業者」と一緒に申請する仕組みです。オーダーメイドで開発するAIエージェントは、そのままでは対象にならないことがあります。</li>
              <li>札幌市の上乗せ補助を使うには、原則として国の補助金を申請する前に、伴走支援を通じてDX推進計画を作っておく必要があります。</li>
              <li>締切や受付状況は変わります。申請前に、必ず公式サイトで最新の情報を確認してください。</li>
            </ul>
            <p>
              AISupportsでは、ご相談の際に「どの業務を、どの方法で自動化するか」とあわせて、補助金の対象になりそうかを一緒に整理します。
            </p>
            <p className="sp-src">
              出典：
              <a href="https://www.city.sapporo.jp/keizai/top/topics/it/kigyoudx.html" target="_blank" rel="noopener noreferrer">札幌市「企業DX推進に向けた支援」</a>、
              <a href="https://j-net21.smrj.go.jp/snavi/articles/193168" target="_blank" rel="noopener noreferrer">J-Net21（中小機構）の制度紹介</a>、
              <a href="https://www.chusho.meti.go.jp/koukai/yosan/r8/digital_ai_summary.pdf" target="_blank" rel="noopener noreferrer">中小企業庁「デジタル化・AI導入補助金2026の概要」</a>。
              公式サイト：<a href="https://sapporocity-dx.jp/" target="_blank" rel="noopener noreferrer">札幌市中小企業DX加速化・賃上げ促進支援サイト</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec" id="faq" aria-labelledby="sp-faq">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker" data-r>FAQ</p>
            <h2 className="h2" id="sp-faq" data-lines><span className="ln">札幌のAI導入で</span><span className="ln">よくある質問</span></h2>
          </div>
          <div className="qa" data-r>
            {sapporoFaqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-box" data-r>
          <h2>まずは、くり返している業務を1つ教えてください。</h2>
          <p>課題のExcelや業務フロー図を送っていただければ、現状分析と具体的な実行提案書を無料でお送りします。</p>
          <Link className="btn btn-light" href="/#contact">無料で相談する</Link>
        </div>
      </div>
    </main>
  );
}
