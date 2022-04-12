import React from 'react'

import './contact.css'
import logo from "../../img/shell.png"

const Contact = () => {
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project.</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={logo} alt="" className="c-icon" />
                        +32 xxxx xx xx xx
                    </div>
                    <div className="c-info-item">
                        <img src={logo} alt="" className="c-icon" />
                        contact@phaedonv.dev
                    </div>
                    <div className="c-info-item">
                        <img src={logo} alt="" className="c-icon" />
                        Brussels, Belgium 50°51′N 4°21′E
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along.
                </p>
                <form>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea name="message" id="" cols="30" rows="5" placeholder='Message' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact