import { useRef, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const setHeaderHeight = () => {
      if (!headerRef.current) return;

      const height = headerRef.current.offsetHeight;

      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - navRef.current.offsetLeft;
    scrollLeft = navRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    navRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <header className="topbar" ref={headerRef}>
      <div className="logo-area">
        <div className="logo-main">ナノちゃんポータル</div>
        <div className="logo-sub">made by 計画性のないナノカちゃん</div>
      </div>

      <nav
        className="nav"
        ref={navRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <a href="#sns">SNS</a>
        <a href="#subsns" className="nav-subsns">SubSNS</a>
        <a href="#about">ABOUT</a>
        <a href="#links">LINKS</a>
        <a href="#game">GAME</a>
        <a href="#gallery">GALLERY</a>
        <a href="#cards">CARDS</a>
      </nav>
    </header>
  );
}