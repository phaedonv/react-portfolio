import React from 'react'

import './project.css'

const Project = () => {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className='p-circle'></div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <a href="https://tunesoffreedom.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/thisisnotanimage/image/upload/c_fit,h_432,w_532/8xln6ts416kv6eeonf9eauglrsk0" alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Project
