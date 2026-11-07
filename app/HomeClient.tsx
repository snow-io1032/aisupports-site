"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState, FormEvent } from "react";
import { homeFaqs } from "./data/faqs";
import { magazineIssues } from "./data/magazineIssues";

/* ══════════════════════════════════════════════════════════════
   Counter — 静的HTMLには最終値を出力し、画面外ならスクロールで数え上げる
   ══════════════════════════════════════════════════════════════ */
function Counter({ to }: { to: number }) {
  const elRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const el = elRef.current; if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = el.getBoundingClientRect();
    if (reduce || (r.top < window.innerHeight && r.bottom > 0)) return;
    el.textContent = "0";
    let raf = 0;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now(); const dur = 1800;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = `${Math.round((1 - Math.pow(1 - p, 3)) * to)}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); el.textContent = `${to}`; };
  }, [to]);
  return <span ref={elRef}>{to}</span>;
}

/* ══════════════════════════════════════════════════════════════
   Contact Form（送信処理は従来どおり Formspree）
   ══════════════════════════════════════════════════════════════ */
type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("送信に失敗しました。時間をおいて再度お試しください。");
  const [agreed, setAgreed] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (!agreed) return;
    setStatus("sending");
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("https://formspree.io/f/mqegppnz", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        setAgreed(false);
        setSubmitAttempted(false);
      } else {
        let msg = "送信に失敗しました。時間をおいて再度お試しください。";
        try {
          const body = await res.json();
          if (body?.error) msg = body.error;
        } catch { /* ignore */ }
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("ネットワークエラーが発生しました。接続を確認して再度お試しください。");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="done" role="status">
        <div className="ic" aria-hidden="true">✓</div>
        <h3>送信しました</h3>
        <p>内容を確認次第、見積もりと実行提案書をお送りします。<br />通常1〜2営業日以内にご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} noValidate={false}>
      <div className="frow">
        <div className="field">
          <label htmlFor="f-company">企業名<span className="req">必須</span></label>
          <input id="f-company" name="company" type="text" placeholder="株式会社〇〇" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="f-name">担当者名<span className="req">必須</span></label>
          <input id="f-name" name="name" type="text" placeholder="山田 太郎" autoComplete="name" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-email">メールアドレス<span className="req">必須</span></label>
        <input id="f-email" name="email" type="email" placeholder="yamada@company.co.jp" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="f-message">お問い合わせ内容<span className="req">必須</span></label>
        <textarea id="f-message" name="message" rows={5} placeholder="現在の課題や自動化したい業務、ご要望などをご記入ください。" required />
      </div>
      <div className="field">
        <label htmlFor="f-file">ファイル共有URL<span className="req" style={{ color: "var(--mute)" }}>任意 — Google DriveやDropboxのリンク</span></label>
        <input id="f-file" name="fileUrl" type="url" placeholder="https://drive.google.com/..." />
        <p className="field-note">※ Google Driveの場合は「リンクを知っている全員が閲覧可能」に設定してからURLを貼り付けてください。</p>
      </div>
      <div className="agree">
        <input type="checkbox" id="privacy-agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <label htmlFor="privacy-agree">
          <a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>を読み、内容に同意します。<span className="req">必須</span>
        </label>
      </div>
      {submitAttempted && !agreed && <p className="agree-err" role="alert">プライバシーポリシーへの同意が必要です</p>}
      {status === "error" && <div className="form-error" role="alert">{errorMsg}</div>}
      <button type="submit" className={`btn btn-ink submit${!agreed ? " off" : ""}`} disabled={status === "sending"}>
        {status === "sending" ? <><span className="spinner" aria-hidden="true" />送信中…</> : "相談・見積もり依頼を送る"}
      </button>
      <p className="form-note">課題のデータをGoogle Driveで共有いただければ、現状分析と改善提案書を無料でお送りします。</p>
    </form>
  );
}

/* ══════════════════════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════════════════════ */
const results = [
  { company: "北海道の金融機関", tag: "金融機関", impact: "80h+", impactLabel: "月間業務削減",
    desc: "VBAを活用したExcelワークフローの大幅見直しと社内業務効率化ツールを設計・実装。取引先DX推進と地域AIセミナー講師も担当。",
    tools: ["VBA", "Excel自動化", "業務効率化"] },
  { company: "建設会社", tag: "建設業", impact: "1名分", impactLabel: "事務コスト削減",
    desc: "Dify × LINE APIで、問い合わせに概算見積もりを自動返信する仕組みを構築。社長の見積もり作成を不要にし、事務スタッフ1名分相当の工数削減を実現。",
    tools: ["Dify", "LINE API", "業務自動化"],
    caseHref: "/case-studies/line-estimate-construction", caseLabel: "LINE自動見積もりの導入事例を読む" },
  { company: "大型業務スーパー", tag: "小売・流通", impact: "5施策", impactLabel: "店舗DX同時実装",
    desc: "ロボティクスによる棚割り自動化、配送ルート最適化、AIエージェントによる欠品処理の自動化、HACCP異常検知通知など複数DX施策を同時展開。",
    tools: ["AIエージェント", "経路最適化", "HACCP自動化"],
    caseHref: "/case-studies/haccp-food-retail", caseLabel: "HACCP記録DXの導入事例を読む" },
  { company: "自動車関連の製造業", tag: "製造・自動車", impact: "自動化", impactLabel: "定例業務のAI処理",
    desc: "Excel管理だった社内業務をWebアプリ化。AIエージェントを活用して定例業務の自動化を実現し、担当者が判断業務に集中できる体制を構築。",
    tools: ["Webアプリ開発", "AIエージェント", "業務自動化"] },
  { company: "農業・食品企業", tag: "農業・食品", impact: "完全移行", impactLabel: "デジタル在庫管理",
    desc: "QRコードを活用した在庫管理システムを設計・実装。アナログ台帳によるミスと時間ロスを解消し、リアルタイム在庫可視化を実現。",
    tools: ["QRコード連携", "在庫管理システム", "業務設計"],
    caseHref: "/case-studies/qr-inventory-agri-food", caseLabel: "QR在庫管理の導入事例を読む" },
  { company: "大手スポーツクラブ", tag: "フィットネス", impact: "AI分析", impactLabel: "経営レポート自動生成",
    desc: "GA4データをLooker Studioで可視化し、AI分析で経営陣・店舗スタッフ向け改善提案レポートを自動生成。",
    tools: ["GA4", "Looker Studio", "AI分析"] },
];

const services = [
  { en: "AI Agents", ja: "AIエージェント構築",
    desc: "問い合わせ対応・見積もり作成・報告書生成など、業務文脈を理解して動くAIエージェントを構築。LINE・Slack・Webアプリへ組み込みます。" },
  { en: "Workflow Automation", ja: "業務自動化",
    desc: "業務フローを可視化し、繰り返し作業をAI・ノーコードで自動化。SaaSツール間の連携から社内フロー再設計まで、現場に定着する仕組みを作ります。" },
  { en: "System Integration", ja: "システム連携",
    desc: "LINE、Gmail、CRM、ERP、Slackなど既存ツールをAPIでつなぎ、データの流れを自動化。ツールを変えず、仕組みを変えて業務負担を削減します。" },
  { en: "Data & Analytics", ja: "データ分析",
    desc: "GA4・スプレッドシート・各種DBのデータをLooker StudioやAIで分析。経営判断を支えるダッシュボードと定期レポートの自動生成を実現します。" },
];

const agentFeatures = [
  { title: "自動見積もり生成", text: "LINE・Webフォームからの問い合わせをAIが解析し、自動で見積もり書を生成・送付。人手ゼロで対応完結。" },
  { title: "欠品処理・タイマー自動化", text: "在庫欠品の検知からタイマー起動による自動発注・担当者通知まで、定型処理をフル自動化。" },
  { title: "自動シフト管理", text: "スタッフの希望・スキル・法令制約を学習したAIが最適シフトを自動生成。管理工数を大幅削減。" },
  { title: "医療現場の売上予測・価格提案", text: "診療データ・来院履歴から売上を予測し、現場に適した価格サジェスチョンをリアルタイムで提供。" },
  { title: "定期レポート自動通知", text: "KPIダッシュボードを自動集計し、経営陣・現場スタッフへのレポートをSlack・メールで自動配信。" },
  { title: "ドキュメント自動生成", soon: true, text: "議事録・業務マニュアル・提案書など、各種ドキュメントのAI自動作成機能を順次リリース予定。" },
];

const consultingItems = [
  { num: "01", title: "AI横展開・デジタル戦略", desc: "自社で実証したAIサービスを同業他社へ横展開するビジネスモデルを設計。デジタル戦略の全体像をグランドデザインとして策定します。" },
  { num: "02", title: "海外展開支援", desc: "自社のサービス・コンテンツ・商品を海外市場へ展開するための戦略立案とデジタルマーケティング設計をご支援します。" },
  { num: "03", title: "ワークライフバランス設計", desc: "「金曜15時終業」など、AI活用で削減した業務時間を社員の生活の質向上に還元。社内定着率・採用競争力の向上を設計します。" },
  { num: "04", title: "海外人材リクルーティング", desc: "正社員採用を海外にも広げるため、SNS発信・多言語求人・ビザ対応まで含めたグローバル採用戦略を構築します。" },
  { num: "05", title: "グランドデザイン設計", desc: "経営者と並走し、3〜5年の事業グランドデザインを策定。AIを起点とした次のステージへの道筋を具体化します。" },
  { num: "06", title: "DX後の成長戦略", desc: "業務削減で生まれた「余白」を新規事業・新サービスの創出エネルギーへ転換。持続的成長の設計をサポートします。" },
];

const tools = [
  "Dify", "LINE Messaging API", "Make (Integromat)", "Google Workspace",
  "Looker Studio", "GA4", "Python", "VBA / Excel",
  "Next.js / React", "Notion API", "Slack API", "QRコード連携",
  "n8n", "Zapier", "OpenAI API", "Claude API",
];

const steps = [
  { no: "01", title: "Hearing", text: "現場の業務フローと課題をヒアリング。ムダな工程と自動化できる領域を特定します。" },
  { no: "02", title: "Design", text: "最適なツール選定と実装設計。既存システムとの接続方法まで具体化します。" },
  { no: "03", title: "Build", text: "スピーディに実装し、実際の業務フローに組み込みます。小さく始めて確実に動かします。" },
  { no: "04", title: "Improve", text: "運用データを見ながら継続改善・拡張。「使われる仕組み」へと育てます。" },
];

const stats = [
  { to: 80, suffix: "h+/月", label: "業務時間削減実績" },
  { to: 10, suffix: "社+", label: "DX支援実績" },
  { to: 6, suffix: "業種+", label: "対応業種数" },
  { to: 5, suffix: "施策", label: "単一企業内最大導入数" },
];

/* ══════════════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const latest = magazineIssues[0];
  return (
    <main id="top">
      {/* ── Hero ── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <p className="kicker" data-head>AI Agents for Business</p>
          <h1 id="hero-title" data-head>
            <span className="ln">業務のムダを、</span>
            <span className="ln">AIが動く仕組みに。</span>
          </h1>
          <p className="p-lead" data-head>
            御社の業務に合わせてAIエージェントを設計・構築。<br />
            いまのLINE・Gmail・Excel・CRMのまま、問い合わせ対応や見積もり作成を自動で回します。
          </p>
          <div className="ctas" data-head>
            <a className="btn btn-ink" href="#contact">無料で相談する</a>
            <a className="tlink" href="#results">実績を見る <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="panel-wrap" data-head>
          <div className="panel" role="img" aria-label="AIエージェントが問い合わせを処理する画面のイメージ">
            <div className="panel-top" aria-hidden="true"><i /><i /><i /><b>AI Agent — 問い合わせ対応</b><span className="live">稼働中</span></div>
            <div className="panel-body" aria-hidden="true">
              <div className="inbox">
                <h3>Inbox</h3>
                <div className="item act"><span className="src">LINE</span><div><p>外壁塗装の見積もりをお願いしたいです（約120㎡）</p><small>たった今</small></div></div>
                <div className="item"><span className="src">Gmail</span><div><p>来週の定例レポートを共有してください</p><small>12分前</small></div></div>
                <div className="item"><span className="src">Form</span><div><p>在庫切れ商品の入荷予定を知りたい</p><small>28分前</small></div></div>
              </div>
              <div className="alog">
                <h3>Agent</h3>
                <div className="astep done"><span className="ic" /><div>問い合わせ内容を読み取り<code>種別: 外壁塗装 / 面積: 120㎡</code></div></div>
                <div className="astep done"><span className="ic" /><div>単価表から概算見積もりを作成<code>estimate.pdf</code></div></div>
                <div className="astep done"><span className="ic" /><div>お客さまへLINEで返信</div></div>
                <div className="astep"><span className="ic" /><div>担当者へSlackで通知</div></div>
              </div>
            </div>
          </div>
          <p className="note">※ 画面はイメージです</p>
        </div>
      </section>

      <section className="inds" aria-label="対応業種">
        <div className="wrap">
          <p data-r>金融から小売・製造まで、現場の業務に導入しています</p>
          <ul data-r><li>金融</li><li>建設</li><li>小売</li><li>製造</li><li>農業・食品</li><li>フィットネス</li></ul>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="sec" aria-labelledby="why-h">
        <div className="wrap">
          <p className="kicker" data-r>Why AISupports</p>
          <h2 className="h2" id="why-h" data-lines><span className="ln">ツールは変えずに、</span><span className="ln">仕組みを変える。</span></h2>
          <div className="vgrid">
            <div className="v" data-r><span className="n">01</span><h3>業務フローの棚卸しから</h3><p>どこにムダがあり、どこを任せられるか。現場のヒアリングから自動化する範囲を決めます。</p></div>
            <div className="v" data-r><span className="n">02</span><h3>いまのツールのままつなぐ</h3><p>LINE、Gmail、Excel、CRM、ERP、SlackをAPIで連携。新しいシステムに乗り換える必要はありません。</p></div>
            <div className="v" data-r><span className="n">03</span><h3>小さく作って、すぐ使う</h3><p>シンプルな自動化なら1〜2週間が目安。実際の業務に組み込みながら育てます。</p></div>
            <div className="v" data-r><span className="n">04</span><h3>定着まで伴走</h3><p>運用データを見ながら改善・拡張。北海道全域は現地で、道外はオンラインで支えます。</p></div>
          </div>
        </div>
      </section>

      {/* ── Demo ── */}
      <section className="sec demo" aria-labelledby="demo-h">
        <div className="wrap demo-grid">
          <div>
            <p className="kicker" data-r>How it works</p>
            <h2 className="h2" id="demo-h" data-lines style={{ fontSize: "clamp(26px,2.9vw,38px)" }}>
              <span className="ln">問い合わせから見積もりまで、</span><span className="ln">エージェントが進める。</span>
            </h2>
            <p className="p-lead" data-r>建設会社さま向けに構築した、LINEの問い合わせに概算見積もりを自動で返すエージェントの流れです。</p>
            <ol className="flow">
              <li data-r><span>01</span><div><b>受信</b><p>LINEで届いた問い合わせを受け取る</p></div></li>
              <li data-r><span>02</span><div><b>解析</b><p>工事内容・数量・場所を読み取る</p></div></li>
              <li data-r><span>03</span><div><b>作成</b><p>単価表をもとに概算見積もりを作成</p></div></li>
              <li data-r><span>04</span><div><b>返信</b><p>お客さまに返信し、担当者にも通知</p></div></li>
            </ol>
          </div>
          <div>
            <div className="chat" data-list role="img" aria-label="LINEでの見積もり自動返信の動作イメージ">
              <div className="hd" aria-hidden="true"><span>〇〇工務店 公式LINE</span><span>動作イメージ</span></div>
              <div className="msg u" aria-hidden="true">外壁の塗り替えを考えています。2階建てで、外壁はだいたい120㎡です。札幌市内です。</div>
              <div className="msg sys" aria-hidden="true">agent › 外壁塗装 / 120㎡ / 札幌市</div>
              <div className="msg a" aria-hidden="true">お問い合わせありがとうございます。いただいた内容から概算をお出ししました。</div>
              <div className="quote" aria-hidden="true"><h4>概算見積もり（外壁塗装）</h4><div><span>足場設置</span><span>¥◯◯◯,◯◯◯</span></div><div><span>塗装 120㎡</span><span>¥◯◯◯,◯◯◯</span></div><div className="tot"><span>概算合計</span><span>¥◯,◯◯◯,◯◯◯</span></div></div>
              <div className="msg sys" aria-hidden="true">agent › 担当者へ通知しました</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Agent ── */}
      <section className="sec" id="ai-agent" aria-labelledby="ag-h">
        <div className="wrap">
          <p className="kicker" data-r>AI Agents</p>
          <h2 className="h2" id="ag-h" data-lines><span className="ln">企業の課題をAIに覚えさせ、</span><span className="ln">業務を自動化する。</span></h2>
          <p className="p-lead" data-r>単なるツール導入ではなく、企業固有の業務フロー・ルール・判断基準をAIに学習させることで、自律的に動くエージェントを構築します。</p>
          <div className="capgrid">
            {agentFeatures.map((f, i) => (
              <div className="cap" data-r key={f.title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}{f.soon && <span className="soon">近日公開</span>}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <p className="ag-note" data-r>
            <strong>今後対応予定</strong>：議事録・業務マニュアル・提案書など、各種ドキュメントのAI自動生成機能を順次リリース予定です。現在はヒアリングベースでご提案を進めています。
          </p>
          <div data-r style={{ marginTop: 36 }}><a className="tlink" href="#contact">AIエージェント導入を相談する <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      {/* ── Consulting ── */}
      <section className="sec cons" id="consulting" aria-labelledby="cs-h">
        <div className="wrap">
          <p className="kicker" data-r>AI Strategy Consulting</p>
          <h2 className="h2" id="cs-h" data-lines><span className="ln">AIで削減したその先を、</span><span className="ln">グランドデザインする。</span></h2>
          <p className="p-lead" data-r>業務効率化はゴールではなく、スタートです。生まれた「余白」と「データ」を活かし、経営者と共に次のステージへの道筋を描きます。</p>
          <ol className="conslist">
            {consultingItems.map((c) => (
              <li data-r key={c.num}><span>{c.num}</span><div><h3>{c.title}</h3><p>{c.desc}</p></div></li>
            ))}
          </ol>
          <div data-r><a className="tlink" href="#contact">コンサルティングを相談する <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="sec" id="results" aria-labelledby="r-h">
        <div className="wrap">
          <p className="kicker" data-r>Results</p>
          <h2 className="h2" id="r-h" data-lines><span className="ln">現場で、動いています。</span></h2>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" data-r key={s.label}>
                <b><Counter to={s.to} /><small>{s.suffix}</small></b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="cgrid">
            {results.map((r) => (
              <article className="case" data-r key={r.company}>
                <span className="ind">{r.tag}</span>
                <h3>{r.company}</h3>
                <p>{r.desc}</p>
                <div className="tags">{r.tools.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="res"><b>{r.impact}</b><span>{r.impactLabel}</span></div>
                {r.caseHref && <Link className="tlink" href={r.caseHref}>{r.caseLabel} <span aria-hidden="true">→</span></Link>}
              </article>
            ))}
          </div>
          <div data-r style={{ marginTop: 36 }}><Link className="tlink" href="/case-studies">導入事例をすべて見る <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      {/* ── Magazine ── */}
      <section className="sec" aria-labelledby="mg-h" style={{ paddingTop: 0 }}>
        <div className="wrap mag">
          <div>
            <p className="kicker" data-r>AI Practice Magazine</p>
            <h2 className="h2" id="mg-h" data-lines><span className="ln">AIニュースを、</span><span className="ln">仕事の判断に。</span></h2>
            <p className="p-lead" data-r>出典と数字を確かめ、架空データで試す。AI実践マガジンをお届けします。</p>
            <div data-r style={{ marginTop: 20 }}><Link className="tlink" href="/magazine">マガジン一覧を見る <span aria-hidden="true">→</span></Link></div>
          </div>
          <Link className="issue" data-r href={`/magazine/${latest.date}`}>
            <span className="d">最新号 — {latest.date.replaceAll("-", ".")}</span>
            <h3>{latest.title}</h3>
            <span className="tlink">読む <span aria-hidden="true">→</span></span>
          </Link>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="sec" id="services" aria-labelledby="s-h" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker" data-r>Services</p>
          <h2 className="h2" id="s-h" data-lines><span className="ln">エージェントを中心に、</span><span className="ln">業務をつなぐ。</span></h2>
          <p className="p-lead" data-r>業務整理から実装・AI戦略まで、必要な支援をワンストップで提供します。PoC止まりではなく、現場で「使われる仕組み」を作ります。</p>
          <div className="svc-list">
            {services.map((s, i) => (
              <div className="svc" data-r key={s.en}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.en}<small>{s.ja}</small></h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sec process" id="process" aria-labelledby="p-h">
        <div className="wrap">
          <p className="kicker" data-r>Process</p>
          <h2 className="h2" id="p-h" data-lines><span className="ln">小さく作って、</span><span className="ln">現場で育てる。</span></h2>
          <div className="pgrid">
            {steps.map((s) => (
              <div className="ps" data-r key={s.no}><span className="n">{s.no}</span><h3>{s.title}</h3><p>{s.text}</p></div>
            ))}
          </div>
          <h3 className="sr-only">活用するツール・技術</h3>
          <ul className="stack" data-r aria-label="活用するツール・技術">{tools.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec" id="faq" aria-labelledby="f-h">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker" data-r>FAQ</p>
            <h2 className="h2" id="f-h" data-lines><span className="ln">よくあるご質問</span></h2>
          </div>
          <div className="qa" data-r>
            {homeFaqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="sec contact" id="contact" aria-labelledby="c-h">
        <div className="wrap">
          <p className="kicker" data-r>Contact</p>
          <h2 className="h2" id="c-h" data-lines><span className="ln">まずは、</span><span className="ln">現場の話を聞かせてください。</span></h2>
          <p className="p-lead" data-r>「どこから手をつければいいか分からない」という段階から相談できます。課題のExcelやデータを送っていただければ、現状分析と具体的な実行提案書を無料でお送りします。</p>
          <ul className="cpts" data-r>
            <li>無料ヒアリング・提案書対応</li><li>北海道全域対応可能</li><li>ファイル送付で即見積もり</li><li>実績ベースの具体的提案</li>
          </ul>
          <div className="cbox" data-r>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
