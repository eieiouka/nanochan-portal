import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">About</p>

      <h2>ナノちゃんポータルについて</h2>

      <p className="about-lead">
        このサイトは、「計画性のないナノカちゃん」を中心に、
        イラストや情報をまとめたファンサイトです。
      </p>

      <div className="about-cards">
        <div className="about-card">
          <img src="/images/about1.jpg" alt="" />
          <h3>Character</h3>
          <p>ナノカちゃんの魅力や雰囲気を紹介します。</p>
        </div>

        <div className="about-card">
          <img src="/images/about2.jpg" alt="" />
          <h3>Gallery</h3>
          <p>イラストやビジュアルを掲載します。</p>
        </div>

        <div className="about-card">
          <img src="/images/about3.jpg" alt="" />
          <h3>Portal</h3>
          <p>情報をまとめた入口のようなサイトです。</p>
        </div>
      </div>
    </section>
  );
}