import React from 'react'
import "./intro.css"
import Me from '../../img/me.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Phaedon V.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Crypto Artist</div>
              <div className="i-title-item">Cyber Security Enthusiast</div>
            </div>
          </div>
          <div className="i-desc">
              I am a full stack web developer graduate, seeking new opportunities! 
              Being motivated and eager to learn new skills and technologies, 
              I always look for new ways to evolve.
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="img" />
      </div>
    </div>
  )
}

export default Intro