import React from 'react'

import Project from '../project/Project'
import './projectList.css'

const ProjectList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire, never stop exploring!</h1>
            <p className="pl-desc">
            Here come some of my projects, that you can check and get ispired as I also got.
            Beautiful colors, useful tools & a whole lot more awaits you!
            </p>
        </div>

        <div className='pl-list'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
  )
}

export default ProjectList