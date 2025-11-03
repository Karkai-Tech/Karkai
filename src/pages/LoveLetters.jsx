// This code is the same as the last response, confirmed to meet the free-floating requirement.
import React, { useRef, useEffect, useState } from 'react';

const LoveLetters = () => {
  // --- Testimonial Data (Expanded to ~20) ---
  const allTestimonials = [
    {
      quote: "The impact of Lavender has been enormous. Our sellers are writing emails in half the time and getting twice as many replies.",
      name: "Kyle Coleman",
      role: "Formerly CMO at Clari",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      quote: "As an SDR, I like that it keeps me honest when I wax poetic. And it upped our team's response rate.",
      name: "Robby G.",
      role: "Sales Development Representative",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
      quote: "Easy to set up, incredibly useful insights, makes the cold email writing process much more focused on data and results than guessing.",
      name: "Sydney Senior",
      role: "Account Executive at Deer",
      avatar: "https://i.pravatar.cc/80?img=48",
    },
    {
      quote: "Lavender helps us edit and generate our sales copy to help pipeline velocity. More meetings, more opportunities, more closed won!",
      name: "Erin Holtz",
      role: "Senior Account Executive @ Paro.ai",
      avatar: "https://i.pravatar.cc/80?img=6",
    },
    {
      quote: "Lavender brings in more meetings for me as a BDR and helps my team. Makes me look super cool in front of my boss when I get email replies.",
      name: "Heidi B.",
      role: "Director of Business Development",
      avatar: "https://i.pravatar.cc/80?img=18",
    },
    {
      quote: "Better outbounding, confidence in email structure and content, and better reply rates.",
      name: "Dimitra Spiliotopoulou",
      role: "Head of Sales at Indico Labs",
      avatar: "https://i.pravatar.cc/80?img=28",
    },
    {
      quote: "Ridiculously smooth delivery and flawless execution. The craft and care show in every detail.",
      name: "Alex Patel",
      role: "Product Lead",
      avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
      quote: "Our team saves hours every week. The insights are incredibly actionable and easy to apply.",
      name: "Jane Smith",
      role: "Sales Manager",
      avatar: "https://i.pravatar.cc/80?img=10",
    },
    {
      quote: "The personalized feedback completely changed how I approach cold outreach. Response rates are up 25%.",
      name: "Mark O'Connell",
      role: "Senior SDR",
      avatar: "https://i.pravatar.cc/80?img=20",
    },
    {
      quote: "It's like having a coach reviewing every email before I hit send. Essential tool for modern sales.",
      name: "Elena Rodriguez",
      role: "Account Executive",
      avatar: "https://i.pravatar.cc/80?img=30",
    },
    {
      quote: "We've seen a significant increase in email engagement since implementing Lavender. Highly recommend!",
      name: "Chris Green",
      role: "VP of Sales",
      avatar: "https://i.pravatar.cc/80?img=40",
    },
    {
      quote: "Finally, an AI tool that actually understands sales communication. Game changer for productivity.",
      name: "Olivia White",
      role: "Sales Director",
      avatar: "https://i.pravatar.cc/80?img=50",
    },
    {
      quote: "The analytics are fantastic, helping us fine-tune our messaging for maximum impact.",
      name: "David Kim",
      role: "Growth Marketer",
      avatar: "https://i.pravatar.cc/80?img=60",
    },
    {
      quote: "Our sales reps love it! It's intuitive, saves time, and most importantly, gets results.",
      name: "Sophia Chen",
      role: "Account Manager",
      avatar: "https://i.pravatar.cc/80?img=70",
    },
    {
      quote: "Integrating Lavender was seamless, and the ROI was almost immediate. A must-have for any sales team.",
      name: "Daniel Lee",
      role: "Founder & CEO",
      avatar: "https://i.pravatar.cc/80?img=80",
    },
    {
      quote: "The suggestions are always spot-on. It's like having a senior AE always looking over your shoulder.",
      name: "Emily Clark",
      role: "Sales Development Rep",
      avatar: "https://i.pravatar.cc/80?img=90",
    },
    {
      quote: "Transforms our cold outreach from a guessing game to a data-driven strategy. Impressive tool!",
      name: "Michael Brown",
      role: "Head of Marketing",
      avatar: "https://i.pravatar.cc/80?img=95",
    },
    {
      quote: "Unlocks new levels of efficiency and effectiveness in our email campaigns. Couldn't do without it now.",
      name: "Jessica Taylor",
      role: "Senior AE",
      avatar: "https://i.pravatar.cc/80?img=55",
    },
    {
      quote: "The training resources are excellent, and the tool itself is incredibly user-friendly. Top-notch product.",
      name: "Ryan Wilson",
      role: "Sales Enablement Specialist",
      avatar: "https://i.pravatar.cc/80?img=65",
    },
    {
      quote: "Boosted our team's confidence and skill in writing impactful sales emails. The results speak for themselves.",
      name: "Laura Martinez",
      role: "Regional Sales Manager",
      avatar: "https://i.pravatar.cc/80?img=75",
    },
  ];

  // --- Drag-to-Scroll Logic ---
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Use clientX for position relative to the visible window
    setStartX(e.clientX);
    setScrollLeft(trackRef.current.scrollLeft);
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handleMouseLeave = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // --- Intersection Observer Logic for Entrance Animation ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Use null for root to observe relative to the viewport
        root: null, 
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the card is visible
      }
    );

    // Delay setting up the observer slightly to ensure DOM is ready
    const timer = setTimeout(() => {
        const cardWrappers = document.querySelectorAll('.love-card-wrapper');
        cardWrappers.forEach((wrapper) => {
            observer.observe(wrapper);
        });
    }, 100);


    return () => {
        clearTimeout(timer);
        observer.disconnect();
    };
  }, []); 

  return (
    <div className="love-letters-page">
      {/* Love Letters Section (Header is still centered) */}
      <div className="love-letters-header-section">
        <div className="love-letters-header">
          <h1 className="love-letters-title" data-text="Love Letters">Love Letters</h1>
          <p className="love-letters-description">
            We cherish each customer message as a heartfelt love letter your trust inspires our unwavering commitment to excellence and fuels our passion to exceed expectations
          </p>
        </div>
      </div>
      
      {/* Marquee Love Cards - FREE-FLOATING, FULL-WIDTH, SCROLLABLE */}
      <div className="love-marquee-container">
        <div 
          className="love-track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {allTestimonials.map((t, i) => (
            <div key={i} className="love-card-wrapper">
              <div className={`love-card love-${(i % 4) + 1}`}>
                <div className="love-quote">"{t.quote}"</div>
                <div className="love-meta">
                  <img className="love-avatar" src={t.avatar} alt={t.name} />
                  <div className="love-info">
                    <div className="love-name">{t.name}</div>
                    <div className="love-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .love-letters-page {
          min-height: 100vh;
          background-color: #FFF9EA;
          color: #222;
          font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          /* Critical for allowing children to use 100vw without triggering page scrollbars */
          overflow-x: hidden; 
        }

        /* --- Header Styles (Max-width retained for centering text) --- */
        .love-letters-header-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 32px 100px;
        }
        .love-letters-header { text-align: center; }
        .love-letters-title { font-size: 72px; font-weight: 700; margin-bottom: 40px; color: #222; letter-spacing: -1.5px; text-shadow: 0 3px 2px rgba(0,0,0,0.45); }
        .love-letters-description { font-size: 18px; max-width: 750px; margin: 0 auto; line-height: 1.7; color: #222; font-weight: 400; }

        /* --- Marquee Container for Full Width (THE KEY TO FREE-FLOATING) --- */
        .love-marquee-container {
            width: 100vw; /* Take the full viewport width */
            /* This breaks the container out of any parent max-width and aligns it to the edge */
            margin-left: calc(50% - 50vw); 
            padding-bottom: 120px;
        }

        /* --- Scrollable Track --- */
        .love-track { 
            display: flex; 
            overflow-x: scroll; 
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch; 
            cursor: grab; 
            
            /* Crucial: Remove internal padding to let cards touch the edge */
            padding-left: 0; 
            padding-right: 0;
            padding:50px 0;
            
            /* Hide scrollbar */
            scrollbar-width: none;
        }
        .love-track::-webkit-scrollbar { display: none; }
        
        /* --- Card Wrapper & Entrance Animation --- */
        .love-card-wrapper {
            position: relative;
            flex-shrink: 0;
            
            /* Initial animation state */
            opacity: 0;
            transform: scale(0.95) translateY(30px);
            transition: opacity 800ms ease-out, transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.27);
            
            /* Overlap spacing */
            margin-right: -50px; 
        }
        
        /* Pushes the FIRST card slightly off-screen to start the "flow" */
        .love-card-wrapper:first-child {
            margin-left: -50px; 
        }

        /* Final state when visible (triggered by Intersection Observer) */
        .love-card-wrapper.is-visible {
            opacity: 1;
            transform: scale(1) translateY(0);
        }

        /* Z-index for smooth overlap appearance */
        .love-card-wrapper:nth-child(4n + 1) .love-card { z-index: 4; } 
        .love-card-wrapper:nth-child(4n + 2) .love-card { z-index: 3; } 
        .love-card-wrapper:nth-child(4n + 3) .love-card { z-index: 2; }
        .love-card-wrapper:nth-child(4n + 0) .love-card { z-index: 1; }

        /* Ensure the last card has space to scroll fully into view */
        .love-card-wrapper:last-child {
            margin-right: 32px; 
        }

        /* --- Individual Card Styles (Organic Shape, Hover) --- */
        .love-card {
          width: 380px; 
          height: 380px; 
          padding: 40px 32px; 
          box-shadow: 0 22px 48px rgba(0,0,0,0.18);
          cursor: pointer;
          display: flex; 
          flex-direction: column;
          justify-content: space-between;
          transition: box-shadow 0.3s ease, transform 0.3s ease; 
          
          /* Organic Border Radius */
          border-top-left-radius: 40px 60px;
          border-top-right-radius: 50px 30px;
          border-bottom-right-radius: 60px 40px;
          border-bottom-left-radius: 30px 50px;
        }
        
        /* Base rotation on the card itself */
        .love-1 { background: #CDB4FF; transform: rotate(-3deg); }
        .love-2 { background: #FDC5F5; transform: rotate(1deg); }
        .love-3 { background: #C7F9CC; transform: rotate(-2deg); }
        .love-4 { background: #BDE0FE; transform: rotate(3deg); }
        
        /* Hover Effect: Lift and straighten */
        .love-card:hover { 
            transform: rotate(0deg) scale(1.05) translateY(-10px); 
            box-shadow: 0 30px 60px rgba(0,0,0,0.25);
            z-index: 100 !important; 
        }
        
        /* --- Inner Card Content (Font/Meta styles) --- */
        .love-quote { font-size: 24px; line-height: 1.4; color: #111; letter-spacing: -0.2px; margin-bottom: 20px; }
        .love-meta { display: flex; align-items: center; gap: 14px; margin-top: auto; }
        .love-avatar { width: 48px; height: 48px; border-radius: 9999px; box-shadow: 0 6px 12px rgba(0,0,0,0.18); object-fit: cover; }
        .love-name { font-weight: 700; color: #111; }
        .love-role { color: #222; opacity: .9; font-weight: 500; }

        /* --- Responsive Adjustments --- */
        @media (max-width: 1024px) {
          .love-card-wrapper { margin-right: -40px; }
          .love-card { width: 320px; height: 320px; padding: 30px 25px; }
          .love-quote { font-size: 20px; line-height: 1.35; }
        }

        @media (max-width: 768px) {
          .love-letters-title { font-size: 48px; }
          .love-letters-header-section { padding: 80px 20px 60px; }
          .love-card-wrapper { margin-right: -30px; }
          .love-card-wrapper:first-child { margin-left: -30px; }
          .love-card-wrapper:last-child { margin-right: 20px; }
          .love-card { width: 280px; height: 280px; padding: 25px 20px; }
          .love-quote { font-size: 18px; line-height: 1.4; }
        }
      `}</style>
    </div>
  );
};

export default LoveLetters;