import "./Booth.css";

export default function Booth() {
  return (
    <section id="booth" className="section booth">
      <p className="section-label">BOOTH</p>
      <h2>ナノちゃんのBOOTH</h2>

      <div className="sns-cards">
        <div className="sns-card booth-card-disabled" aria-disabled="true">
          <div className="sns-image">
            <img src="/images/booth-playing-cards.jpg" alt="まのさばトランプ" />
          </div>
          <h3>まのさばトランプ（販売停止中）</h3>
        </div>

        <a
          href="https://noplananoka.booth.pm/"
          target="_blank"
          rel="noopener noreferrer"
          className="sns-card"
        >
          <div className="sns-image">
            <img src="/images/booth-magic-shogi.jpg" alt="魔法少女ノ魔法将棋" />
          </div>
          <h3>魔法少女ノ魔法将棋</h3>
        </a>

        <div className="sns-card booth-card-disabled" aria-disabled="true">
          <div className="sns-image booth-coming-soon-image" aria-hidden="true">
            <span>Coming soon</span>
          </div>
          <h3>Coming soon</h3>
        </div>
      </div>
    </section>
  );
}
