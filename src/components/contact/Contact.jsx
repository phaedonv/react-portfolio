import React from 'react'

import './contact.css'
import logo from "../../img/shell.png"
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

/* fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const icon = <FontAwesomeIcon icon={solid('user-secret')} />
*/

const Contact = () => {
    const formRef = useRef();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_b9h4675', 'template_a9wtzdm', formRef.current, API_KEY)
            .then((result) => {
                console.log(result.text);
                setDone(true);
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
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" required/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" required pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name="message" required/>
                    <button>Submit</button>
                    <h4>{done && "Thank you for contacting me <3"}</h4>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact