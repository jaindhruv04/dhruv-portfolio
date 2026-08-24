import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import DSA from "./components/dsa";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <DSA />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
