import React from "react";
import article1 from "../../assets/article1.png";
import article2 from "../../assets/article2.png";
import article3 from "../../assets/article3.png";
import article4 from "../../assets/article4.png";

const ArticleAndNews = () => {
  const news = [
    {
      id: 1,
      img: article1,
      txt1: "PODCAST",
      heading: "Setup your own podcast",
      color: true,
      txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...",
      btn: [
        { id: 1, txt: "business" },
        { id: 2, txt: "startup" },
      ],
      date: "Sep 14, 2021",
    },
    {
      id: 2,
      img: article2,
      txt1: "TIPS & TRICK",
      heading: "Doodle artwork 101",
      color: false,
      txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...",
      btn: [
        { id: 1, txt: "art" },
        { id: 2, txt: "creative" },
        { id: 3, txt: "tips & trick" },
      ],
      date: "Sep 12, 2021",
    },
  ];
  return (
    <section className="flex select-none items-center justify-center p-3 md:p-6 relative min-h-screen h-full">
      <div className="flex items-center justify-center w-full max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center w-full flex-col s:p-4 p-2 my-4 md:p-6 gap-4 sm:gap-6 lg:gap-14">
          <div className="w-full flex items-center justify-center">
            <div className="w-full gap-3 flex items-center flex-col justify-center p-2">
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Article and News
              </h1>
              <p className="font-medium text-base s:text-lg md:text-xl text-center text-[#4d4d4d]">
                News, tips, tricks and more
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <div className="flex md:flex-row flex-col w-full lg:max-w-6xl justify-center md:gap-5 gap-10 z-[10]">
              {news.map((item) => (
                <div
                  className={`p-4 border-2 border-black flex flex-col rounded-[24px] gap-4 z-[10] ${
                    item.color && "shadow-[10px_10px_0px_0px_black]"
                  }`}
                  key={item.id}
                >
                  <div className="flex items-center justify-center w-full">
                    <img src={item.img} alt={`img/${item.img}`} />
                  </div>
                  <div className="flex flex-col border-b-2 border-[#4D4D4D] gap-3">
                    <p className="text-[#4D4D4D] text-base">{item.txt1}</p>
                    <h1
                      className={`${
                        item.color ? "text-[#CD4631]" : "text-[#000000]"
                      } text-2xl md:text-3xl lg:text-4xl font-semibold xl:text-4xl`}
                    >
                      {item.heading}
                    </h1>
                    <p className="mb-4 text-[#4D4D4D] md:text-base text-sm">
                      {item.txt}
                    </p>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-4">
                    <div className="flex flex-row gap-3">
                      {item.btn.map((i) => (
                        <div
                          key={i.id}
                          className="bg-transparent border cursor-pointer border-black py-2 px-4 rounded-[14px]"
                        >
                          <button>{i.txt}</button>
                        </div>
                      ))}
                    </div>
                    <div className="text-[#4D4D4D] font-semibold lg:text-xl md:text-lg text-lg">
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute lg:-top-[5rem] lg:-left-[5rem] -top-[2rem] md:-left-[5rem] md:-top-[4rem] -left-[2rem] z-[-1] flex items-center justify-center">
              <img
                src={article3}
                alt=""
                className="lg:w-36 md:w-32 md:h-32 sm:w-24 w-20 h-20 sm:h-24 lg:h-36"
              />
            </div>
            <div className="absolute lg:-bottom-[15rem] lg:-right-[5rem] md:-bottom-[7rem] -bottom-[4rem] -right-[1rem] z-[-1] flex items-center justify-center">
              <img
                src={article4}
                alt=""
                className="lg:w-36 md:w-32 md:h-32 sm:w-24 w-20 h-20 sm:h-24 lg:h-36"
              />
            </div>
          </div>
          <div className="bg-black cursor-pointer font-bold p-5 rounded-[10px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
            <button className="uppercase text-sm text-white">BROWSE All</button>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ArticleAndNews;
