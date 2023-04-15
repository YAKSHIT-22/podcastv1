import React from 'react'
import HeroSection from '../../containers/LandingPage/HeroSection'
import About from '../../containers/LandingPage/About'
import Listners from '../../containers/LandingPage/Listners'
import MemberBenefits from '../../containers/LandingPage/MemberBenefits'
import RecentEpisodes from '../../containers/LandingPage/RecentEpisodes'


const LandingPage = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Listners/>
    <MemberBenefits/>
    <RecentEpisodes/>
    </>
  )
}

export default LandingPage