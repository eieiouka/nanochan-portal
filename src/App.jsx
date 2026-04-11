import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* About */}
        <section id="about" className="section about">
          <p className="section-label">About</p>

          <h2>ナノちゃんポータルについて</h2>

          <p className="about-lead">
            このサイトは、「計画性のないナノカちゃん」を中心に、
            イラストや情報をまとめたファンサイトです。
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Character</h3>
              <p>
                ナノカちゃんの魅力や雰囲気を、
                やさしくわかりやすく紹介します。
              </p>
            </div>

            <div className="about-card">
              <h3>Gallery</h3>
              <p>
                イラストやビジュアルを、
                見やすくまとめて掲載していきます。
              </p>
            </div>

            <div className="about-card">
              <h3>Portal</h3>
              <p>
                好きな人が気軽に見られる、
                入口のようなサイトを目指しています。
              </p>
            </div>
          </div>
        </section>

        {/* Gallery（仮） */}
        <section id="gallery" className="section">
          <p className="section-label">Gallery</p>
          <h2>ギャラリー</h2>
          <p>ここに画像を並べる</p>
        </section>
      </main>
    </>
  );
}