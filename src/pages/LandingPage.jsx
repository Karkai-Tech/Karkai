import React from 'react'
import './LandingPage.css'
import karkaiLogo from './image/karkai-removebg-preview.png'

export default function LandingPage() {
  return (
    <div className="lp-page">
      <div className="lp-container">
        <div className="lp-topBar">
          {/* Small logo at the top (left) */}
          <img src={karkaiLogo} alt="KARKAI" className="lp-brandLogoSmall" />
          <div className="lp-navPill">
            <div className="lp-navItem">HOME</div>
            <div className="lp-navItem">PROJECTS</div>
            <div className="lp-navItem">ABOUT US</div>
            <div className="lp-navItem">MEETING</div>
            <div className="lp-navItem">CONTACT</div>
          </div>
          {/* 2x2 grid icon on the top right */}
          <div className="lp-gridWrap">
            <span className="lp-gridSquare" />
            <span className="lp-gridSquare" />
            <span className="lp-gridSquare" />
            <span className="lp-gridSquare" />
          </div>
        </div>

        <div className="lp-hero">
          {/* Large centered logo in the hero */}
          <img src={karkaiLogo} alt="KARKAI" className="lp-logoBig" />
          <div className="lp-quote">
            "Connecting Minds, Creating Tomorrow"
          </div>
          <div className="lp-sub">
            To craft designs and systems that feel effortless,
            <br />
            timeless, and truly centered around the people who use them.
          </div>
          <div className="lp-ctaRow">
            <button className="lp-cta">HOME</button>
            <button className="lp-cta">CONTACT</button>
          </div>
        </div>

        {/* Video / Intro Section */}
        <section className="lp-videoSection">
          <div className="lp-videoCard">
            {/* Play button mock to resemble YouTube style */}
            <div className="lp-playButton">
              <div className="lp-playTriangle" />
            </div>
          </div>
          <p className="lp-videoCaption">
            We blend minimal design with scalable intelligence, crafting solutions
            that adapt and grow with you. At KARKAI, every interface is
            made to feel effortless and timeless.
          </p>
        </section>
      </div>
    </div>
  )
}
