import React from 'react'
import './WhatWeOffer.css'

export default function WhatWeOffer() {
  return (
    <div className="wwo-page">
      {/* Top Scrolling Text */}
      <div className="wwo-scroll-text wwo-scroll-top">
        <div className="wwo-scroll-content">
          <span>Smart Code</span>
          <span>Performance Obsessed</span>
          <span>Truly Yours</span>
          <span>Scalable Systems</span>
          <span>Sharp Design</span>
          <span>Smart Code</span>
          <span>Performance Obsessed</span>
          <span>Truly Yours</span>
          <span>Scalable Systems</span>
          <span>Sharp Design</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="wwo-main-content">
        <h1 className="wwo-title">WHAT WE OFFER!!</h1>
        <p className="wwo-description">
          We help Tamil Nadu's small & medium businesses go digital with world-class web design and growth marketing that deliver real results.
        </p>
        
        {/* Feature Boxes */}
        <div className="wwo-features">
          <div className="wwo-feature-box">
            <div className="wwo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <h3 className="wwo-feature-title">Design</h3>
            <p className="wwo-feature-desc">Interfaces that feel effortless and timeless.</p>
          </div>

          <div className="wwo-feature-box">
            <div className="wwo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3 className="wwo-feature-title">Worldwide Service</h3>
            <p className="wwo-feature-desc">Serving Clients Across the Globe</p>
          </div>

          <div className="wwo-feature-box">
            <div className="wwo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16,18 22,12 16,6"/>
                <polyline points="8,6 2,12 8,18"/>
              </svg>
            </div>
            <h3 className="wwo-feature-title">Development</h3>
            <p className="wwo-feature-desc">Websites and apps engineered to scale.</p>
          </div>

          <div className="wwo-feature-box">
            <div className="wwo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="wwo-feature-title">Performance</h3>
            <p className="wwo-feature-desc">Fast, optimized, and built for growth.</p>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Text */}
      <div className="wwo-scroll-text wwo-scroll-bottom">
        <div className="wwo-scroll-content">
          <span>Performance Obsessed</span>
          <span>Truly Yours</span>
          <span>Scalable Systems</span>
          <span>Sharp Design</span>
          <span>Smart Code</span>
          <span>Performance Obsessed</span>
          <span>Truly Yours</span>
          <span>Scalable Systems</span>
          <span>Sharp Design</span>
          <span>Smart Code</span>
        </div>
      </div>
    </div>
  )
}
