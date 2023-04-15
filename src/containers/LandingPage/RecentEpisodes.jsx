import React from "react";
import eps1 from "../../assets/eps1.svg";
import eps2 from "../../assets/eps2.svg";
import eps3 from "../../assets/eps3.svg";
import eps4 from "../../assets/eps4.svg";
import eps5 from "../../assets/eps5.svg";
import eps6 from "../../assets/eps6.svg";
import epi1 from "../../assets/epi1.svg";
import recentEpi1 from "../../assets/recentEpi1.svg";

const RecentEpisodes = () => {
  return (
    <>
      <section className="flex items-center justify-center max-w-screen-2xl min-h-[50vh] h-full p-8 md:py-24 relative bg-[#F7EDE8]">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-[90%] mx-auto md:gap-24 gap-12">
            <div className="flex flex-col justify-center text-center items-center md:gap-4 gap-2">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Recent Episodes
              </h1>
              <p className="xl:text-xl lg:text-lg md:text-md text-sm text-[#4D4D4D]">
                Available on your favorite platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
              <div className="flex flex-col justify-center bg-white rounded-[22px] md:p-6 p-3 border-4 border-black drop-shadow shadow-[10px_10px_0px_0px_#81ADC8]">
                <div className="flex lg:flex-row flex-col items-center gap-4">
                  <img src={eps6} alt="" />
                  <div className="flex flex-col justify-center gap-4">
                    <div className="border-b-2 border-black flex flex-col gap-2 md:py-4">
                      <h2 className="md:text-xl text-base font-semibold text-[#CD4631]">
                        Eps. 6
                      </h2>
                      <h1 className="md:text-2xl text-lg font-semibold text-[#CD4631]">
                        Pandemic Becoming Endemic
                      </h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat sequi dicta praesentium?
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center">
                  <div className="flex gap-3 pt-2">
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">covid-19</button>
                    </div>
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">health</button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center md:justify-center justify-between gap-2">
                    <p>Hosted by:</p>
                    <div>
                      <img src={epi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white rounded-[22px] md:p-6 p-3 border-4 border-black">
                <div className=" flex lg:flex-row flex-col items-center gap-4">
                  <img src={eps5} alt="" />
                  <div className="flex flex-col justify-center gap-4">
                    <div className="border-b-2 border-black flex flex-col gap-2 md:py-4">
                      <h2 className="md:text-xl text-base font-semibold text-[#CD4631]">
                        Eps. 5
                      </h2>
                      <h1 className="md:text-2xl text-lg font-semibold">
                        Tesla Autopilot Controversy
                      </h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat sequi dicta praesentium?
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center">
                  <div className="flex gap-3 pt-2">
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">automation</button>
                    </div>
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">tech</button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p>Hosted by:</p>
                    <div>
                      <img src={epi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white rounded-[22px] md:p-6 p-3 border-4 border-black">
                <div className=" flex lg:flex-row flex-col items-center gap-4">
                  <img src={eps4} alt="" />
                  <div className="flex flex-col justify-center gap-4">
                    <div className="border-b-2 border-black flex flex-col gap-2 md:py-4">
                      <h2 className="md:text-xl text-base font-semibold text-[#CD4631]">
                        Eps. 4
                      </h2>
                      <h1 className="md:text-2xl text-lg font-semibold">
                        Women's Rights? Is it alright?
                      </h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat sequi dicta praesentium?
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center">
                  <div className="flex gap-3 pt-2">
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">Women's Right</button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p>Hosted by:</p>
                    <div>
                      <img src={epi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white rounded-[22px] md:p-6 p-3 border-4 border-black drop-shadow shadow-[10px_10px_0px_0px_#81ADC8]">
                <div className=" flex lg:flex-row flex-col items-center gap-4">
                  <img src={eps3} alt="" />
                  <div className="flex flex-col justify-center gap-4">
                    <div className="border-b-2 border-black flex flex-col gap-2 md:py-4">
                      <h2 className="md:text-xl text-base font-semibold text-[#CD4631]">
                        Eps. 3
                      </h2>
                      <h1 className="md:text-2xl text-lg font-semibold text-[#CD4631]">
                        How to Deal with Self-Confidence
                      </h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat sequi dicta praesentium?
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center">
                  <div className="flex gap-3 pt-2">
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">self-esteem</button>
                    </div>
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">health</button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p>Hosted by:</p>
                    <div>
                      <img src={epi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white rounded-[22px] md:p-6 p-3 border-4 border-black drop-shadow shadow-[10px_10px_0px_0px_#81ADC8]">
                <div className=" flex lg:flex-row flex-col items-center gap-4">
                  <img src={eps2} alt="" />
                  <div className="flex flex-col justify-center gap-4">
                    <div className="border-b-2 border-black flex flex-col gap-2 md:py-4">
                      <h2 className="md:text-xl text-base font-semibold text-[#CD4631]">
                        Eps. 2
                      </h2>
                      <h1 className="md:text-2xl text-lg font-semibold text-[#CD4631]">
                        Types of Social Classes of People
                      </h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat sequi dicta praesentium?
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center">
                  <div className="flex gap-3 pt-2">
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">social class</button>
                    </div>
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">wealth</button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p>Hosted by:</p>
                    <div>
                      <img src={epi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white rounded-[22px] md:p-6 p-3 border-4 border-black">
                <div className="flex lg:flex-row flex-col items-center gap-4">
                  <img src={eps1} alt="" />
                  <div className="flex flex-col justify-center gap-4">
                    <div className="border-b-2 border-black flex flex-col gap-2 md:py-4">
                      <h2 className="md:text-xl text-base font-semibold text-[#CD4631]">
                        Eps. 1
                      </h2>
                      <h1 className="md:text-2xl text-lg font-semibold">
                        Are you a perplexed Mind Person
                      </h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat sequi dicta praesentium?
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center">
                  <div className="flex gap-3 pt-2">
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">mind-behavior</button>
                    </div>
                    <div className="bg-transparent border-[2px] cursor-pointer border-black py-2 px-4 rounded-[14px] ">
                      <button className="">health</button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p>Hosted by:</p>
                    <div>
                      <img src={epi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black cursor-pointer font-bold py-2 px-4 rounded-[14px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
              <button className="uppercase text-white">
                browse all episodes
              </button>
            </div>
          </div>
        </div>
        <div className="absolute md:top-[9rem] top-[5rem] -right-6">
          <img src={recentEpi1} alt="" />
        </div>
        <div className="absolute z-10 -top-16 flex items-center justify-center">
          <svg
            width="150"
            height="154"
            viewBox="0 0 150 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 2C54.0002 120.75 82.6905 85.7939 86.822 77.8929C122.305 10.0357 42.4671 47.5357 56.6612 152"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default RecentEpisodes;
