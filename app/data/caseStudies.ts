// 導入事例のデータ。
// 一覧ページ・詳細ページ・構造化データ（JSON-LD）・sitemap.xml がすべてこの配列を参照する。
// 新しい事例はこの配列に1件追加するだけで、ページ生成と sitemap 掲載まで自動で行われる。
//
// 掲載ルール：
// ・事実確認できた内容だけを書く（数字・技術・対応内容）
// ・クライアント企業名・個人名は書かない（掲載了承済みの事例のみ）

export type CaseStudy = {
  slug: string;
  /** 一覧カード・パンくず用の短い名前 */
  shortTitle: string;
  /** ページの見出し（h1） */
  title: string;
  /** meta description・一覧の説明文 */
  description: string;
  /** 冒頭の要約（このページで分かること） */
  summary: string;
  industry: string;
  target: string;
  /** システムとして稼働している技術 */
  techStack: string[];
  /** 開発体制（開発に使った道具など）。無ければ省略 */
  devNote?: string;
  challenge: string[];
  solution: string[];
  results: { label: string; before: string; after: string }[];
  /** 同じ課題を持つ読者に向けた一文 */
  forReaders: string;
  ctaLabel: string;
  /** 公開日（YYYY-MM-DD） */
  publishedAt: string;
  /** 更新日（YYYY-MM-DD） */
  updatedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "haccp-food-retail",
    shortTitle: "食品小売のHACCP記録DX",
    title: "食品小売のHACCP記録を1つの入力画面に統合し、現場の入力時間を月約10時間から約3時間へ",
    description:
      "複数店舗・複数部門の食品小売企業で、部門ごとのHACCP記録フォームを1つのURLに統合。スマホからログイン不要で入力でき、異常時のみ責任者へ自動通知。現場の入力時間を月約10時間から約3時間に削減した導入事例です。",
    summary:
      "複数店舗・複数部門を持つ食品小売企業で、HACCPの確認記録を部門ごとの複数フォームから1つのURLに統合した事例です。スマートフォンからログイン不要で入力でき、異常値があった場合だけ責任者へ自動通知します。導入により、現場作業員の入力時間は月約10時間から約3時間に、管理者の確認時間は月約2.5時間からほぼ0時間になりました。",
    industry: "食品小売（複数店舗・複数部門）",
    target: "HACCPの確認記録・異常時の報告",
    techStack: ["Supabase", "AppSheet", "Google Apps Script（GAS）", "自動通知", "スマートフォン向け入力画面"],
    devNote:
      "開発には、Claude Code・Codex・Manus などのAIコーディングツールを活用しています。",
    challenge: [
      "部門ごとに別々の入力フォームを使っており、現場作業員全体で月約10時間の入力作業が発生していました。",
    ],
    solution: [
      "部門ごとの複数フォームを、1つのURLに統合しました。",
      "スマートフォンから、ログインなしで入力できる仕組みに変更しました。",
      "正常値は保存のみとし、異常値が入力されたときだけ責任者へ自動で通知するようにしました。",
    ],
    results: [
      { label: "現場作業員の入力時間", before: "約10時間/月", after: "約3時間/月" },
      { label: "管理者の確認時間", before: "約2.5時間/月", after: "ほぼ0時間" },
    ],
    forReaders:
      "HACCPに沿った衛生管理の記録は、食品を扱う多くの事業者に求められています。紙やバラバラのフォームで記録している場合、入力の手間と確認の手間の両方を減らせる可能性があります。",
    ctaLabel: "自社の衛生管理・点検記録の効率化を相談する",
    publishedAt: "2026-10-07",
    updatedAt: "2026-10-07",
  },
  {
    slug: "line-estimate-construction",
    shortTitle: "建設業のLINE自動見積もり",
    title: "建設業の見積もり対応をLINEで自動化し、社長が毎回行っていた見積もり作成を不要に",
    description:
      "建設業のクライアント企業で、過去の見積もり資料をDifyのナレッジに登録し、LINEで面積や工事の種類を選ぶだけで概算見積もりを自動返信する仕組みを構築。社長の見積もり作成を不要にし、事務スタッフ1名分相当の工数を削減した導入事例です。",
    summary:
      "建設業のクライアント企業で、LINEからの問い合わせに概算見積もりを自動で返信する仕組みを構築した事例です。これまでは問い合わせのたびに、社長が過去のデータを参照しながら見積もりを作成していました。過去の見積もり資料をAI（Dify）のナレッジに登録し、お客様がLINE上で面積や工事の種類を選ぶだけで、該当する概算見積もりが自動で返信されるようにしました。",
    industry: "建設業",
    target: "問い合わせ対応・概算見積もりの作成",
    techStack: ["Dify", "LINE Messaging API"],
    devNote:
      "開発には、Claude Code・Codex・Manus などのAIコーディングツールを活用しています。",
    challenge: [
      "見積もりの依頼があるたびに、社長が過去のデータを参照しながら見積もりを作成していました。",
    ],
    solution: [
      "過去の見積もり資料を、Difyのナレッジに登録しました。",
      "LINE公式アカウントとDifyを連携し、LINE上で面積や工事の種類を選べるようにしました。",
      "選択内容に応じた概算見積もりを、自動で返信する仕組みにしました。",
    ],
    results: [
      {
        label: "見積もりの作成",
        before: "問い合わせのたびに社長が過去データを参照して作成",
        after: "LINE上で概算見積もりを自動返信（社長の作成作業は不要に）",
      },
      { label: "事務スタッフの工数", before: "—", after: "1名分相当を削減" },
    ],
    forReaders:
      "見積もりを特定の人が毎回手作業で作っている場合、過去の見積もりをAIに覚えさせることで、問い合わせへの一次対応を自動化できる可能性があります。",
    ctaLabel: "自社の見積もり対応の自動化を相談する",
    publishedAt: "2026-10-07",
    updatedAt: "2026-10-07",
  },  {
    slug: "qr-inventory-agri-food",
    shortTitle: "農業・食品企業のQR在庫管理",
    title: "農業・食品企業の在庫管理を、アナログ台帳からQRコードによるデジタル管理へ完全移行",
    description:
      "農業・食品企業で、アナログの台帳で行っていた在庫管理を、QRコードを活用した在庫管理システムへ完全移行。台帳によるミスと時間ロスを解消し、在庫をリアルタイムで確認できるようにした導入事例です。",
    summary:
      "農業・食品企業で、アナログの台帳で行っていた在庫管理を、QRコードを活用した在庫管理システムに置き換えた事例です。台帳への記録に伴うミスや時間のロスを解消し、在庫の状況をリアルタイムで確認できるようにしました。紙の台帳からデジタル管理への完全移行を実現しています。",
    industry: "農業・食品",
    target: "在庫管理",
    techStack: ["QRコード", "在庫管理システム"],
    challenge: [
      "在庫をアナログの台帳で管理しており、記録のミスや時間のロスが発生していました。",
    ],
    solution: [
      "QRコードを活用した在庫管理システムを設計・実装しました。",
      "在庫の記録を、アナログの台帳からシステムへ完全に移行しました。",
    ],
    results: [
      { label: "在庫の管理方法", before: "アナログの台帳", after: "QRコードによるデジタル管理（完全移行）" },
      { label: "在庫状況の確認", before: "—", after: "リアルタイムで確認可能に" },
    ],
    forReaders:
      "在庫を紙の台帳やホワイトボードで管理している場合、QRコードを使うことで、大きな設備投資をせずに記録の手間とミスを減らせる可能性があります。",
    ctaLabel: "自社の在庫管理のデジタル化を相談する",
    publishedAt: "2026-10-08",
    updatedAt: "2026-10-08",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
