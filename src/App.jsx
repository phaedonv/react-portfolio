import { useState } from "react/cjs/react.production.min";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



const App = () => {
  return (
    <div>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  )
}

export default App;