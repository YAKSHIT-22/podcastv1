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
      <section className="flex items-center justify-center max-w-screen-2xl min-h-[50vh] h-full p-8 md:py-24 relative bg-[#F7EDE8] overflow-x-hidden">
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
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M116.542 118.29C117.042 116.29 117.333 114.665 117.875 113.082C123.292 97.0821 132 82.8321 141.917 69.2904C143.083 67.7071 144.542 66.2071 146.167 65.2071C147.042 64.6654 148.792 64.7487 149.792 65.2904C150.542 65.7071 151.083 67.3321 150.917 68.2487C150.625 69.9987 150 71.7904 149.125 73.3737C143.375 83.8321 137.583 94.2487 131.708 104.624C129.5 108.499 127.167 112.332 124.875 116.165C124.125 117.457 123.292 118.707 122.417 119.874C121.458 121.207 120 121.999 118.542 121.124C117.583 120.54 116.542 120.124 116.542 118.29Z"
              fill="#CD4631"
            />
            <path
              d="M175.542 180.333C173.542 180 171.208 179.75 168.958 179.25C160.083 177.25 151.208 175.25 142.375 173.167C140.458 172.708 138.583 171.917 136.875 171C134.583 169.792 133.792 168.083 134.167 166.208C134.542 164.333 136.042 163.167 138.667 163.125C140.458 163.083 142.375 163.125 144.083 163.542C155.292 166.375 166.5 169.292 177.667 172.25C178.917 172.583 180.208 173.167 181.167 174C183.583 176.042 182.833 179.25 179.75 180.042C178.542 180.333 177.167 180.208 175.542 180.333Z"
              fill="#CD4631"
            />
            <path
              d="M58.4584 68.6243C58.6251 66.666 59.0417 64.7077 59.5417 62.791C60.0001 61.0827 61.1667 59.8743 63.0417 59.7077C64.6251 59.5827 66.3334 61.166 66.5834 63.2493C66.9167 66.041 67.2084 68.8743 67.0834 71.666C66.7084 80.0827 66.1667 88.541 65.5834 96.9577C65.375 99.7493 65 102.541 64.5417 105.333C64.375 106.291 64.0417 107.291 63.5 108.041C62.0417 110.166 59.3751 109.999 58.3334 107.708C57.7501 106.416 57.5001 104.833 57.5001 103.416C57.2917 98.7493 57.9167 75.541 58.4584 68.6243Z"
              fill="#CD4631"
            />
          </svg>
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
