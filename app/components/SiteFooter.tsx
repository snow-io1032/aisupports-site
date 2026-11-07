"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandMark } from "./SiteHeader";

export default function SiteFooter() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <Link href="/" className="brand"><BrandMark /><span className="brand-name">AISupports</span></Link>
              <p style={{ margin: "10px 0 0", fontSize: 13, color: "var(--mute)" }}>企業向けAIエージェント構築</p>
            </div>
            <nav aria-labelledby="ft-services">
              <h2 id="ft-services">サービス</h2>
              <Link href="/#ai-agent">AIエージェント</Link>
              <Link href="/#consulting">コンサルティング</Link>
              <a href="https://aisupports.cc/meo">MEO</a>
              <a href="https://www.hojyokins.jp/" target="_blank" rel="noopener noreferrer">補助金申請AIサポート</a>
            </nav>
            <nav aria-labelledby="ft-company">
              <h2 id="ft-company">AISupports</h2>
              <Link href="/case-studies">導入事例</Link>
              <Link href="/#process">進め方</Link>
              <Link href="/magazine">AI実践マガジン</Link>
              <Link href="/#contact">お問い合わせ</Link>
            </nav>
            <nav aria-labelledby="ft-legal">
              <h2 id="ft-legal">規約</h2>
              <Link href="/company">会社概要</Link>
              <Link href="/privacy">プライバシーポリシー</Link>
              <Link href="/terms">利用規約</Link>
              <Link href="/tokushoho">特定商取引法に基づく表記</Link>
            </nav>
          </div>
          <p className="copy">© 2026 AISupports（mlma）. All rights reserved.</p>
        </div>
      </footer>
      <Link className={`btn btn-ink float${showFloat ? " on" : ""}`} href="/#contact" tabIndex={showFloat ? 0 : -1} aria-hidden={!showFloat}>
        無料相談
      </Link>
    </>
  );
}
