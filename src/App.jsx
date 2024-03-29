import Footer from "./Compomnents/Footer"
import Navbar from "./Compomnents/Navbar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Education from "./Pages/Education"
import Home from "./Pages/Home"
import Project from "./Pages/Project"
import Skills from "./Pages/Skills"

function App() {
  

  return (
    <>
      <div className="block sm:flex gap-4  bg-[#1D2B53] text-white no-scrollbar">
          <div className="">
            <Navbar/>
          </div>
          <div className=" overflow-y-auto max-h-screen w-full px-5 py-2f no-scrollbar">
            <Home/>
            <Skills/>
            <Project/>
            <Education/>
            <About/>
            <Contact/>
            <Footer/>
          </div>
      </div>
    </>
  )
}

export default App
