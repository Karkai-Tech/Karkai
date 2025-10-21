import React, { useEffect } from 'react'
import './LandingPage.css'
import karkaiLogo from './image/karkai-removebg-preview.png'

export default function LandingPage() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.lp-topBar')
      if (!header) return
      if (window.scrollY > 8) header.classList.add('lp-stuck')
      else header.classList.remove('lp-stuck')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="lp-page">
      <div className="lp-container">
        <div className="lp-topBar lp-enter-up">
          {/* Small logo at the top (left) */}
          <img src={karkaiLogo} alt="KARKAI" className="lp-brandLogoSmall lp-pop" />
          <div className="lp-navPill">
            <div className="lp-navItem">HOME</div>
            <div className="lp-navItem">PROJECTS</div>
            <div className="lp-navItem">ABOUT US</div>
            <div className="lp-navItem">MEETING</div>
            <div className="lp-navItem">CONTACT</div>
          </div>
          {/* 2x2 grid icon on the top right */}
          <div className="lp-gridWrap lp-pop">
            <span className="lp-gridSquare" />
            <span className="lp-gridSquare" />
            <span className="lp-gridSquare" />
            <span className="lp-gridSquare" />
          </div>
        </div>

        <div className="lp-hero">
          {/* Large centered logo in the hero */}
          <img src={karkaiLogo} alt="KARKAI" className="lp-logoBig lp-fade-in" />
          <div className="lp-quote lp-letters" data-text="Connecting Minds, Creating Tomorrow">
            "Connecting Minds, Creating Tomorrow"
          </div>
          <div className="lp-sub lp-reveal">
            To craft designs and systems that feel effortless,
            <br />
            timeless, and truly centered around the people who use them.
          </div>
          <div className="lp-ctaRow">
            <button className="lp-cta lp-slide-left">HOME</button>
            <button className="lp-cta lp-slide-right">CONTACT</button>
          </div>
        </div>

        {/* Video / Intro Section */}
        <section className="lp-videoSection">
          <div className="lp-videoCard lp-reveal">
            {/* Play button mock to resemble YouTube style */}
            <div className="lp-playButton">
              <div className="lp-playTriangle" />
            </div>
          </div>
          <p className="lp-videoCaption lp-reveal">
            We blend minimal design with scalable intelligence, crafting solutions
            that adapt and grow with you. At KARKAI, every interface is
            made to feel effortless and timeless.
          </p>
        </section>
      </div>
    </div>
  )
}
