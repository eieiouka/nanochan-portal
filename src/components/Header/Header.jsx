import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">ナノちゃんポータル</div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
        </nav>
      </div>
    </header>
  );
}