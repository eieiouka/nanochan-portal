import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SNS from "./components/SNS/SNS";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SNS />
        <About />
        <Gallery />
      </main>
    </>
  );
}