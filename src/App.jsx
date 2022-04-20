import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>

      <FontAwesomeIcon icon={solid('user-secret')} />
      <FontAwesomeIcon icon={regular('coffee')} />
      <FontAwesomeIcon icon={brands('twitter')} />
    </div>
  )
}

export default App;