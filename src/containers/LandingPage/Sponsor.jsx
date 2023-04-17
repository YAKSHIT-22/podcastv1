import React from 'react'
import about from "../../assets/about.svg";
import memberBenefits from '../../assets/benefits.svg'
import aboutspiral from "../../assets/aboutspiral.svg";
import aboutstar from "../../assets/aboutstar.svg";
const Sponsor = () => {
  const cards = [
    {
    id: 1,
    title:"Member",
    features:[{
        id:1,
        first:"Exclusive Content",
        second:"5% Discount on Merch",
        third:"Join the Community",
        fourth:"Livestreaming Access",
        fifth:"Free Chat with Hosts",
    }],
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 2,
    title:"Family",
    features:[{
        id:1,
        first:"Everything in Tier 1",
        second:"Free tickets to Events",
        third:"Limited Edition Merch",
        fourth:"Promote your Product",
        fifth:"Request Topic",
    }],
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 3,
    title:"Official",
    features:[{
        id:1,
        first:"Everything in Tier 2",
        second:"Exclusive Badge on Livestreaming",
        third:"Become an Official Sponsor",
        fourth:"Early Access to All Episodes",
        fifth:"Free Stikers and Merch",
    }],
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
]
  return (
    <section className="flex select-none items-center justify-center min-h-screen h-full p-3 md:p-6 relative">
      <div className="flex items-center justify-center w-full max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center w-full flex-col s:p-4 p-2 my-4 md:p-6 gap-4 sm:gap-6 lg:gap-10">
          <div className="w-full flex items-center justify-center ">
          <div className='flex items-center justify-center p-4 gap-2 relative'>
            <div className="w-full gap-3 flex items-center flex-col justify-center p-2">
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Become our sponsor
              </h1>
              <p className="font-medium text-base s:text-lg md:text-xl text-center text-[#4d4d4d]">Get exclusive episodes, merch and more.</p>
              <div className="absolute top-0 right-0 flex items-center justify-center">
                <img src={memberBenefits} alt="benefits" className='w-16'/>
            </div>
            </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full relative">
               <div className="grid md:grid-cols-3 s:grid-cols-2 grid-cols-1 items-center w-full lg:max-w-6xl justify-center gap-4">
               { cards.map((item)=> (<div key={item.id} className="flex h-full lg:p-2 xl:p-4 items-center w-full gap-4 justify-center flex-col">
                <div className="flex items-center bg-white flex-col  justify-start gap-2 p-4 border border-black hover:border-[#CD4631] hover:bg-[#CD4631]/40  transition duration-500 ease-in-out">
                  <div className='flex items-center justify-start p-2 w-full'>
                    <h1 className='text-start font-extrabold  text-xl lg:text-2xl'>{item.title}</h1>
                  </div>
                  <div className='flex items-center justify-start p-2 w-full'>
                    <p className='text-xs text-[#4d4d4d] lg:text-sm text-start font-medium'>{item.description}</p>
                  </div>
                  <div className='flex items-center justify-between lg:flex-row flex-col w-full p-2 gap-4'>
                      <div className="bg-black cursor-pointer font-bold p-2 rounded-[10px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
                       <button className="uppercase text-sm text-white">subscribe</button>
                      </div>
                      <div className="flex items-center justify-start flex-col">
                            <p className="text-[#CD4631] text-sm inline-flex lg:flex-col font-extrabold">$9.99<span className="text-[#4d4d4d] font-medium text-sm">/month</span></p>
                      </div>
                  </div>
                  </div>
                <div className="flex items-center flex-1 bg-white flex-col w-full justify-start p-6 gap-2 border border-black hover:border-[#CD4631] hover:bg-[#CD4631]/50 transition duration-500 ease-in-out">
                  <div className='flex items-center justify-start p-2 w-full'>
                    <h1 className='text-xs text-[#4D4D4D] s:text-sm font-extrabold'>
                        What's included
                    </h1>
                  </div>
                  <div className='flex items-center justify-start p-2  w-full mb-2'>
                    <ul className='flex items-start justify-center list-disc list-outside flex-col w-full'>
                        {item.features.map((feature)=>(<>
                            <li className='text-start font-medium text-sm hover:font-extrabold transition duration-700 ease-in-out'>{feature.first}</li>
                            <li className='text-start font-medium text-sm hover:font-extrabold transition duration-700 ease-in-out'>{feature.second}</li>
                            <li className='text-start font-medium text-sm hover:font-extrabold transition duration-700 ease-in-out'>{feature.third}</li>
                            <li className='text-start font-medium text-sm hover:font-extrabold transition duration-700 ease-in-out'>{feature.fourth}</li>
                           <li className='text-start font-medium text-sm hover:font-extrabold transition duration-700 ease-in-out'>{feature.fifth}</li> 
                           </>
))}
                    </ul>
                  </div>
                  </div>
                  </div>))}
               </div>
               <div className="absolute z-[-1] lg:left-4 left-0 xl:left-6 bottom-6 flex items-center justify-center">
              <img
                src={aboutspiral}
                alt="aboutspiral"
                className="lg:w-36 text-[#81ADC8] md:w-24 sm:w-20 w-16 h-16 sm:h-20 md:h-24 lg:h-36"
              />
            </div>
            <div className="absolute  -top-6 lg:right-2 right-0 xl:right-4 z-[-1] flex items-center justify-center">
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
  )
}

export default Sponsor
