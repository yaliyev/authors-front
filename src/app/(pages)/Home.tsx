import React from 'react'

import styles from '../assets/style/Home.module.css';
import Navbar from '../components/Navbar';



import {Swiper, SwiperSlide} from "swiper/react";

import '../../../node_modules/swiper/swiper-bundle.css';

import { A11y, EffectCube, Navigation, Pagination, Scrollbar } from 'swiper/modules';




type Props = {}



const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.home}>
                {/* <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    effect={"cube"}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                >
                    
                        <SwiperSlide>
                            <img src={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg"}  />
                        </SwiperSlide>
                    
                </Swiper> */}

                {/* <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg" alt="" /> */}

            </div>
        </>
    )
}

export default Home