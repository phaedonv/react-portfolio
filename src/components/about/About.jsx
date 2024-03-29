import React from 'react'

import './about.css'
import Award from '../../img/Github-logo2.png'
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
//import 'swiper/swiper.min.css/navigation';
//import 'swiper/swiper.min.css/EffectFade';


import styles from './about.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

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
            A lifelong learner with a passion in technology and coding.
            </p>
            <p className="a-desc">
            Having the chance to work on a wide variety of different projects, 
            there's always something to interest me. I am motivated by the feeling 
            of being able to solve problems and help people in their everyday lives.
            </p>
            <div className='full-award'>
                <div className="a-award">
                    {/* <img src={Award} alt="" className="a-award-img" /> */}
                    <img src="https://media.giphy.com/media/B2yAtZsNzuxDnsXWfB/giphy.gif" alt="" className="a-skill-img" />
                    
                    <div className="a-award-texts">
                        <h4 className="a-award-title font-awesome-icon">Skills & Technologies</h4>
                        <p className="a-award-desc"> 
                        Object-oriented programming, Ruby on Rails, JavaScript, React.js, 
                        HTML5, CSS, SCSS, SASS, SQL, PostgreSQL, Git, Github, Product design, UX/UI, Wireframing, Mockups.
                        </p>
                        <div id = "skill-swipper">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                <div className="icon-item">
                                    <FontAwesomeIcon icon={brands('react')} size="4x" spin className="font-awesome-icon"/>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('js')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('css3-alt')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('html5')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('figma')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('python')} size="4x" flip className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('github')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={solid('database')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('git-alt')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="icon-item">
                                            <FontAwesomeIcon icon={brands('node')} size="4x" className="font-awesome-icon"/>
                                        </div>
                                </SwiperSlide>
                                
                            </Swiper>
    
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About