import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Motion from "./components/Motion";

// 全ページ共通のメタデータ。
// canonical はここでは設定しない（下層ページへ継承され、全ページがトップを指してしまうため）。
// 各ページの metadata で alternates.canonical を個別に設定する。
export const metadata: Metadata = {
  metadataBase: new URL("https://aisupports.cc"),
  title: "企業向けAIエージェント構築・業務自動化（札幌・北海道）｜AISupports",
  description:
    "札幌市中央区を拠点に、北海道の中小企業・地域企業へAIエージェント構築と業務自動化を支援。業務整理から実装・現場定着まで一気通貫。初回ヒアリングと提案書は無料、北海道全域で現地対応します。",
  keywords: [
    "札幌 AI導入", "札幌 AI導入支援", "AIエージェント構築", "AI導入", "業務自動化", "DX支援", "AIエージェント", "北海道",
    "中小企業DX", "ノーコード", "Dify", "LINE API", "業務効率化",
  ],
  authors: [{ name: "AISupports" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://aisupports.cc",
    title: "企業向けAIエージェント構築・業務自動化（札幌・北海道）｜AISupports",
    description:
      "札幌市中央区を拠点に、北海道の中小企業・地域企業へAIエージェント構築と業務自動化を支援。業務整理から実装・現場定着まで一気通貫。初回ヒアリングと提案書は無料、北海道全域で現地対応します。",
    siteName: "AISupports",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "企業向けAIエージェント構築・業務自動化（札幌・北海道）｜AISupports",
    description:
      "札幌市中央区を拠点に、北海道の中小企業・地域企業へAIエージェント構築と業務自動化を支援。業務整理から実装・現場定着まで一気通貫。初回ヒアリングと提案書は無料、北海道全域で現地対応します。",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF8",
};

// 事業者情報（ProfessionalService）は全ページ共通で出力する。住所は会社概要ページと同じ。
// FAQPage はトップページ（app/page.tsx）だけで出力する。
const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://aisupports.cc/#organization",
  "name": "AISupports",
  "alternateName": "mlma",
  "url": "https://aisupports.cc",
  "logo": "https://aisupports.cc/favicon.svg",
  "description": "札幌市中央区を拠点に、北海道の中小企業・地域企業へAIエージェント構築と業務自動化を支援。業務整理から実装・現場定着まで一気通貫。",
  "address": {
    "@type": "PostalAddress",
    "postalCode": "060-0005",
    "addressRegion": "北海道",
    "addressLocality": "札幌市中央区",
    "streetAddress": "北5条西11丁目15-4",
    "addressCountry": "JP",
  },
  "areaServed": [
    { "@type": "City", "name": "札幌市" },
    { "@type": "AdministrativeArea", "name": "北海道" },
  ],
  "serviceType": ["AIエージェント構築", "AI導入支援", "業務自動化", "DXコンサルティング"],
  "knowsAbout": ["AIエージェント", "生成AI", "業務自動化", "Dify", "LINE API", "Google Apps Script"],
};

const motionBoot = `(function(){try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var r=document.documentElement;r.classList.add('motion');setTimeout(function(){if(!window.__motionOn)r.classList.remove('motion')},3500)}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        {/* 動きを有効にする人だけ、表示前の要素を隠す。JSが読み込めない場合は数秒後に全部表示 */}
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Motion />
      </body>
    </html>
  );
}
