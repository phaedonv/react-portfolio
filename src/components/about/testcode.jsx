<div className='icon-wrapper-title'>
                    {/*Here and below is the code for the skill logos-badges slider*/}
                    <div className="icon-wrapper">
                    <Swiper
                    // install Swiper modules
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="myswiper"
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