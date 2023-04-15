import React from 'react'
import about from "../../assets/about.svg";
import memberBenefits from '../../assets/benefits.svg'
import face1 from '../../assets/face1.svg'
import face2 from '../../assets/face2.svg'
import fire from '../../assets/fire.svg'
import scribble from '../../assets/scribble.svg'
import shining from '../../assets/shining.svg'
import star from '../../assets/star.svg'
const MemberBenefits = () => {
  const cards = [
    {
    id: 1,
    title:"Topic by Request",
    img:scribble,
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 2,
    title:"Exclusive Content",
    img:shining,
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 3,
    title:"Join the Community",
    img:face1,
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 4,
    title:"Livestreaming Access",
    img:face2,
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 5,
    title:"Exclusive Episodes & Merch",
    img:fire,
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },
    {
    id: 6,
    title:"And much more!",
    img:star,
    description:"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
  },

]
  return (
    <section className="flex items-center justify-center max-w-screen-2xl min-h-screen h-full p-3 md:p-6 relative">
      <div className="flex items-center justify-center w-full p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center w-full flex-col s:p-4 p-2 my-4 md:p-6 gap-4 sm:gap-6 lg:gap-10">
          <div className="w-full flex items-center justify-center ">
          <div className='flex items-center justify-center p-4 gap-2 relative'>
            <div className="w-full gap-3 flex items-center flex-col justify-center p-2">
              <h1 className="text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Membership benefits
              </h1>
              <p className="font-medium text-base s:text-lg md:text-xl text-center text-[#4d4d4d]">Become our sponsor and get all benefits</p>
              <div className="absolute top-0 right-0 flex items-center justify-center">
                <img src={memberBenefits} alt="benefits" className='w-16'/>
            </div>
            </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
               <div className="grid md:grid-cols-3 s:grid-cols-2 p-2 grid-cols-1 items-center justify-center gap-4">
               { cards.map((item)=> (<div key={item.id} className="flex items-center gap-2 justify-center flex-col">
                  <div className='flex items-center justify-center p-2'>
                    <img src={item.img} alt="item.id" className='w-12 '/>
                  </div>
                  <div className='flex items-center justify-center p-2'>
                    <h1 className='text-center font-extrabold  text-xl lg:text-2xl'>{item.title}</h1>
                  </div>
                  <div className='flex items-center justify-center p-2'>
                    <p className='text-sm md:text-base text-center font-medium'>{item.description}</p>
                  </div>
                  </div>))}
               </div>
          </div>
          <div className='flex items-center justify-center w-full'>
          <div className="bg-black cursor-pointer font-bold py-4 px-8 rounded-[10px] drop-shadow shadow-[5px_5px_0px_0.25px_gray]">
            <button className="uppercase text-white">See Pricing</button>
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

export default MemberBenefits
