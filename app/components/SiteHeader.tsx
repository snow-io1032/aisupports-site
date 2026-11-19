"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** ブランドマーク（従来のロゴをそのまま使用） */
export function BrandMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect width="32" height="32" rx="9" fill="#3B9EE8" />
      <polygon points="16,5 7,27 12,27 16,16 20,27 25,27" fill="#FFF8E7" />
      <rect x="13" y="19" width="6" height="2.5" rx="1" fill="#F5C842" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // ページ移動したらメニューを閉じる（レンダー中に前回のパスと比較）
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setDdOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const w = window as unknown as { __lenis?: { stop: () => void; start: () => void } };
    if (menuOpen) w.__lenis?.stop(); else w.__lenis?.start();
  }, [menuOpen]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDdOpen(false);
      setMenuOpen((open) => { if (open) menuBtnRef.current?.focus(); return false; });
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`hdr${solid || menuOpen ? " solid" : ""}`}>
        <div className="hdr-in">
          <Link href="/" className="brand" aria-label="AISupports トップページ">
            <BrandMark />
            <span className="brand-name">AISupports</span>
          </Link>

          <nav className="gnav" aria-label="メインメニュー">
            <div className="dd" ref={ddRef}>
              <button className="dd-btn" type="button" aria-expanded={ddOpen} aria-controls="dd-services"
                onClick={() => setDdOpen((v) => !v)}>
                サービス<span className="car" aria-hidden="true" />
              </button>
              <div className="dd-menu" id="dd-services" hidden={!ddOpen}>
                <span className="grp">2本柱</span>
                <Link href="/#ai-agent" onClick={() => setDdOpen(false)}>
                  AIエージェント・業務自動化<small>問い合わせ・見積もりの自動化</small>
                </Link>
                <Link href="/#services" onClick={() => setDdOpen(false)}>
                  AI検索・集客サイト構築<small>生成AI時代に見つけてもらえる店へ</small>
                </Link>
                <span className="grp">専門サービス</span>
                <a href="https://aisupports.cc/meo">
                  MEOローカル集客<small>地図検索を、売上に変える</small>
                </a>
                <Link href="/real-estate" onClick={() => setDdOpen(false)}>
                  不動産向け提案<small>SUUMO LP自動生成・ツアー化</small>
                </Link>
                <a href="https://www.hojyokins.jp/" target="_blank" rel="noopener noreferrer">
                  補助金申請AIサポート<small>hojyokins.jp ↗</small>
                </a>
              </div>
            </div>
            <Link href="/#results">実績</Link>
            <Link href="/#process">進め方</Link>
            <Link href="/magazine">AI実践マガジン</Link>
            <Link href="/#contact">お問い合わせ</Link>
          </nav>

          <Link className="btn btn-ink" href="/#contact">無料相談</Link>
          <button ref={menuBtnRef} className="menu-btn" type="button"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-controls="site-mobile-menu" aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}>
            <i /><i />
          </button>
        </div>
      </header>

      <div id="site-mobile-menu" className="menu-panel" hidden={!menuOpen}>
        <Link href="/#services" onClick={close}>サービス</Link>
        <span className="grp">2本柱</span>
        <Link className="sub" href="/#ai-agent" onClick={close}>AIエージェント・業務自動化</Link>
        <Link className="sub" href="/#services" onClick={close}>AI検索・集客サイト構築</Link>
        <span className="grp">専門サービス</span>
        <a className="sub" href="https://aisupports.cc/meo" onClick={close}>MEOローカル集客</a>
        <Link className="sub" href="/real-estate" onClick={close}>不動産向け提案</Link>
        <a className="sub" href="https://www.hojyokins.jp/" target="_blank" rel="noopener noreferrer" onClick={close}>補助金申請AIサポート ↗</a>
        <Link href="/#results" onClick={close}>実績</Link>
        <Link href="/#process" onClick={close}>進め方</Link>
        <Link href="/magazine" onClick={close}>AI実践マガジン</Link>
        <Link href="/#contact" onClick={close}>お問い合わせ</Link>
        <Link className="btn btn-ink" href="/#contact" onClick={close}>無料で相談する</Link>
      </div>
      <div className="hdr-spacer" aria-hidden="true" />
    </>
  );
}
