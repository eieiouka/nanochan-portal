import "../styles/Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <img src="/header.jpg" alt="ヘッダー画像" className="hero-image" />

      <div className="hero-overlay">
        <h1>ナノちゃんポータル</h1>
      </div>
    </header>
  );
}