import React, { useState } from "react";
import logo from '../../assets/logo.svg';
import downArrow from '../../assets/downArrow.svg';

const Navbar = () => {
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);
  return (
    <>
      <div className="lg:flex justify-center items-center py-4 bg-[#F7EDE8] hidden px-4">
        <div className="flex w-full px-4 justify-between gap-2 items-center">
          <div className="flex justify-center items-center gap-24 pr-2">
            <div className="flex items-center justify-center">
              <img src={logo} alt="" className="aspect-square w-24 h-24"/>
            </div>
            <div className="flex items-center justify-center p-2 w-full">
              <ul className="flex justify-center items-center gap-16">
                <li>
                  <p className="font-bold text-xl">Episodes</p>
                </li>
                <li>
                  <p className="font-bold text-xl">About</p>
                </li>
                <li className="flex gap-2 justify-center items-center text-center">
                  <p className="font-bold text-xl">More</p>
                  <img src={downArrow} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="bg-transparent border-[3px] cursor-pointer font-bold border-black py-2 px-4 rounded-[14px] ">
              <button className="uppercase">recent episodes</button>
            </div>
            <div className="bg-black cursor-pointer font-bold py-2 px-4 rounded-[14px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
              <button className="uppercase text-white">subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="lg:hidden block">
          <div className="w-full px-[20px] py-[10px] z-[40] bg-[#F7EDE8]">
            <div className="flex justify-between items-center">
              <img src={logo} alt="img/logo.svg" />
              <div
                onClick={onTriggerPopup}
                className="blob p-2 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <svg
                  class="w-[45px] h-[45px] sm:w-[40px] sm:h-[40px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={`fixed h-screen w-screen flex flex-col py-6 px-6 bg-black text-white uppercase overflow-y-auto lg:hidden z-[1000] items-center justify-center transition-transform duration-500 ${
            popupState ? "showpopup" : "noshowpopup"
          }`}
        >
          <ul className=" flex items-start flex-col gap-3">
            <li>
              <a href="#landing-page">Episodes</a>
            </li>
            <li>
              <a href="#about-us">about</a>
            </li>
            <div className="bg-transparent border-[3px] cursor-pointer font-bold border-black py-2 px-4 rounded-[14px] ">
              <button className="uppercase">recent episodes</button>
            </div>
            <div className="bg-black cursor-pointer font-bold py-2 px-4 rounded-[14px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
              <button className="uppercase text-white">subscribe</button>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
