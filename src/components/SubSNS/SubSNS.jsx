import "./SubSNS.css";

export default function SubSNS() {
  return (
    <section id="subsns" className="subsns-section">
      <div className="section-title-wrap">
        <p className="section-mini">SUB SNS</p>
        <h2 className="section-title">SubSNS</h2>
      </div>

      <div className="subsns-card">
        <p className="subsns-text">
          メインアカウントに問題があった場合はこちらで更新します。
        </p>

        <a
          className="subsns-link"
          href="https://x.com/nanochan_665"
          target="_blank"
          rel="noreferrer"
        >
          サブ垢を見る
        </a>
      </div>
    </section>
  );
}