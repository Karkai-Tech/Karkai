// ...existing code...
import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import WhatWeOffer from './pages/WhatWeOffer.jsx'
import Project from './pages/project-feedback.jsx'
import ProfileSection from './pages/ProfileSection.jsx'
import MeetingSection from './pages/MeetingSection.jsx'
import LoveLetters from './pages/LoveLetters.jsx'
import Footer from './pages/Footer.jsx'
// ...existing code...
export default function App() {
  const sectionStyle = { scrollMarginTop: '100px' };
  
  return (
    <>
      <div id="home" style={sectionStyle}>
        <LandingPage />
      </div>
      <div id="projects" style={sectionStyle}>
        <Project />
      </div>
      <div id="about-us" style={sectionStyle}>
        <ProfileSection />
      </div>
      <div id="meeting" style={sectionStyle}>
        <MeetingSection />
      </div>
      <div id="what-we-offer" style={sectionStyle}>
        <WhatWeOffer />
      </div>
      <div id="love-letters" style={sectionStyle}>
        <LoveLetters />
      </div>
      <div id="contact" style={sectionStyle}>
        <Footer />
      </div>
    </>
  )
}
// ...existing code...