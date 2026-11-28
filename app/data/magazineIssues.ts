export type MagazineIssue = {
  date: string;
  title: string;
  description: string;
  verifiedAt: string;
};

// Add only reviewed, publication-approved editions. New entries require a rebuild.
export const magazineIssues: MagazineIssue[] = [
  {
    date: "2026-11-28",
    title: "札幌の中小企業が、AIエージェントで業務を回す形。",
    description:
      "AISupports自身の部門別AIエージェント運用（一次情報）、国内の中小企業・自治体の公開事例4件（出典つき）、自社プロダクトJISSEKIの多言語化の作業記録。AI導入を「1業務から始める」ための実例集。",
    verifiedAt: "2026-11-28",
  },
  {
    date: "2026-11-25",
    title: "海外の中小企業は、AIをどこから使ったか。",
    description:
      "シンガポールとオーストラリアの中小企業5社のAI活用事例。問い合わせ対応、コンテンツ制作、請求処理、見積もり、データ分類。小さく始めて、時間と件数で確かめた実例を出典つきで紹介します。",
    verifiedAt: "2026-11-25",
  },
  {
    date: "2026-11-07",
    title: "AIに任せる前に、データと完成条件を整える。",
    description:
      "広告計測、短時間の雨予測、画像AIの失敗分析。今号は3本と、曖昧な仕事の依頼に必要な情報を質問してもらう、小さな実験を届けます。",
    verifiedAt: "2026-11-07",
  },
  {
    date: "2026-11-03",
    title: "任せる前に、根拠と数字を。",
    description:
      "AIニュースを現場で使える判断材料へ。5つの話題と2つの架空データ試行から、根拠・数字・確かめ方を考えるAI実践マガジン。",
    verifiedAt: "2026-11-04",
  },
];

export const getMagazineIssue = (date: string) =>
  magazineIssues.find((issue) => issue.date === date);
