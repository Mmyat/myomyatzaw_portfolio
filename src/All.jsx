import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import WorkExperience from "./pages/WorkExperience";

const All = () => {
  return (
    <>     
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-28 md:space-y-40 pb-20 relative z-0">
        <Home />
        <About />
        <Skill />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default All;