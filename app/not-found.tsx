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
    <main style={{ minHeight: "70vh", background: "#FFFDF5" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ marginBottom: "16px" }}>
          <span style={{
            background: "#E8F4FD", color: "#3B9EE8",
            padding: "6px 20px", borderRadius: "999px",
            fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em",
          }}>404</span>
        </div>

        <h1 style={{
          fontSize: "1.75rem", fontWeight: 800,
          color: "#1A1A2E", marginTop: "12px", marginBottom: "16px",
        }}>ページが見つかりません</h1>

        <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "40px" }}>
          お探しのページは移動または削除された可能性があります。<br />
          トップページから目的の情報をお探しください。
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/">トップページへ戻る</Link>
          <Link className="btn btn-outline" href="/#contact">AI導入・業務改善について相談する</Link>
        </div>
      </div>
    </main>
  );
}
