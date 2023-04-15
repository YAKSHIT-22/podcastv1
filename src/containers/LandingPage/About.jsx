import React from "react";
import about from "../../assets/about.svg";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import spotify from "../../assets/spotify.svg";
import aboutquote from "../../assets/aboutquote.svg";
import personabout from "../../assets/personabout.png";
import aboutspiral from "../../assets/aboutspiral.svg";
import aboutstar from "../../assets/aboutstar.svg";
const About = () => {
  return (
    <section className="flex select-none items-center justify-center  min-h-screen h-full p-3 md:p-6 relative">
      <div className="flex items-center justify-center w-full max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center w-full flex-col s:p-4 p-2 my-4 md:p-6 gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full flex items-center justify-center">
            <div className="w-full s:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex items-center justify-center p-2">
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Talk. Listen. Get inspired by every minute of it.
              </h1>
            </div>
          </div>
          <div className="w-full flex items-center justify-between md:flex-row flex-col gap-6">
            <div className="w-full flex flex-col items-center gap-4 justify-center">
              <div className="flex items-center justify-center">
                <img src={about1} alt="about1" />
              </div>
              <div className="flex items-center justify-center w-[90%] lg:w-[80%]">
                <p className="font-medium text-sm lg:text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 justify-center">
              <div className="flex items-center justify-center">
                <img src={about2} alt="about1" />
              </div>
              <div className="flex items-center justify-center w-[90%] lg:w-[80%]">
                <p className="font-medium text-sm lg:text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center p-2 sm:p-6 relative">
            <div className="flex items-center flex-col gap-8 p-4 justify-center rounded-md bg-[#F7EDE8]">
              <div className="flex items-center justify-center w-full">
                <img src={aboutquote} alt="quote" />
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center w-full md:w-[85%] lg:w-[75%]">
                  {" "}
                  <h2 className="text-gray-800 font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    One of the best daily podcasts that covers every topic on
                    Spotify.
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center md:flex-row flex-col s:w-[85%] w-full md:w-[75%] gap-2 md:gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={personabout}
                      className="w-8 h-8 rounded-full border border-black"
                      alt="person"
                    />{" "}
                    <p className="text-gray-800 font-medium text-center text-xs sm:text-sm">
                      John Smith{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={spotify} alt="spotify" className="w-48 md:w-56 h-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center">
              <img
                src={aboutspiral}
                alt="aboutspiral"
                className="lg:w-36 md:w-24 sm:w-20 w-16 h-16 sm:h-20 md:h-24 lg:h-36"
              />
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center">
              <img
                src={aboutstar}
                alt="aboutstar"
                className="lg:w-28 md:w-24 md:h-24 sm:w-20 w-16 h-16 sm:h-20 lg:h-28"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-10 left-0 right-0 flex items-center justify-center">
        <img src={about} alt="sprial" className="w-20 h-20" />
      </div>
    </section>
  );
};

export default About;
