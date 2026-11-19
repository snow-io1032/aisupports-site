import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "日本に住みながら開設できる海外口座｜ドバイの定期預金で年3〜4%という選択肢 | AISupports",
  description:
    "日本の定期預金は年0.2%。同じ「預金」でも、ドバイなら年3〜4%目安の定期預金があります。日本に住みながら開設できる海外口座の選択肢と、知っておくべき注意点を整理します。",
  alternates: {
    canonical: "/overseas-accounts",
  },
};

export default function OverseasAccountsPage() {
  return (
    <main>
      <div className="wrap">
        <header className="pg-head">
          <nav className="cs-breadcrumb" aria-label="パンくずリスト">
            <ol>
              <li>
                <Link href="/">トップ</Link>
              </li>
              <li>日本に住みながら開設できる海外口座</li>
            </ol>
          </nav>
          <p className="kicker" data-head>
            海外口座開設
          </p>
          <h1 data-head>日本の定期預金0.2%の外に、選択肢がある。</h1>
          <p className="p-lead" data-head>
            同じ「預金」でも、場所が違えば金利が違う。ドバイの銀行なら、年3〜4%目安の定期預金があります。日本に住みながら開設できる海外口座の選択肢と、知っておくべき注意点を整理します。
          </p>
        </header>
      </div>

      <section className="sec">
        <div className="wrap">
          <p className="kicker" data-head>
            3つの形
          </p>
          <h2 className="h2" data-head>
            日本に住みながら開設できる海外口座
          </h2>
          <table className="rtable" data-r>
            <tbody>
              <tr>
                <th>ドバイの銀行口座（非居住者口座）</th>
                <td className="bf">
                  Emirates NBD
                  に本人名義で開設し、1〜4年の定期預金に預ける。金利は年3〜4%目安。渡航が必要。最低デポジット約220万円。
                </td>
              </tr>
              <tr>
                <th>シンガポール・香港の銀行口座</th>
                <td className="bf">
                  現地の大手銀行に個人口座を開く。日本に住みながらの開設は、銀行の審査が厳しく、渡航や高額な最低預入を求められることが多い。
                </td>
              </tr>
              <tr>
                <th>多通貨口座（送金サービス）</th>
                <td className="bf">
                  海外送金や多通貨の保有が主目的のサービス。銀行の預金口座ではないため、金利のつく定期預金とは別ものとして考える。
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note" data-r>
            ※「海外口座」といっても、預金として金利がつくものと、送金・保有が主目的のものは別です。この記事で扱うのは、定期預金として金利がつくドバイの銀行口座です。
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker" data-head>
            ドバイ
          </p>
          <h2 className="h2" data-head>
            Emirates NBD の定期預金で、年3〜4%目安
          </h2>
          <p className="p-lead" data-head>
            ドバイの大手銀行 Emirates NBD
            に、ご自身名義の口座を開設し、期間1〜4年・固定金利の定期預金で預けます。非居住者向けの口座枠が制度として存在し、開設に必要な認可を持つ事業者の手続きを経て開設します。
          </p>
          <div className="svc-list" data-list>
            <div className="svc">
              <span className="n">01</span>
              <h3>
                なぜ、ドバイの金利は日本より高いのか
                <small>増えるのは「魔法」ではなく「金利差」</small>
              </h3>
              <div>
                <p>
                  通貨ディルハム（AED）は1997年から米ドルに固定（1ドル＝3.6725AED）されており、UAEの金利はほぼ米国の金利水準に連動します。日本が低すぎるだけで、世界では普通の水準です。UAE国内では銀行同士の預金獲得競争が活発で、定期預金の金利は各行のサイトで公開・比較できます。UAE側では利息に課税されません。
                </p>
                <ul className="svc-points">
                  <li>金利の目安：年3〜4%（ビザを取得せずに開設する場合）</li>
                  <li>最低デポジット：55,000AED（日本円で約220万円前後・レートによる）</li>
                  <li>渡航が必要：ドバイへの渡航（3日程度）が必須です</li>
                  <li>
                    MARS DS W.L.L.（MDS Group）はドバイの現地法人で、AML審査・会計監査ライセンス・翻訳認可・保証人登録を保有。書類の作成・翻訳・現地手続きの同行まで日本語で完結します
                  </li>
                  <li>口座開設後は VISA / MASTER カードの発行も可能です（銀行の審査によります）</li>
                </ul>
              </div>
            </div>
            <div className="svc">
              <span className="n">02</span>
              <h3>
                料金の目安
                <small>口座開設のみのプラン</small>
              </h3>
              <div>
                <p>
                  初年度は申請費用320,000円＋保証人＆監査レポート32USD（約4,800円）／月で、初年度合計の目安377,600円。2年目以降は更新費用0円＋32USD／月で、年間合計の目安57,600円です。ビザ取得もセットのプラン（申請費用48万円）もあります。別途、渡航費・宿泊費・行政手数料・銀行手数料などの実費がかかります。
                </p>
                <ul className="svc-points">
                  <li>500万円未満の場合、サポート料を差し引くと金利差がほとんど残らないことがあります</li>
                  <li>まとまった資金を、1〜4年預けられる人に向いた選択肢です</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker" data-head>
            注意点
          </p>
          <h2 className="h2" data-head>
            知っておくべき注意点
          </h2>
          <table className="rtable" data-r>
            <tbody>
              <tr>
                <th>預金保険はありません</th>
                <td className="bf">
                  日本の預金保険（1,000万円まで保護）のような、法律で保証された預金保護制度はUAEにはありません。Emirates
                  NBD はドバイ政府が筆頭株主の同国最大手行のひとつで、UAEのすべての銀行はUAE中央銀行の免許制で国際基準の自己資本規制を受けていますが、保証上限額の定めはない点は正直にお伝えします。
                </td>
              </tr>
              <tr>
                <th>為替リスクがあります</th>
                <td className="bf">
                  増えるのはAED（≒米ドル）建てです。円に戻すときの為替レートで、円ベースの受取額は上下します。元本割れの主因はほぼ為替です。
                </td>
              </tr>
              <tr>
                <th>金利は保証されません</th>
                <td className="bf">
                  金利は普通預金ではなく定期預金（期間1〜4年から選択）に適用され、最終的に銀行の審査で決まります。特定の利率を保証するものではありません。
                </td>
              </tr>
              <tr>
                <th>税金の申告が必要です</th>
                <td className="bf">
                  海外口座の情報はCRS（共通報告基準）という国際的な仕組みで、口座のある国の税務当局から日本の国税庁に届きます。日本の居住者は、海外の利息も日本で申告の対象になります。12月31日時点で国外財産が5,000万円を超える場合は、国外財産調書の提出が必要です。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker" data-head>
            FAQ
          </p>
          <h2 className="h2" data-head>
            よくある質問
          </h2>
          <div data-list>
            <h3>日本に住みながら、海外の銀行口座は開設できますか？</h3>
            <p>
              国と銀行によります。ドバイでは、非居住者向けの口座枠が制度として存在し、認可を持つ事業者の手続きを経て開設できます。ただし渡航が必須です。
            </p>
            <h3>ドバイの定期預金は安全ですか？</h3>
            <p>
              Emirates NBD
              はドバイ政府が筆頭株主の同国最大手行のひとつで、UAEの銀行はUAE中央銀行の免許制で国際基準の自己資本規制を受けています。ただし、日本の預金保険のような法律で保証された預金保護制度はUAEにはありません。
            </p>
            <h3>金利は本当に年3〜4%ですか？</h3>
            <p>
              非居住者口座の目安です。最終的な金利は銀行の審査で決まり、特定の利率を保証するものではありません。実際の金利は口座開設時に銀行が提示する条件が確定値です。
            </p>
            <h3>税金はどうなりますか？</h3>
            <p>
              海外の利息も、日本の居住者は日本で申告の対象になります。口座情報はCRSで日本の国税庁に届きます。国外財産が5,000万円を超える場合は国外財産調書が必要です。詳しくは税理士にご相談ください。
            </p>
            <h3>いくらから預けられますか？</h3>
            <p>最低デポジットは55,000AED（約220万円前後）です。</p>
          </div>

          <div style={{ marginTop: 56 }} data-r>
            <div className="cta-box">
              <p className="kicker">ドバイ銀行口座開設サポート</p>
              <h2>詳しくは、専用ページで。</h2>
              <p>
                残高シミュレーション、開設までの5つのステップ、申込みの流れは、ドバイ銀行口座開設サポートの専用ページでご覧いただけます。初回ヒアリングは無料です。
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  className="btn btn-light"
                  href="https://dubai.aisupports.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ドバイ口座開設の詳細を見る
                </a>
                <Link className="tlink" href="/#contact">
                  無料で相談する <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="ag-note" data-r>
            <strong>この記事は情報提供を目的としたもので、投資助言ではありません。</strong>
            金利・料金・条件は変更されることがあります。最終的な条件は銀行の公式書面でご確認ください。税務については専門家にご相談ください。
          </p>
        </div>
      </section>
    </main>
  );
}
