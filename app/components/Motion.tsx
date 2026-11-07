"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
  スクロールに合わせて要素をスッと浮かび上がらせる演出（GSAP + ScrollTrigger + Lenis）。
  ライブラリは public/vendor に置いたファイルを読み込む（npm依存を増やさないため）。
  マークアップ側の指定：
    data-head  … ページ表示時に順に表示
    data-r     … 画面に入ったら表示
    data-lines … 見出しの .ln を1行ずつ表示
    data-list  … 子要素を1つずつ表示
  「視差効果を減らす」設定の人には何もしない（最初から全部表示）。
*/

type Gsap = {
  registerPlugin: (...p: unknown[]) => void;
  fromTo: (t: unknown, a: object, b: object) => unknown;
  utils: { toArray: (s: string) => Element[] };
  ticker: { add: (f: (t: number) => void) => void; lagSmoothing: (n: number) => void };
};
type ST = { refresh: () => void; getAll: () => { kill: () => void }[]; update: () => void };
type LenisT = { on: (e: string, f: () => void) => void; raf: (t: number) => void; stop: () => void; start: () => void; scrollTo: (t: number) => void };
type W = Window & { gsap?: Gsap; ScrollTrigger?: ST; Lenis?: new (o: object) => LenisT; __lenis?: LenisT; __motionOn?: boolean };

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[data-src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src; s.async = false; s.dataset.src = src;
    s.onload = () => resolve(); s.onerror = () => reject(new Error(src));
    document.head.appendChild(s);
  });
}

let ready: Promise<void> | null = null;
function ensureLibs() {
  if (!ready) {
    ready = Promise.all([
      loadScript("/vendor/gsap.min.js"),
      loadScript("/vendor/ScrollTrigger.min.js"),
      loadScript("/vendor/lenis.min.js"),
    ]).then(() => {
      const w = window as W;
      if (!w.gsap || !w.ScrollTrigger) throw new Error("gsap missing");
      w.gsap.registerPlugin(w.ScrollTrigger);
      if (w.Lenis && !w.__lenis) {
        const lenis = new w.Lenis({ lerp: 0.09, anchors: true });
        w.__lenis = lenis;
        lenis.on("scroll", () => w.ScrollTrigger!.update());
        w.gsap.ticker.add((t) => lenis.raf(t * 1000));
        w.gsap.ticker.lagSmoothing(0);
      }
    });
  }
  return ready;
}

function reveal() {
  const w = window as W;
  const gsap = w.gsap!, ST = w.ScrollTrigger!;
  ST.getAll().forEach((t) => t.kill());
  const EASE = "expo.out";
  const FROM = { autoAlpha: 0, y: 28, filter: "blur(10px)" };
  const TO = { autoAlpha: 1, y: 0, filter: "blur(0px)", clearProps: "filter" };
  const head = gsap.utils.toArray("[data-head]");
  if (head.length) gsap.fromTo(head, FROM, { ...TO, duration: 1.4, stagger: 0.12, ease: EASE, delay: 0.05 });
  gsap.utils.toArray("[data-r]").forEach((el) => {
    gsap.fromTo(el, FROM, { ...TO, duration: 1.3, ease: EASE, scrollTrigger: { trigger: el, start: "top 90%" } });
  });
  gsap.utils.toArray("[data-lines]").forEach((h) => {
    gsap.fromTo(h.querySelectorAll(".ln"), { autoAlpha: 0, y: 32, filter: "blur(10px)" },
      { ...TO, duration: 1.4, stagger: 0.14, ease: EASE, scrollTrigger: { trigger: h, start: "top 88%" } });
  });
  gsap.utils.toArray("[data-list] > *").forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, y: 18, filter: "blur(6px)" },
      { ...TO, duration: 1.1, ease: EASE, scrollTrigger: { trigger: el, start: "top 92%" } });
  });
  requestAnimationFrame(() => ST.refresh());
}

export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return; // 動きを減らす設定 or 初期化済みでない
    let cancelled = false;
    ensureLibs()
      .then(() => {
        if (cancelled) return;
        (window as W).__motionOn = true;
        reveal();
      })
      .catch(() => root.classList.remove("motion")); // 読み込めなければ全部表示
    return () => { cancelled = true; };
  }, [pathname]);
  return null;
}
