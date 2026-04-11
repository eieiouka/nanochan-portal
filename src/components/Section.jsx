import "../styles/Section.css";

export default function Section({ title, text, alt = false }) {
  return (
    <section className={`section ${alt ? "alt" : ""}`}>
      <div className="section-inner">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}