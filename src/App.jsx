import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>

    </div>
  )
}

export default App;