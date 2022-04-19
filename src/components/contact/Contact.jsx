import React from 'react'

import './contact.css'
import logo from "../../img/shell.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const usid = process.env.REACT_APP_USER_ID;

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_b9h4675', 'template_a9wtzdm', formRef.current, usid)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
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
                <form ref ={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder='Message' name="message" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact