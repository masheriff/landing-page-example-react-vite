import Footer from "./components/blocks/Footer";
import Header from "./components/blocks/Header";
import Hero from "./components/blocks/Hero";
import Projects from "./components/blocks/Projects";
import { projectArray } from "./data/project-data";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects projectArray={projectArray}/>
      <Footer />
    </>
  );
}

export default App;
