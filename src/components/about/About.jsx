import React from 'react'

import './about.css'
import Award from '../../img/Github-logo2.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg">
            <div id="matrix">
                <div className="letter l00 t200"><div></div></div>
                <div className="letter l10 t500"><div></div></div>
                <div className="letter l20 t180"><div></div></div>
                <div className="letter l30 t700"><div></div></div>
                <div className="letter l40 t800"><div></div></div>
                <div className="letter l50 t900"><div></div></div>
                <div className="letter l60 t300"><div></div></div>
                <div className="letter l70 t400"><div></div></div>
                <div className="letter l80 t320"><div></div></div>
                <div className="letter l90 t190"><div></div></div>
                <div className="letter l100 t520"><div></div></div>
                <div className="letter l05 t380 big"><div></div></div>
                <div className="letter l15 t400 big"><div></div></div>
                <div className="letter l25 t600 big"><div></div></div>
                <div className="letter l35 t650 big"><div></div></div>
                <div className="letter l45 t290 big"><div></div></div>
                <div className="letter l55 t530 big"><div></div></div>
                <div className="letter l65 t420 big"><div></div></div>
                <div className="letter l75 t900 big"><div></div></div>
                <div className="letter l85 t200 big"><div></div></div>
                <div className="letter l95 t180 big"><div></div></div>

                <div className="letter l00 t200 d2"><div></div></div>
                <div className="letter l10 t500 d2"><div></div></div>
                <div className="letter l20 t180 d2"><div></div></div>
                <div className="letter l30 t700 d2"><div></div></div>
                <div className="letter l40 t800 d2"><div></div></div>
                <div className="letter l50 t900 d2"><div></div></div>
                <div className="letter l60 t300 d2"><div></div></div>
                <div className="letter l70 t400 d2"><div></div></div>
                <div className="letter l80 t320 d2"><div></div></div>
                <div className="letter l90 t190 d2"><div></div></div>
                <div className="letter l100 t520 d2"><div></div></div>
                <div className="letter l05 t380 big d2"><div></div></div>
                <div className="letter l15 t400 big d2"><div></div></div>
                <div className="letter l25 t600 big d2"><div></div></div>
                <div className="letter l35 t650 big d2"><div></div></div>
                <div className="letter l45 t290 big d2"><div></div></div>
                <div className="letter l55 t530 big d2"><div></div></div>
                <div className="letter l65 t420 big d2"><div></div></div>
                <div className="letter l75 t900 big d2"><div></div></div>
                <div className="letter l85 t200 big d2"><div></div></div>
                <div className="letter l95 t180 big d2"><div></div></div>
            </div>
    
            </div>
            <div className="a-card">
                <img src="https://res.cloudinary.com/thisisnotanimage/image/upload/v1652907666/Phaedonv_industries_portal/maggiecode_hi355p.png" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
            </p>
            <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Github Awards 2021</h4>
                    <p className="a-award-desc">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                    and fugit.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About