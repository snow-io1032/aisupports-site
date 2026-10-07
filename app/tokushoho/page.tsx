import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | AISupports",
  description:
    "AISupports（mlma）の特定商取引法に基づく表記。販売事業者情報、販売価格、支払方法、役務の提供時期、解約・返金に関する条件を記載しています。",
  alternates: {
    canonical: "/tokushoho",
  },
};

/* ============================================================
   ★ここだけ書き換えてください（3箇所）★
   ============================================================ */
const TEL = "070-3533-7420"; // ← 実際に連絡が取れる番号。転送番号サービスでも可
const TEL_HOURS = "平日 10:00〜18:00（土日祝を除く）";

// 料金プラン。プランが1つなら1行だけにしてください。必ず税込総額で表記。
const plans = [
  { name: "MEO松プラン", price: "月額 17,800円（税込）" },
  { name: "MEO竹プラン", price: "月額 19,800円（税込）" },
  { name: "MEO梅プラン", price: "月額 99,800円（税込）" },
];
/* ============================================================ */

const rows = [
  { label: "販売事業者名", value: "mlma（エムエルエムエー）／屋号 AISupports" },
  { label: "運営責任者", value: "林 毅（Hayashi Tsuyoshi）" },
  { label: "所在地", value: "〒060-0005 北海道札幌市中央区北5条西11丁目15-4" },
  { label: "電話番号", value: `${TEL}（受付時間：${TEL_HOURS}）` },
  { label: "メールアドレス", value: "hello@aisupports.cc" },
  { label: "ホームページURL", value: "https://aisupports.cc" },
  {
    label: "販売価格",
    value: "下記「料金」の表に記載のとおり（すべて消費税込みの総額表示）",
  },
  {
    label: "商品代金以外の\n必要料金",
    value:
      "本サービスのご利用に必要なインターネット接続料金、通信料金等はお客様のご負担となります。",
  },
  {
    label: "支払方法",
    value: "クレジットカード決済（決済代行：Stripe, Inc.）",
  },
  {
    label: "支払時期",
    value:
      "初回：お申込み手続きの完了時に即時決済されます。\n2回目以降：契約更新日に自動的に決済されます。",
  },
  {
    label: "役務の提供時期",
    value:
      "決済完了後、直ちにご利用いただけます（アカウント発行後、すぐに全機能をご利用可能です）。",
  },
  {
    label: "契約期間・自動更新",
    value:
      "契約期間は1か月単位です。契約期間満了日までに解約手続きがない場合、同一内容で自動的に1か月更新されます。以後も同様です。",
  },
 {
    label: "解約方法・解約期限",
    value:
      "次回更新日の前日までに、メール（hello@aisupports.cc）にてご連絡ください。件名に「解約希望」とご記入いただければ、営業日2日以内に受付完了のご返信をいたします。期限を過ぎた場合は次回更新分の料金が発生します。",
  },
   {
    label: "解約後の取扱い",
    value:
      "解約手続き後も、支払済みの契約期間の満了日まではサービスをご利用いただけます。契約期間途中で解約された場合の日割りによる返金はございません。",
  },
  {
    label: "返品・返金について",
    value:
      "本サービスは役務（デジタルサービス）の提供であるため、提供開始後のキャンセル・返品・返金はお受けできません。ただし、当方の責によりサービスが正常に提供できなかった場合は、個別に対応いたします。\nなお、通信販売にはクーリングオフ制度の適用はありません。",
  },
  {
    label: "動作環境",
    value:
      "インターネット接続環境、および最新バージョンの Google Chrome / Safari / Microsoft Edge のいずれかのブラウザ。",
  },
  { label: "お申込みの有効期限", value: "特にありません。" },
];

