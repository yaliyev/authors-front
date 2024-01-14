"use client";
import React, { useEffect, useState } from 'react'

import styles from '../assets/style/Home.module.css';
import Navbar from '../components/Navbar';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { getAuthors } from '../services/api/author_request';

type Props = {}



const Home = () => {

    const [authors,setAuthors] = useState<Author[]>();

    useEffect(()=>{

        async function loadAuthors() {
            const data = await getAuthors();
      
            setAuthors(data);
          }
      
          loadAuthors();

    },[])

    return (
        <>
            <Navbar />
            <div className={styles.home}>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                >
                    {authors&&authors.map((author:Author,index:any)=>{
                        return <SwiperSlide key={index} className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImage} src={author.authorImage} alt="" />
                        </SwiperSlide>;
                    })}
                    
                   
                   
                    
                </Swiper>

                {/* <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg" alt="" /> */}

            </div>
        </>
    )
}

export default Home