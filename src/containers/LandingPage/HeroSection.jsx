import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import vector1 from "../../assets/vector1.svg";
import vector2 from "../../assets/vector2.svg";
import vector3 from "../../assets/vector3.svg";
import vector4 from "../../assets/vector4.svg";
import vector5 from "../../assets/vector5.svg";
import vector6 from "../../assets/vector6.svg";
import vector7 from "../../assets/vector7.svg";
import youtube from "../../assets/youtube.svg";
import googlePodcasts from "../../assets/googlePodacasts.svg";
import spotify from "../../assets/spotify.svg";

const HeroSection = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <section className="flex flex-col bg-[#F7EDE8] lg:gap-20 md:gap-14 pt-6 gap-10">
      <div className="flex flex-col justify-center items-center bg-[#F7EDE8] py-4">
        <div className="absolute left-0 hidden lg:flex">
          <img src={vector1} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center mx-auto lg:gap-12 gap-8">
          <div className="flex flex-col justify-center lg:text-7xl text-6xl font-bold gap-3">
            <h1>Your Daily</h1>
            <h1 className="text-[#CD4631]">Podcast</h1>
          </div>
          <div className="text-[#4D4D4D] md:w-[65%] w-[80%] lg:text-xl text-lg">
            <p>We cover all kinds of categories and a weekly special guest</p>
          </div>
          <div className="bg-black cursor-pointer font-bold py-4 px-8 rounded-[10px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
            <button className="uppercase text-white">subscribe</button>
          </div>
        </div>
        <div className="absolute right-0 hidden lg:flex">
          <img src={vector2} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-start w-full h-full">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          navigation={false}
          autoplay={{ delay: 4500 }}
          breakpoints={{
            300: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            520: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="">
              <img
                src={vector3}
                alt="img/advocate.svg"
                className="w-[20rem] h-[20rem]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={vector4}
                alt="img/kid.svg"
                className="w-[20rem] h-[20rem]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={vector5}
                alt="img/stream.svg"
                className="w-[20rem] h-[20rem]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={vector6}
                alt="img/gaming.svg"
                className="w-[20rem] h-[20rem]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={vector7}
                alt="img/lab.svg"
                className="w-[20rem] h-[20rem]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lex flex-col justify-center items-center bg-[#F7EDE8] pt-4 pb-14">
        <div className="flex lg:flex-row flex-col md:justify-center justify-center w-[85%] items-center text-center mx-auto lg:gap-12 gap-4 border-b-2 border-t-2 border-b-black border-t-black">
          <div className="font-bold capitalize text-xl lg:mt-0 mt-6">
            Supported By:
          </div>
          <img src={spotify} alt="" />
          <img src={youtube} alt="" />
          <img src={googlePodcasts} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;