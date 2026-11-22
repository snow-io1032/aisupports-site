import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AISupports | AI Automation & Japanese Localization — Sapporo, Japan",
  description:
    "AISupports is an AI services studio in Sapporo, Japan. We build AI agents and business automation, websites designed to be cited by AI search — and for global teams, Japanese localization and native checks for pages, emails, courses and subtitles.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    type: "website",
    url: "https://aisupports.cc/en",
    title: "AISupports | AI Automation & Japanese Localization — Sapporo, Japan",
    description:
      "AI agents, business automation, and native Japanese localization for teams selling into Japan. Based in Sapporo, Japan.",
    siteName: "AISupports",
    locale: "en_US",
  },
};

export default function EnglishPage() {
  return (
    <main>
      <div className="wrap">
        <header className="pg-head">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home (Japanese)</Link>
              </li>
              <li>English</li>
            </ol>
          </nav>
          <p className="kicker" data-head>
            AISupports — Sapporo, Japan
          </p>
          <h1 data-head>AI automation, and a native door into Japan.</h1>
          <p className="p-lead" data-head>
            AISupports is a small AI services studio run by Tsuyoshi Hayashi in
            Sapporo, Japan. We do two things for Japanese businesses — AI
            agents and business automation, and websites built to be found and
            cited by AI search. For teams outside Japan, we add a third:
            Japanese localization and native checks, done by a native speaker
            who works with AI every day.
          </p>
        </header>
      </div>

      <section className="sec">
        <div className="wrap">
          <p className="kicker" data-head>
            What we do
          </p>
          <h2 className="h2" data-head>
            Three services, one operator
          </h2>
          <div className="svc-list" data-list>
            <div className="svc">
              <span className="n">01</span>
              <h3>
                AI Agents &amp; Business Automation
                <small>Cut the work, cut the fixed costs</small>
              </h3>
              <div>
                <p>
                  We look at the flows a business cannot skip — inquiries,
                  estimates, follow-ups, data entry — and automate or remove
                  them with AI agents and no-code tooling. The measure is
                  simple: hours and yen saved, stated in numbers before we
                  start.
                </p>
                <ul className="svc-points">
                  <li>AI chatbots and LINE integrations (Dify, Apps Script)</li>
                  <li>Workflow automation for small and mid-sized companies</li>
                  <li>Content production, semi-automated and human-checked</li>
                </ul>
              </div>
            </div>
            <div className="svc">
              <span className="n">02</span>
              <h3>
                AI Search &amp; Customer-Acquisition Websites
                <small>Built to be cited by AI search (AIO / GEO)</small>
              </h3>
              <div>
                <p>
                  Customers increasingly ask AI assistants instead of search
                  engines. We build bilingual reference pages and EC sites
                  structured so that AI search can cite your business — and we
                  measure success by the customers it sends you, not by
                  rankings alone.
                </p>
                <ul className="svc-points">
                  <li>Japanese–English reference pages and EC sites</li>
                  <li>Structured content designed for AI citation</li>
                  <li>Tracked referral links, so results are visible</li>
                </ul>
              </div>
            </div>
            <div className="svc">
              <span className="n">03</span>
              <h3>
                Japanese Localization &amp; Native Check
                <small>For course creators, SaaS and digital products</small>
              </h3>
              <div>
                <p>
                  Machine translation reads as machine translation — and
                  Japanese customers notice in seconds. We localize landing
                  pages, email sequences, course content and subtitles into
                  Japanese that sounds like it was written here, and we
                  native-check existing Japanese that doesn&apos;t. AI gives
                  us speed; a native operator gives you the final quality.
                </p>
                <ul className="svc-points">
                  <li>Landing pages, checkout and email sequences</li>
                  <li>Course content and video subtitles (Kajabi, Teachable and others)</li>
                  <li>Native check of existing Japanese pages and copy</li>
                  <li>Start small: one page, or one email sequence, first</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker" data-head>
            Track record
          </p>
          <h2 className="h2" data-head>
            Small studio, verifiable work
          </h2>
          <table className="rtable" data-r>
            <tbody>
              <tr>
                <th>Company-wide AI platform</th>
                <td className="bf">
                  Built and supported a company-wide AI platform for a
                  Japanese retailer with roughly ¥5 billion in annual sales —
                  18 months of continuous support, saving about 80 working
                  hours per month.
                </td>
              </tr>
              <tr>
                <th>Credentials</th>
                <td className="bf">
                  Google AI Professional certified. Member of the Sapporo
                  Chamber of Commerce and Industry.
                </td>
              </tr>
              <tr>
                <th>How we work</th>
                <td className="bf">
                  One operator, no hand-offs. Communication in English by
                  email. Every engagement starts with a small, fixed scope so
                  you can judge the quality before committing to more.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note" data-r>
            ※ We don&apos;t promise that AI search will cite your site, and we
            won&apos;t promise sales figures. What we promise is native-quality
            Japanese, delivered fast, in a scope small enough to verify.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div data-r>
            <div className="cta-box">
              <p className="kicker">Selling in Japan?</p>
              <h2>Start with one page.</h2>
              <p>
                Send us the page, email sequence or video you most want
                Japanese customers to trust. We&apos;ll localize or
                native-check that one piece first — and if your current
                Japanese has a problem, we&apos;ll show you exactly where,
                for free, before you pay for anything.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a className="btn btn-light" href="mailto:hello@aisupports.cc">
                  Email hello@aisupports.cc
                </a>
                <Link className="tlink" href="/">
                  日本語サイトを見る <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="ag-note" data-r>
            AISupports (MLMAgency) — Representative: Tsuyoshi Hayashi.
            Urbannet Sapporo Link Tower, Kita 1-jo Nishi 5-chome 1-4,
            Chuo-ku, Sapporo, Hokkaido 060-0001, Japan.
          </p>
        </div>
      </section>
    </main>
  );
}
