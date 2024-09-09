import { Home } from "../src/sections/Home/Home.jsx";
import './App.css'
import { About } from "./sections/About/About.jsx";
import { Contact } from "./sections/Contact/Contact.jsx";
import { Portfolio } from "./sections/Portfolio/Portfolio.jsx";
import { Projects } from "./sections/Projects/Projects.jsx";
function App() {

  return (
    <>
     <Home/>
     <About/>
     <Projects/>
     <Portfolio/>
     <Contact/>
    </>
  )
}

export default App
