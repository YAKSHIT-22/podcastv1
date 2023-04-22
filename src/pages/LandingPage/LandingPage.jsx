import React from 'react'
import { About, ArticleAndNews, AvailableApp, HeroSection, Listeners, MemberBenefits, RecentEpisodes, Sponsor } from '../../containers/LandingPage'


const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Listeners/>
      <MemberBenefits/>
      <RecentEpisodes/>
      <Sponsor/>
      <ArticleAndNews/>
      <AvailableApp/>
    </>
  )
}

export default LandingPage