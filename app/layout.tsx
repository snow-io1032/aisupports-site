import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

// 全ページ共通のメタデータ。
// canonical はここでは設定しない（下層ページへ継承され、全ページがトップを指してしまうため）。
// 各ページの metadata で alternates.canonical を個別に設定する。
export const metadata: Metadata = {
  metadataBase: new URL("https://aisupports.cc"),
  title: "AISupports | AI・DXで現場業務を動く仕組みに変える",
  description:
    "中小企業・地域企業向けに、業務整理、AI活用、ノーコード自動化、現場定着まで一気通貫で支援します。北海道全域対応。金融・建設・医療・製造など業種を問わず実績多数。",
  keywords: [
    "AI導入", "業務自動化", "DX支援", "AIエージェント", "北海道",
    "中小企業DX", "ノーコード", "Dify", "LINE API", "業務効率化",
  ],
  authors: [{ name: "AISupports" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://aisupports.cc",
    title: "AISupports | AI・DXで現場業務を動く仕組みに変える",
    description:
      "中小企業・地域企業向けに、業務整理、AI活用、ノーコード自動化、現場定着まで一気通貫で支援します。北海道全域対応。",
    siteName: "AISupports",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISupports | AI・DXで現場業務を動く仕組みに変える",
    description:
      "中小企業・地域企業向けに、業務整理、AI活用、ノーコード自動化、現場定着まで一気通貫で支援します。北海道全域対応。",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8E7",
};

// Organization は事業者情報なので全ページ共通で出力する。
// FAQPage はトップページ（app/page.tsx）だけで出力する。
const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AISupports",
  "url": "https://aisupports.cc",
  "description": "中小企業・地域企業向けAI・DX支援。業務自動化からコンサルティングまで一気通貫。北海道全域対応。",
  "areaServed": "北海道",
  "serviceType": ["AI導入支援", "業務自動化", "DXコンサルティング", "AIエージェント開発"],
};

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
      </head>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
