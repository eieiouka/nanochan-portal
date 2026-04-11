import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SNS from "./components/SNS/SNS";
import About from "./components/About/About";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* SNS（分離済み） */}
        <SNS />

        {/* About */}
        <About />

        {/* Gallery */}
        <section id="gallery" className="section gallery">
          <p className="section-label">Gallery</p>
          <h2>ギャラリー</h2>

          <div className="gallery-grid">
            <img src="/images/sample1.jpg" alt="" />
            <img src="/images/sample2.jpg" alt="" />
            <img src="/images/sample3.jpg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}