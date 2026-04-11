import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Hero />

      <section id="about" style={{ padding: "80px 20px" }}>
        <h2>About</h2>
        <p>ここにナノカちゃんの紹介を書く</p>
      </section>

      <section id="gallery" style={{ padding: "80px 20px" }}>
        <h2>Gallery</h2>
        <p>ここに画像を並べる</p>
      </section>
    </>
  );
}