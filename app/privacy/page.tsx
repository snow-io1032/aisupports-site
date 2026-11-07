import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | AISupports",
  description: "AISupportsのプライバシーポリシー。お客様の個人情報の取り扱いについて説明しています。",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "1. 事業者情報",
    content: `事業者名：mlma（AISupports）
代表者：林 毅（Hayashi Tsuyoshi）
所在地：〒060-0005 北海道札幌市中央区北5条西11丁目15-4
お問い合わせ：サイト内お問い合わせフォームよりご連絡ください`,
  },
  {
    title: "2. 収集する個人情報",
    content: `当サイトでは、お問い合わせフォームご利用の際に以下の情報をお預かりします。
・会社名
・担当者名
・メールアドレス
・お問い合わせ内容
・添付ファイル（任意）`,
  },
  {
    title: "3. 個人情報の利用目的",
    content: `お預かりした個人情報は、以下の目的にのみ使用します。
・お問い合わせへの回答・ご提案書の送付
・サービスに関するご連絡
・契約履行に必要な連絡
上記以外の目的で利用することはありません。`,
  },
  {
    title: "4. 第三者提供について",
    content: `お客様の同意なく、第三者へ個人情報を提供・開示・売却することはありません。
ただし、法令に基づく場合はこの限りではありません。`,
  },
  {
    title: "5. 個人情報の管理",
    content: `収集した個人情報は、適切なセキュリティ対策を講じて管理します。
情報の漏洩・紛失・改ざん防止のため、必要な安全管理措置を実施します。`,
  },
  {
    title: "6. Cookieの使用について",
    content: `当サイトはGoogle Analytics（アクセス解析）を使用しており、
Cookieを通じて匿名のアクセス情報を収集する場合があります。
個人を特定する情報は収集しません。
ブラウザの設定でCookieを無効にすることが可能です。`,
  },
  {
    title: "7. 個人情報の開示・訂正・削除",
    content: `ご本人からの個人情報の開示・訂正・削除のご要望には、
本人確認の上、合理的な期間内に対応いたします。
お問い合わせフォームよりご連絡ください。`,
  },
  {
    title: "8. プライバシーポリシーの変更",
    content: `本ポリシーは必要に応じて改訂することがあります。
重要な変更がある場合はサイト上でお知らせします。`,
  },
  {
    title: "9. お問い合わせ",
    content: `プライバシーポリシーに関するお問い合わせは、
サイト内お問い合わせフォームよりご連絡ください。`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="legal">
      <header className="pg-head">
        <p className="kicker" data-head>PRIVACY POLICY</p>
        <h1 data-head>プライバシーポリシー</h1>
        <p className="upd" data-head>制定日：2024年　最終更新：2026年3月</p>
      </header>

      <p className="intro" data-r>
        mlma（AISupports、以下「当社」）は、お客様の個人情報保護を重要な責務と考え、
        以下のプライバシーポリシーに従って適切に取り扱います。
      </p>

      {sections.map((s, i) => (
        <section className="lsec" data-r key={i}>
          <h2>{s.title}</h2>
          <p>{s.content}</p>
        </section>
      ))}

      <div className="back">
        <Link className="tlink" href="/">← トップページに戻る</Link>
      </div>
    </main>
  );
}
