import About from "./components/blocks/About";
import Footer from "./components/blocks/Footer";
import Contact from "./components/blocks/Contact";
import Header from "./components/blocks/Header";
import Hero from "./components/blocks/Hero";
import Projects from "./components/blocks/Projects";
import Gallery from "./components/blocks/Gallery";
import { aboutArray } from "./data/about-data";
import { projectArray } from "./data/project-data";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects projectArray={projectArray}/>
      <About aboutArray={aboutArray}/>
      <Contact />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
