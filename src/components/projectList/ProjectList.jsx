import React from 'react'

import Project from '../project/Project'
import { projects } from '../../data'
import './projectList.css'

const ProjectList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <h4 className="pl-title-label">Create & inspire, never stop exploring!</h4>
            <p className="pl-desc">
            Here come some of my projects, that you can check and get ispired as I also got.
            Beautiful colors, useful tools & a whole lot more awaits you!
            </p>
        </div>

        <div className='pl-list'>
            {projects.map(item=>(
                <Project key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectList