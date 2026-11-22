import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "不動産会社さま向け提案 — AIで物件紹介を自動化する | AISupports",
  description:
    "SUUMOの不動産LPをAIで自動生成し、持っている不動産をツアーとして届ける。AISupportsの不動産会社さま向け提案です。",
  alternates: {
    canonical: "/real-estate",
  },
};

export default function RealEstatePage() {
  return (
    <main>
      <div className="wrap">
        <header className="pg-head">
          <nav className="cs-breadcrumb" aria-label="パンくずリスト">
            <ol>
              <li>
                <Link href="/">トップ</Link>
              </li>
              <li>不動産会社さま向け提案</li>
            </ol>
          </nav>
          <p className="kicker" data-head>
            不動産会社さま向け提案
          </p>
          <h1 data-head>物件紹介の手間を、AIで減らす。</h1>
          <p className="p-lead" data-head>
            SUUMOの物件LPをAIで自動生成し、持っている不動産を「ツアー」として届ける。AISupportsのAI・DXの仕組みを、不動産の現場にそのまま持ち込みます。
          </p>
        </header>

        <div className="stats" data-list>
          <div className="stat">
            <b>
              80<small>h+/月</small>
            </b>
            <span>業務時間削減実績</span>
          </div>
          <div className="stat">
            <b>
              10<small>社+</small>
            </b>
            <span>DX支援実績</span>
          </div>
          <div className="stat">
            <b>
              6<small>業種+</small>
            </b>
            <span>対応業種数</span>
          </div>
          <div className="stat">
            <b>
              5<small>施策</small>
            </b>
            <span>単一企業内最大導入数</span>
          </div>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <p className="kicker" data-head>
            SERVICE
          </p>
          <h2 className="h2" data-head>
            ご提案する2つのサービス
          </h2>
          <div className="svc-list" data-list>
            <div className="svc">
              <span className="n">01</span>
              <h3>
                SUUMO不動産LPのAI自動生成
                <small>物件紹介ページを、仕組みで作る</small>
              </h3>
              <div>
                <p>
                  物件情報をもとに、SUUMO掲載用のランディングページ（物件紹介ページ）をAIが自動生成します。物件ごとに手作業で作っていた紹介文・レイアウト・構成を仕組み化し、大幅な工数削減を実現します。
                </p>
                <ul className="svc-points">
                  <li>物件データから紹介文・見出し・構成を自動生成</li>
                  <li>物件ごとに手作業で作るLP作成の工数を大幅に削減</li>
                  <li>SUUMO掲載の実績あるプロジェクトで培ったノウハウを活用</li>
                  <li>写真・間取り・周辺情報の整理からページ生成まで一貫対応</li>
                </ul>
                <ul className="stack">
                  <li>実績あり</li>
                  <li>大幅な工数削減</li>
                </ul>
              </div>
            </div>
            <div className="svc">
              <span className="n">02</span>
              <h3>
                持っている不動産をツアー化
                <small>「歩いて見せる」紹介へ</small>
              </h3>
              <div>
                <p>
                  お持ちの不動産を「歩いて見せる」ツアーとして届けます。昔の家を現代の不動産ルームツアーのように歩くYouTubeチャンネル「歴史ルームツアー」の形式を応用し、物件の魅力を動画とページで伝えます。
                </p>
                <ul className="svc-points">
                  <li>物件を歩いて紹介するルームツアー形式の動画・ページ制作</li>
                  <li>歴史的な家・古民家など、特徴のある物件の魅力を引き出す構成</li>
                  <li>動画と物件紹介ページを組み合わせた集客の仕組み</li>
                </ul>
                <ul className="stack">
                  <li>歴史ルームツアー（登録者77人・動画12本）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker" data-head>
            生成サンプル
          </p>
          <h2 className="h2" data-head>
            AIで作った物件紹介ページ
          </h2>
          <p className="p-lead" data-head>
            下の物件紹介は、SUUMOの実在の掲載情報をもとにAIで生成したサンプルです。同じ仕組みで、御社の物件ページも自動生成できます。
          </p>
          <div className="panel" data-r>
            <div className="panel-top">
              <i />
              <i />
              <i />
              <b>生成サンプル — 鎌倉の古民家</b>
            </div>
            <div className="re-imgs">
              <img
                src="/real-estate/kominka-exterior.jpg"
                alt="緑に包まれた古民家の外観（イメージ画像）"
                width={1200}
                height={900}
              />
              <img
                src="/real-estate/kominka-interior.jpg"
                alt="畳の部屋と縁側のある古民家の室内（イメージ画像）"
                width={1200}
                height={900}
              />
            </div>
            <div className="panel-body" style={{ display: "block" }}>
              <h3>緑に包まれた鎌倉の古民家 — 源氏山の山麓で、古き良き鎌倉暮らしを</h3>
              <div className="re-price">
                2,980万円
              </div>
              <p className="specs">
                3LDK ／ 土地 118.02m²（35.70坪） ／ 建物 66.93m²（20.24坪）
                <br />
                神奈川県鎌倉市扇ガ谷4 ／ 1962年1月築 ／ JR横須賀線「鎌倉」歩20分
              </p>
              <p className="desc">
                頂上付近からは海をも望む源氏山。その山麓に佇む古民家。緑に包まれた古民家をリノベーションして、自分好みにする愉しみがあります。
              </p>
              <p className="meta-date">
                出典：SUUMO（情報提供日 2026年11月9日）／ お問い合わせ先：東宝ハウス湘南営業5課
                TEL 0120-581-503
              </p>
            </div>
          </div>
          <p className="note">※写真はイメージ画像です。実際の物件の写真ではありません。</p>
        </div>
      </section>

      <section className="sec process">
        <div className="wrap">
          <p className="kicker" data-head>
            PROCESS
          </p>
          <h2 className="h2" data-head>
            進め方
          </h2>
          <div className="pgrid" data-list>
            <div className="ps">
              <span className="n">01</span>
              <h3>Hearing</h3>
              <p>現場の業務フローと課題をヒアリング。LP作成のムダな工程を特定します。</p>
            </div>
            <div className="ps">
              <span className="n">02</span>
              <h3>Design</h3>
              <p>物件データの流れと生成ルールを設計。既存の掲載フローに合わせて具体化します。</p>
            </div>
            <div className="ps">
              <span className="n">03</span>
              <h3>Build</h3>
              <p>スピーディに実装し、実際の物件で試作。小さく始めて確実に動かします。</p>
            </div>
            <div className="ps">
              <span className="n">04</span>
              <h3>Improve</h3>
              <p>運用データを見ながら改善・拡張。「使われる仕組み」へ育てます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="kicker" data-head>
            AISupports
          </p>
          <h2 className="h2" data-head>
            AISupportsのサービス全体像
          </h2>
          <table className="rtable" data-r>
            <tbody>
              <tr>
                <th>AI Agents &amp; Automation</th>
                <td className="bf">
                  AIエージェント・業務自動化。問い合わせ対応から見積もり、定型業務まで、御社の業務フロー・ルール・判断基準をAIに覚えさせ、自動で回す仕組みを構築します。
                </td>
              </tr>
              <tr>
                <th>AI Search &amp; EC</th>
                <td className="bf">
                  AI検索・集客サイト構築。生成AIに聞いて買う時代に、見つけてもらえる店になるための参照ページとショッピングサイトを構築します。
                </td>
              </tr>
              <tr>
                <th>不動産向け（NEW）</th>
                <td className="bf">
                  SUUMO不動産LPのAI自動生成 ／ 持っている不動産のツアー化。不動産会社さま向けの2サービスです。
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: 56 }} data-r>
            <div className="cta-box">
              <p className="kicker">無料ヒアリング</p>
              <h2>まずは、現場の話を聞かせてください。</h2>
              <p>
                「どこから手をつければいいか分からない」という段階から相談できます。初回ヒアリングと実行提案書の作成は無料です。北海道全域は現地で、道外はオンラインで対応します。
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link className="btn btn-light" href="/#contact">
                  無料で相談する
                </Link>
                <Link className="tlink" href="/">
                  AISupports トップへ <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="ag-note" data-r>
            <strong>物件情報の出典：SUUMO（スーモ）。</strong>
            価格・販売状況は変動します。写真はAIで生成したイメージ画像です。
          </p>
        </div>
      </section>
    </main>
  );
}
