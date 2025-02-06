import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return <div>
      <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <section><Portfolio/></section>
    <section id="Projects">
      <Parallax type="projects"/>
    </section>
    <Projects/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
