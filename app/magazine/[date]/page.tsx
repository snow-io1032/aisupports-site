import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMagazineIssue, magazineIssues } from "../../data/magazineIssues";
import MagazineEdition from "../MagazineEdition";
import Magazine20261107 from "../Magazine20261107";
import styles from "../magazineIndex.module.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return magazineIssues.map((issue) => ({ date: issue.date }));
}

type Props = { params: Promise<{ date: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const issue = getMagazineIssue(date);
  if (!issue) return {};
  const title = `${issue.title} | AI実践マガジン | AISupports`;
  const path = `/magazine/${issue.date}`;
  return {
    title,
    description: issue.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: `https://aisupports.cc${path}`,
      title,
      description: issue.description,
      siteName: "AISupports",
      locale: "ja_JP",
    },
    twitter: { card: "summary", title, description: issue.description },
  };
}

export default async function MagazineIssuePage({ params }: Props) {
  const { date } = await params;
  const issue = getMagazineIssue(date);
  if (!issue) notFound();
  return (
    <>
      <nav className={styles.issueNavigation} aria-label="マガジンの移動">
        <Link href="/magazine">← AI実践マガジン一覧</Link>
        <span>{issue.date.replaceAll("-", "/")} 号</span>
      </nav>
      {date === "2026-11-07" ? <Magazine20261107 /> : <MagazineEdition />}
      <nav className={styles.issueNavigation} aria-label="バックナンバーへの移動">
        <Link href="/magazine">最新号・バックナンバーを見る →</Link>
      </nav>
    </>
  );
}
