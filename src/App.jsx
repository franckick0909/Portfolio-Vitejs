import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="hero" className="hero">
          <Hero />
        </section>

        <section id="about" className="about">
          <About />  
        </section>

        <Skills />
        
        <section id="portfolio" className="portfolio">
          <Portfolio />
        </section>

        <section id="experience" className="experience">
          <Experience />
        </section>

        <section id="contact" className="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
