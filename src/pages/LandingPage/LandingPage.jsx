import React from 'react'
import HeroSection from '../../containers/LandingPage/HeroSection'
import About from '../../containers/LandingPage/About'
import Listners from '../../containers/LandingPage/Listners'
import MemberBenefits from '../../containers/LandingPage/MemberBenefits'
import RecentEpisodes from '../../containers/LandingPage/RecentEpisodes'
import Sponsor from '../../containers/LandingPage/Sponsor'
import ArticleAndNews from '../../containers/LandingPage/ArticleAndNews'


const LandingPage = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Listners/>
    <MemberBenefits/>
    <RecentEpisodes/>
    <Sponsor/>
    <ArticleAndNews/>
    </>
  )
}

export default LandingPage