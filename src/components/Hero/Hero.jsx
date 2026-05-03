import "./Hero.css";

export default function Hero() {
  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    const header = document.querySelector(".topbar");

    if (!target || !header) return;

    const headerHeight = header.offsetHeight;

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <img
        className="hero-image"
        src="/images/hero.jpg"
        alt="ナノちゃんポータル"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-kicker">nanochan PORTAL</p>

          <h1>ナノちゃんポータル</h1>

          <p className="hero-text">
            「計画性のないナノカちゃん」が作った、平和で健全なサイト
          </p>

          <div className="hero-buttons">
            <a
              href="#sns"
              className="hero-button primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#sns");
              }}
            >
              詳しく見る
            </a>

            <a
              href="#gallery"
              className="hero-button secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#gallery");
              }}
            >
              ギャラリーへ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}