import React from "react";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import tik from "../../assets/tik.png";
import googlePodcasts from "../../assets/googlePodacasts.svg";
import spotify from "../../assets/spotify.png";
import youtube from "../../assets/youtube.png";
import applestore from "../../assets/applestore.png";
import playstore from "../../assets/playstore.png";

const Footer = () => {
  return (
    <footer className="flex select-none items-center justify-center p-3 md:p-6 relative h-full">
      <div className="flex items-center justify-center w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center w-full flex-col s:p-4 p-2 my-4 md:p-6 gap-4 sm:gap-6 lg:gap-10">
          <div className="flex lg:justify-between md:justify-center s:flex-row flex-col items-center lg:gap-24 gap-8">
            <div className="flex flex-col justify-center lg:gap-4 gap-6 lg:w-[40%]">
              <div className="flex items-baseline gap-4 md:gap-8 ">
                <img src={logo} alt="" />
                <p>&copy;2021.</p>
              </div>
              <div className="flex items-center justify-center text-[#4d4d4d]">
                <p className="lg:text-lg md:text-base text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex items-center lg:gap-3 gap-4">
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={tik} alt="" />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-14 gap-6">
              <div className="flex flex-row justify-center items-center gap-8 md:gap-6">
                <div className="flex flex-col justify-center gap-5 md:gap-7 font-semibold">
                  <p>About</p>
                  <p className="text-red-500">Testimonials</p>
                  <p>Features</p>
                </div>
                <div className="flex flex-col justify-center gap-5 md:gap-7 font-semibold">
                  <p className="text-red-500">Episodes</p>
                  <p>Pricing</p>
                  <p>Blog</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6 ">
                <div className="flex flex-col justify-center gap-4">
                  <p className="flex items-center text-center">Listen to episodes on your fav platform:</p>
                  <div className="flex items-center justify-center gap-2 lg:flex-row flex-col">
                  <div className="flex items-center justify-center w-full"><img src={googlePodcasts} alt="" className="w-[50%] md:w-[75%] h-[33%]" /></div>
                  <div className="flex items-center justify-center w-full"><img src={spotify} alt="" className="w-[50%] md:w-[75%] h-[33%]" /></div>
                  <div className="flex items-center justify-center w-full"> <img src={youtube} alt="" className="w-[50%] md:w-[75%] h-[33%]" /></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <p className="flex items-center justify-center text-center">App available on:</p>
                  <div className="flex items-center justify-center gap-2 flex-row ">
                    <img src={applestore} alt="" />
                    <img src={playstore} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:justify-between justify-center items-center w-full border-t-2 border-black pt-4">
            <div className="flex flex-col justify-center items-center">
              <p className="md:text-base text-sm">
                &copy;2022. All Rights Reserved. <span className="text-red-600">Pod of Cast</span>
              </p>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center md:gap-5 gap-2 font-medium">
              <p>Terms</p>
              <p className="md:block hidden">.</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
