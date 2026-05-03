import "./SubSNS.css";

export default function SubSNS() {
  return (
    <section id="subsns" className="section subsns">
      <p className="section-label">SubSNS</p>
      <h2>緊急用サブ垢</h2>

      <div className="sns-cards">
        <a
          href="https://x.com/nanochan_665"
          target="_blank"
          rel="noopener noreferrer"
          className="sns-card"
        >
          <div className="sns-image">
            <img src="/images/twitter2.jpg" alt="Sub Twitter" />
          </div>
          <h3>Sub Twitter</h3>
          <p>凍結・緊急時はこちら</p>
        </a>
      </div>
    </section>
  );
}