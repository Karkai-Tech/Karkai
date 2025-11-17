// ...existing code...
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
// import WhatWeOffer from './pages/WhatWeOffer.jsx'
import Project from './pages/project-feedback.jsx'
import ProfileSection from './pages/ProfileSection.jsx'
import MeetingSection from './pages/MeetingSection.jsx'
import LoveLetters from './pages/LoveLetters.jsx'
import Footer from './pages/Footer.jsx'
// ...existing code...
function MainContent() {
  const sectionStyle = { scrollMarginTop: '100px' };
  
  return (
    <>
      <div id="home" style={sectionStyle}>
        <LandingPage />
      </div>
      <div id="projects" style={sectionStyle}>
        <Project />
      </div>
      {/* <div id="about-us" style={sectionStyle}>
        <ProfileSection />
      </div> */}
      <div id="meeting" style={sectionStyle}>
        <MeetingSection />
      </div>
      {/* <div id="what-we-offer" style={sectionStyle}>
        <WhatWeOffer />
      </div> */}
      <div id="love-letters" style={sectionStyle}>
        <LoveLetters />
      </div>
      <div id="contact" style={sectionStyle}>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about-us-page" element={<ProfileSection />} />
      </Routes>
    </BrowserRouter>
  )
}