import "./Gallery.css";

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <p className="section-label">Gallery</p>
      <h2>私の可愛い写真集</h2>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/images/sample1.jpg" alt="ナノちゃんのイラスト1" />
        </div>

        <div className="gallery-item">
          <img src="/images/sample2.jpg" alt="ナノちゃんのイラスト2" />
        </div>

        <div className="gallery-item">
          <img src="/images/sample3.jpg" alt="ナノちゃんのイラスト3" />
        </div>

        <div className="gallery-item">
          <img src="/images/sample4.jpg" alt="ナノちゃんのイラスト4" />
        </div>

        <div className="gallery-item">
          <img src="/images/sample5.jpg" alt="ナノちゃんのイラスト5" />
        </div>

        <div className="gallery-item">
          <img src="/images/sample6.jpg" alt="ナノちゃんのイラスト6" />
        </div>
      </div>
    </section>
  );
}