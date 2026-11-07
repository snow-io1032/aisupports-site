import type { Metadata } from "next";
import Link from "next/link";

// 404ページ。検索結果に出ないよう noindex にする。
export const metadata: Metadata = {
  title: "ページが見つかりません | AISupports",
  description: "お探しのページは見つかりませんでした。AISupportsのトップページからお探しください。",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="nf">
      <p className="kicker">404</p>
      <h1>ページが見つかりません</h1>

      <p>
        お探しのページは移動または削除された可能性があります。<br />
        トップページから目的の情報をお探しください。
      </p>

      <div className="acts">
        <Link className="btn btn-ink" href="/">トップページへ戻る</Link>
        <Link className="btn btn-line" href="/#contact">AI導入・業務改善について相談する</Link>
      </div>
    </main>
  );
}
