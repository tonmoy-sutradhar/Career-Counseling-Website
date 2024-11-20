import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./styles.css";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Image imports
import one from "../../assets/slide2.jpg";
import two from "../../assets/slide3.jpg";
import three from "../../assets/slide4.jpg";
import four from "../../assets/5.jpg";
import five from "../../assets/6.jpg";
import six from "../../assets/7.jpg";
import seven from "../../assets/8.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        // navigation={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        // modules={[Navigation, Autoplay]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <img src={two} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={one} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} alt="Slide 7" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
