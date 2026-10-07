import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { homeFaqs } from "./data/faqs";

// トップページ専用のメタデータ。canonicalはトップ自身を指す。
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// FAQPageはFAQを実際に表示しているトップページだけに出力する。
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <HomeClient />
    </>
  );
}
