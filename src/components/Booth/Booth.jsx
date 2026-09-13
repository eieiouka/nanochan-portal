import "./Booth.css";

export default function Booth() {
  return (
    <section id="booth" className="section booth">
      <p className="section-label">Booth</p>
      <h2>ナノちゃんのBooth</h2>

      <div className="booth-cards">
        <div
          className="booth-card booth-card-disabled booth-card-stopped"
          aria-disabled="true"
        >
          <div className="booth-image">
            <img src="/images/booth-playing-cards.jpg" alt="まのさばトランプ" />
          </div>
          <h3>まのさばトランプ（販売停止中）</h3>
          <p>販売停止中よ。作り直すかも知れないわ。</p>
        </div>

        <a
          href="https://noplannanoka.booth.pm/items/8824608"
          target="_blank"
          rel="noopener noreferrer"
          className="booth-card"
        >
          <div className="booth-image">
            <img src="/images/booth-magic-shogi.jpg" alt="魔法少女ノ魔法将棋" />
          </div>
          <h3>魔法少女ノ魔法将棋</h3>
          <p>魔法が使える将棋ゲームよ。AI解析にかけているけど、まだ必勝法が分かってないぐらい奥が深いわ。</p>
        </a>

        <div className="booth-card booth-card-disabled" aria-disabled="true">
          <div className="booth-image booth-coming-soon-image" aria-hidden="true">
            <span>Coming soon</span>
          </div>
          <h3>Coming soon</h3>
          <p>次の商品を準備中</p>
        </div>
      </div>
    </section>
  );
}
