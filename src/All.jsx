import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skill from "./pages/Skill";
import WorkExperience from "./pages/WorkExperience";
const All = () => {
  return (
    <>     
      <Header/>
      <div className="max-w-7xl mx-auto">
        <Home/>
        <About/>
        <Skill/>
        <WorkExperience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default All