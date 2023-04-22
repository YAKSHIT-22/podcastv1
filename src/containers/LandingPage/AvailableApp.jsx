import React from "react";
import about from "../../assets/about.svg";
import App1 from "../../assets/App1.png";
import App4 from "../../assets/App4.png";
import App5 from "../../assets/App5.png";
import Apps from "../../assets/Apps.png";
import Appg from "../../assets/Appg.png";
import Appy from "../../assets/Appy.png";
import App6 from "../../assets/App6.png";
import App7 from "../../assets/App7.png";

const AvailableApp = () => {
  return (
    <section className="flex select-none items-center justify-center p-3 md:p-6 relative min-h-screen h-full bg-[#EDF3F7]">
      <div className="flex items-center justify-center w-full max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center w-full flex-col s:p-4 p-2 my-4 md:p-6 gap-4 sm:gap-6 lg:gap-24">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-6">
            <div className="bg-transparent border-2 cursor-pointer border-red-500 py-2 px-4 rounded-[14px]">
              <button className="text-red-500 md:font-semibold">BETA</button>
            </div>
            <div className="w-full gap-3 flex items-center flex-col justify-center p-2">
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Available now
              </h1>
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Pod of Cast App
              </h1>
              <p className="font-medium text-base s:text-lg md:text-xl text-center text-[#4d4d4d]">
                We just launched our podcast app!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-4 gap-6 ">
            <div className="bg-black cursor-pointer font-bold p-5 rounded-[10px] drop-shadow shadow-[5px_5px_0px_0.25px_gray] flex justify-center items-center">
              <button className="uppercase text-sm text-white">
                download now
              </button>
            </div>
            <div className="flex flex-col items-center justify-center md:gap-3 gap-5">
              <p className="text-[#4D4D4D] lg:text-lg md:text-base text-sm">
                Content also available on:
              </p>
              <div className="flex items-center justify-center gap-2">
                <img src={Appg} alt="" />
                <img src={Apps} alt="" />
                <img src={Appy} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-[11.5rem] lg:right-[31.5rem] md:right-[13rem] bottom-[14rem] right-[2rem] flex items-center justify-center">
          <img
            src={App4}
            alt=""
            className="lg:w-36 md:w-32 md:h-32 sm:w-24 w-20 h-20 sm:h-24 lg:h-36"
          />
        </div>
      </div>
      <div className="absolute md:flex items-center justify-center hidden bottom-0 left-0">
        <img
          src={App6}
          alt=""
          className="lg:w-[400px] lg:h-[400px] w-[250px]"
        />
      </div>
      <div className="absolute md:flex items-center justify-center hidden bottom-0 right-0 z-[10]">
        <img
          src={App7}
          alt=""
          className="lg:w-[300px] lg:h-[500px] w-[200px]"
        />
      </div>
      <div className="absolute bottom-0 md:flex justify-center items-center hidden right-[8rem]">
        <img
          src={App5}
          alt=""
          className="lg:w-36 md:w-32 md:h-32 sm:w-24 w-20 h-20 sm:h-24 lg:h-36"
        />
      </div>
      <div className="absolute lg:bottom-[21rem] md:bottom-[11rem] md:flex items-center justify-center hidden left-0">
        <img src={App1} alt="" />
      </div>
      <div className="absolute -top-10 left-0 right-0 flex items-center justify-center">
        <img src={about} alt="sprial" className="w-20 h-20" />
      </div>
    </section>
  );
};

export default AvailableApp;