export default function TokushohoPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#FFFDF5" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 80px" }}>

        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span style={{
            background: "#E8F4FD", color: "#3B9EE8",
            padding: "6px 20px", borderRadius: "999px",
            fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em",
          }}>LEGAL</span>
        </div>

        <h1 style={{
          textAlign: "center", fontSize: "1.75rem", fontWeight: 800,
          color: "#1A1A2E", marginBottom: "12px", marginTop: "12px",
          lineHeight: 1.5,
        }}>特定商取引法に基づく表記</h1>

        <p style={{
          textAlign: "center", color: "#4A4A6A", fontSize: "14px",
          lineHeight: 1.9, marginBottom: "48px",
        }}>
          特定商取引法第11条（通信販売についての広告）に基づき、以下のとおり表示します。
        </p>

        <div style={{
          background: "#FFFFFF", borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(180,150,80,0.08)",
          overflow: "hidden", marginBottom: "48px",
        }}>
          {rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "180px 1fr",
              borderBottom: i < rows.length - 1 ? "1px solid #F0EBE0" : "none",
            }}>
              <div style={{
                padding: "20px 24px", background: "#FFF8E7",
                color: "#4A4A6A", fontWeight: 600, fontSize: "14px",
                whiteSpace: "pre-line", lineHeight: 1.7,
              }}>{row.label}</div>
              <div style={{
                padding: "20px 24px", color: "#1A1A2E", fontSize: "15px",
                whiteSpace: "pre-line", lineHeight: 1.9,
              }}>{row.value}</div>
            </div>
          ))}
        </div>

        {/* ── 料金 ── */}
        <h2 style={{
          fontSize: "1.2rem", fontWeight: 700, color: "#1A1A2E",
          marginBottom: "20px", marginTop: 0,
        }}>料金</h2>

        <div style={{
          background: "#FFFFFF", borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(180,150,80,0.08)",
          overflow: "hidden", marginBottom: "16px",
        }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "180px 1fr",
              borderBottom: i < plans.length - 1 ? "1px solid #F0EBE0" : "none",
            }}>
              <div style={{
                padding: "20px 24px", background: "#FFF8E7",
                color: "#4A4A6A", fontWeight: 600, fontSize: "14px",
              }}>{plan.name}</div>
              <div style={{
                padding: "20px 24px", color: "#1A1A2E", fontSize: "15px", fontWeight: 600,
              }}>{plan.price}</div>
            </div>
          ))}
        </div>

        <p style={{
          color: "#4A4A6A", fontSize: "13px", lineHeight: 1.9,
          marginBottom: "48px",
        }}>
          表示価格はすべて消費税を含む総額です。料金は毎月自動的に課金されます。
        </p>

        {/* ── 注意事項 ── */}
        <div style={{
          background: "linear-gradient(135deg, #E8F4FD, #FFF8E7)",
          borderRadius: "16px", padding: "32px",
          borderLeft: "4px solid #3B9EE8",
        }}>
          <h2 style={{
            fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px",
            color: "#1A1A2E", marginTop: 0,
          }}>ご契約にあたっての確認事項</h2>
          <ul style={{
            color: "#4A4A6A", lineHeight: 1.9, fontSize: "14px",
            margin: 0, paddingLeft: "20px",
          }}>
            <li>本サービスは月額課金制で、解約手続きがない限り自動的に更新されます。</li>
            <li>解約は次回更新日の前日までに、メールでのご連絡が必要です。</li>
            <li>契約期間途中で解約された場合の日割り返金はございません。</li>
            <li>
              その他の条件は
              <a href="/terms" style={{ color: "#3B9EE8", fontWeight: 600 }}>利用規約</a>
              および
              <a href="/privacy" style={{ color: "#3B9EE8", fontWeight: 600 }}>プライバシーポリシー</a>
              をご確認ください。
            </li>
          </ul>
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="/" style={{
            color: "#3B9EE8", fontSize: "14px", fontWeight: 600,
            textDecoration: "none", borderBottom: "1px solid #3B9EE8", paddingBottom: "2px",
          }}>← トップページに戻る</a>
        </div>
      </div>
    </main>
  );
}
