import React from 'react';

// Define the content once to easily duplicate it
const scrollContentWords = [
  'Smart Code', 'Performance Obsessed', 'Truly Yours', 'Scalable Systems', 'Sharp Design', 'Innovation Driven', 
  'User Centric', 'Growth Focused', 'Clean Architecture', 'Mobile First', 'Cloud Ready', 'SEO Optimized', 
  'Fast Loading', 'Responsive Design', 'Brand Identity', 'E-commerce Solutions', 'Content Management', 
  'API Integration', 'Security First', 'Analytics Driven', 'Conversion Optimized', 'Digital Strategy', 
  'Startup Friendly', 'Enterprise Ready', 'Modern Tech Stack', 'Cross Platform', 'Real Time Updates', 
  'Budget Conscious', 'Quality Assured', 'Timeline Focused', 'Support Included', 'Scalable Infrastructure', 
  'Custom Development', 'UI/UX Excellence', 'Progressive Web Apps', 'DevOps Ready', 'Version Control', 
  'Testing Coverage', 'Documentation Complete', 'Agile Methodology', 'Team Collaboration', 
  'Client Communication', 'Transparent Pricing', 'Flexible Contracts', 'Post Launch Support', 
  'Ongoing Maintenance', 'Feature Updates', 'Bug Fixes', 'Performance Monitoring', 'Success Metrics'
];

// Component to render the scroll content twice for a seamless loop
const ScrollContent = () => (
    <>
        {/* Original Content */}
        {scrollContentWords.map((word, index) => (
            <span key={`original-${index}`}>{word}</span>
        ))}
        {/* DUPLICATE CONTENT for seamless loop */}
        {scrollContentWords.map((word, index) => (
            <span key={`duplicate-${index}`}>{word}</span>
        ))}
    </>
);

// Main App component
export default function WhatWeOffer() {
  return (
    <>
      <style>{`
        /* Import Google Fonts - Styles are included directly in the JSX file to prevent build errors */
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

        .wwo-page {
          min-height: 100vh;
          background-color: #FFF9EA;
          color: #222;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          scroll-margin-top: 100px;
        }

        /* ------------------------------------------- */
        /* Scrolling Text Animation - Keyframes */
        /* ------------------------------------------- */

        @keyframes scroll-rtl {
          /* Moves the content block left by half its total width (which is the length of the original content) for a seamless loop */
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-ltr {
          /* Moves the content block right by half its total width (starting from the second copy) for a seamless loop */
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .wwo-scroll-text {
          position: absolute;
          left: 0;
          right: 0;
          height: 60px;
          display: flex;
          align-items: center;
          overflow: hidden;
          z-index: 1;
          /* REMOVED ROTATION */
          /* transform: rotate(-1deg); */ 
        }

        .wwo-scroll-top {
          top: 0;
          /* Adjusted transform for flush alignment */
          transform: translateY(0); 
        }

        .wwo-scroll-bottom {
          bottom: 0;
          /* Adjusted transform for flush alignment */
          transform: translateY(0); 
        }

        .wwo-scroll-content {
          display: flex;
          width: max-content; 
          white-space: nowrap;
          
          font-family: 'Dancing Script', cursive;
          font-size: 20px;
          font-weight: 600;
          color: #333;
          letter-spacing: 1px;
          /* ADDED padding to ensure words are not cut off at edges */
          padding: 0 5vw; 
        }

        .wwo-scroll-top .wwo-scroll-content {
          animation: scroll-ltr 120s linear infinite;
        }

        .wwo-scroll-bottom .wwo-scroll-content {
          animation: scroll-rtl 120s linear infinite;
        }

        .wwo-scroll-content span {
          margin-right: 80px;
          padding: 0 10px; 
          display: inline-block;
        }

        /* ------------------------------------------- */
        /* Main Content (Rest of the Styles)           */
        /* ------------------------------------------- */

        .wwo-main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          /* Adjust padding to account for fixed scroll bars, slightly less now that rotation is gone */
          padding: 100px 32px; 
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .wwo-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #222;
          margin-bottom: 24px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 3px 2px rgba(0,0,0,0.45);
        }

        .wwo-description {
          font-family: 'Manrope', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #333;
          line-height: 1.6;
          max-width: 800px;
          margin-bottom: 60px;
        }

        /* Feature Boxes */
        .wwo-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          max-width: 600px;
        }

        .wwo-feature-box {
          background: white;
          border: 1px solid #000;
          border-radius: 12px;
          padding: 20px;
          display: grid;
          grid-template-columns: 60px 150px 1fr;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .wwo-feature-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .wwo-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          border: 1px solid #000;
          border-radius: 8px;
          background: white;
        }

        .wwo-feature-title {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #222;
          margin: 0;
          padding: 8px 12px;
          border: 1px solid #000;
          border-radius: 8px;
          text-align: center;
          background: white;
        }

        .wwo-feature-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #333;
          margin: 0;
          padding: 8px 12px;
          border: 1px solid #000;
          border-radius: 8px;
          text-align: center;
          background: white;
          line-height: 1.4;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .wwo-main-content {
              padding: 100px 16px;
          }
          .wwo-title {
            font-size: 36px;
          }
          
          .wwo-description {
            font-size: 16px;
            padding: 0 16px;
          }
          
          .wwo-features {
            padding: 0 16px;
          }
          
          .wwo-feature-box {
            padding: 20px;
            gap: 16px;
          }
          
          .wwo-scroll-content {
            font-size: 16px;
            padding: 0 20px; /* Adjusted padding for mobile */
          }
          
          .wwo-scroll-content span {
            margin-right: 60px;
          }
          
          .wwo-scroll-text {
              transform: none !important;
          }
        }

        @media (max-width: 480px) {
          .wwo-title {
            font-size: 28px;
          }
          
          .wwo-description {
            font-size: 14px;
          }
          
          .wwo-feature-box {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 12px;
          }
          
          .wwo-feature-title,
          .wwo-feature-desc {
            display: block;
            width: 100%;
          }
          
          .wwo-scroll-content {
            font-size: 14px;
            padding: 0 10px; /* Further adjusted padding for smaller mobile */
          }
          
          .wwo-scroll-content span {
            margin-right: 40px;
          }
        }
      `}</style>
      <div className="wwo-page" id="what-we-offer">
        {/* Top Scrolling Text (Moves Left to Right) */}
        <div className="wwo-scroll-text wwo-scroll-top">
          <div className="wwo-scroll-content">
            <ScrollContent />
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

        {/* Bottom Scrolling Text (Moves Right to Left) */}
        <div className="wwo-scroll-text wwo-scroll-bottom">
          <div className="wwo-scroll-content">
            <ScrollContent />
          </div>
        </div>
      </div>
    </>
  )
}
