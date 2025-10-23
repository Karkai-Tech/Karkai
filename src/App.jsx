// ...existing code...
import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import WhatWeOffer from './pages/WhatWeOffer.jsx'
import Project from './pages/project-feedback.jsx'
import ProfileSection from './pages/ProfileSection.jsx'
import MeetingSection from './pages/MeetingSection.jsx'
import Footer from './pages/Footer.jsx'
// ...existing code...
export default function App() {
  return (
    <>
      <div id="home">
        <LandingPage />
      </div>
      <div id="what-we-offer">
        <WhatWeOffer />
      </div>
      <div id="about-us">
        <ProfileSection />
      </div>
      <div id="meeting">
        <MeetingSection />
      </div>
      <div id="love-letters">
        <Project />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}
// ...existing code...