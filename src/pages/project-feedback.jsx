import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Website Design & Development',
      items: [
        { name: 'E-commerce Platform', description: 'Modern shopping experience', image: '🛍️' },
        { name: 'Corporate Website', description: 'Professional business presence', image: '💼' },
        { name: 'Portfolio Site', description: 'Creative showcase', image: '🎨' }
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      items: [
        { name: 'Fitness Tracker', description: 'Health & wellness app', image: '💪' },
        { name: 'Food Delivery', description: 'On-demand service', image: '🍕' },
        { name: 'Social Network', description: 'Connect & share', image: '📱' }
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design',
      items: [
        { name: 'Dashboard Design', description: 'Data visualization', image: '📊' },
        { name: 'Mobile UI Kit', description: 'Component library', image: '🎯' },
        { name: 'User Research', description: 'Experience mapping', image: '🔍' }
      ]
    },
    {
      id: 4,
      title: 'Branding & Visual Identity',
      items: [
        { name: 'Logo Design', description: 'Brand mark creation', image: '✨' },
        { name: 'Brand Guidelines', description: 'Visual standards', image: '📋' },
        { name: 'Marketing Collateral', description: 'Print & digital', image: '🎨' }
      ]
    },
    {
      id: 5,
      title: 'Framer / No-Code Solutions',
      items: [
        { name: 'Landing Pages', description: 'Quick launches', image: '🚀' },
        { name: 'Interactive Prototypes', description: 'Design validation', image: '⚡' },
        { name: 'Web Applications', description: 'No-code apps', image: '🔧' }
      ]
    },
    {
      id: 6,
      title: 'Digital Marketing',
      items: [
        { name: 'SEO Optimization', description: 'Search visibility', image: '🔎' },
        { name: 'Social Media', description: 'Brand engagement', image: '📢' },
        { name: 'Content Strategy', description: 'Marketing plans', image: '📝' }
      ]
    }
  ];

  // Love letters content (quote, name, role, avatar)
  const testimonials = [
    {
      quote:
        "The impact has been enormous. Our team writes emails in half the time and gets twice as many replies.",
      name: "Kyle Coleman",
      role: "Formerly CMO at Clari",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      quote:
        "As an SDR, I love that it keeps me honest when I wax poetic. Our response rate is up.",
      name: "Robby G.",
      role: "Sales Development Representative",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
      quote:
        "Easy to set up, incredibly useful insights, and a writing process focused on data over guessing.",
      name: "Sydney Senior",
      role: "Account Executive",
      avatar: "https://i.pravatar.cc/80?img=48",
    },
    {
      quote:
        "Ridiculously smooth delivery and flawless execution. The craft and care show in every detail.",
      name: "Alex Patel",
      role: "Product Lead",
      avatar: "https://i.pravatar.cc/80?img=5",
    },
  ];

  return (
    <div className="app-container">
      {/* Projects Section */}
      <div className="projects-section">
        {/* Header */}
        <div className="header">
          <h1 className="header-title lp-letters" data-text="Empowering Brands">Empowering Brands</h1>
          <h2 className="header-subtitle lp-letters" data-text="Through Digital Innovation">Through Digital Innovation</h2>
        </div>

        {/* Folders Grid */}
        <div className="folders-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="folder-item lp-reveal"
            >
              {/* Folder */}
              <div className="folder-wrapper">
                <svg viewBox="0 0 200 160" className="folder-svg">
                  {/* Folder back part */}
                  <path
                    d="M 10 30 L 10 20 Q 10 10 20 10 L 75 10 Q 80 10 83 15 L 88 23 Q 91 28 96 28 L 180 28 Q 190 28 190 38 L 190 138 Q 190 148 180 148 L 20 148 Q 10 148 10 138 Z"
                    fill="#FF9800"
                    stroke="none"
                  />
                  {/* Folder front part */}
                  <path
                    d="M 15 48 L 15 58 Q 15 63 20 63 L 175 63 Q 185 63 185 73 L 185 153 Q 185 160 175 160 L 25 160 Q 15 160 15 150 Z"
                    fill="#FFC107"
                    stroke="none"
                  />
                </svg>
                {/* hover fan of images like design */}
                <div className="folder-fan">
                  <div className="fan-card fan-1" />
                  <div className="fan-card fan-2" />
                  <div className="fan-card fan-3" />
                </div>
              </div>
              <p className="folder-title">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close"
            >
              <X size={24} color="#000000" />
            </button>
            
            <h3 className="modal-title">
              {selectedProject.title}
            </h3>
            
            <div className="modal-items">
              {selectedProject.items.map((item, idx) => (
                <div 
                  key={idx}
                  className="modal-item"
                >
                  <div className="modal-item-content">
                    <div className="modal-item-icon">{item.image}</div>
                    <div>
                      <h4 className="modal-item-name">
                        {item.name}
                      </h4>
                      <p className="modal-item-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Love Letters Section */}
      <div className="love-letters-section">
        {/* Header */}
        <div className="love-letters-header lp-reveal">
          <h1 className="love-letters-title lp-letters" data-text="Love Letters">Love Letters</h1>
          <p className="love-letters-description">
            We cherish each customer message as a heartfelt love letter your trust inspires our unwavering commitment to excellence and fuels our passion to exceed expectations
          </p>
        </div>

        {/* Marquee Love Cards */}
        <div className="love-marquee lp-reveal" onMouseEnter={(e)=>e.currentTarget.classList.add('paused')} onMouseLeave={(e)=>e.currentTarget.classList.remove('paused')}>
          <div className="love-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className={`love-card love-${(i%4)+1}`}>
                <div className="love-quote">“{t.quote}”</div>
                <div className="love-meta">
                  <img className="love-avatar" src={t.avatar} alt={t.name} />
                  <div className="love-info">
                    <div className="love-name">{t.name}</div>
                    <div className="love-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app-container {
          min-height: 100vh;
          background-color: #F5EEDC;
          color: #222;
          font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        /* Projects Section */
        .projects-section {
          max-width: 1152px;
          margin: 0 auto;
          padding: 64px 32px;
        }

        .header {
          text-align: center;
          margin-bottom: 80px;
        }

        .header-title {
          font-size: 56px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #222;
          letter-spacing: -1px;
        }

        .header-subtitle {
          font-size: 56px;
          font-weight: bold;
          color: #222;
          letter-spacing: -1px;
        }

        .folders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 80px;
          max-width: 1100px;
          margin: 60px auto 0;
          padding: 0 60px;
        }

        .folder-item {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .folder-wrapper {
          position: relative;
          transition: transform 240ms ease, filter 240ms ease;
          width: 100%;
          max-width: 200px;
        }

        .folder-item:hover .folder-wrapper {
          transform: translateY(-8px) scale(1.1);
          filter: drop-shadow(0 22px 36px rgba(0,0,0,0.26));
        }

        .folder-svg {
          width: 100%;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.25));
          transition: filter .25s ease;
        }

        /* Fan images */
        .folder-fan { position: absolute; left: 50%; top: -28px; transform: translateX(-50%) translateY(10px); display: flex; gap: 6px; pointer-events: none; opacity: 0; transition: opacity .35s ease, transform .35s ease; }
        .fan-card { width: 70px; height: 90px; border-radius: 12px; box-shadow: 0 12px 20px rgba(0,0,0,0.18); background-size: cover; background-position: center; }
        .fan-1 { background-image: url('https://images.unsplash.com/photo-1520975922284-9d09c25c2e1a?q=80&w=500'); transform: rotate(-14deg); }
        .fan-2 { background-image: url('https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=500'); transform: translateY(-6px); }
        .fan-3 { background-image: url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=500'); transform: rotate(12deg); }
        .folder-item:hover .folder-fan { opacity: 1; transform: translateX(-50%) translateY(-6px); }

        .folder-title {
          text-align: center;
          margin-top: 18px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          line-height: 1.4;
          max-width: 200px;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 50;
          background-color: rgba(0, 0, 0, 0.75);
        }

        .modal-content {
          border-radius: 24px;
          padding: 40px;
          max-width: 768px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background-color: #ffffff;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          padding: 8px;
          border-radius: 9999px;
          transition: background-color 0.2s;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .modal-close:hover {
          background-color: #f3f4f6;
        }

        .modal-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #222;
        }

        .modal-items {
          display: grid;
          gap: 24px;
        }

        .modal-item {
          padding: 24px;
          border-radius: 16px;
          transition: box-shadow 0.2s;
          background-color: #F9F5F0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .modal-item:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .modal-item-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .modal-item-icon {
          font-size: 48px;
        }

        .modal-item-name {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
          color: #222;
        }

        .modal-item-description {
          font-size: 16px;
          color: #666666;
        }

        /* Love Letters Section */
        .love-letters-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 32px 180px;
        }

        .love-letters-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .love-letters-title {
          font-size: 72px;
          font-weight: 700;
          margin-bottom: 40px;
          color: #222;
          letter-spacing: -1.5px;
        }

        .love-letters-description {
          font-size: 18px;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.7;
          color: #222;
          font-weight: 400;
        }

        /* Love marquee */
        /* Reveal utility for this page */
        .lp-reveal { opacity: 0; transform: translateY(26px); }
        .lp-reveal.is-visible { opacity: 1; transform: translateY(0); transition: transform 900ms ease, opacity 900ms ease; }

        /* Love marquee */
        .love-marquee { position: relative; overflow: hidden; }
        /* Edge fade overlays (do not clip cards) */
        .love-marquee::before,
        .love-marquee::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          pointer-events: none;
          z-index: 2;
        }
        .love-marquee::before {
          left: 0;
          background: linear-gradient(90deg, rgba(245,238,220,1) 0%, rgba(245,238,220,0.9) 35%, rgba(245,238,220,0.5) 60%, rgba(245,238,220,0) 100%);
        }
        .love-marquee::after {
          right: 0;
          background: linear-gradient(-90deg, rgba(245,238,220,1) 0%, rgba(245,238,220,0.9) 35%, rgba(245,238,220,0.5) 60%, rgba(245,238,220,0) 100%);
        }
        .love-marquee.paused .love-track { animation-play-state: paused; }
        .love-track { display: flex; gap: 32px; will-change: transform; animation: scrollX 26s linear infinite; }
        @keyframes scrollX { from { transform: translateX(0) } to { transform: translateX(-50%) } }

        .love-card {
          min-width: 560px;
          background: #fff;
          border-radius: 28px;
          padding: 56px 40px;
          box-shadow: 0 22px 48px rgba(0,0,0,0.18);
          transform: rotate(-2deg);
        }
        .love-1 { background: #CDB4FF; }
        .love-2 { background: #FDC5F5; transform: rotate(3deg); }
        .love-3 { background: #BDE0FE; transform: rotate(-4deg); }
        .love-4 { background: #C7F9CC; transform: rotate(2deg); }
        .love-quote { font-size: 30px; line-height: 1.5; color: #111; letter-spacing: -0.2px; margin-bottom: 28px; }
        .love-meta { display: flex; align-items: center; gap: 14px; }
        .love-avatar { width: 48px; height: 48px; border-radius: 9999px; box-shadow: 0 6px 12px rgba(0,0,0,0.18); object-fit: cover; }
        .love-name { font-weight: 700; color: #111; }
        .love-role { color: #222; opacity: .9; font-weight: 500; }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .love-card { min-width: 480px; padding: 46px 34px; }
          .love-quote { font-size: 26px; line-height: 1.45; }
        }

        @media (max-width: 768px) {
          .folders-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            max-width: 400px;
          }

          .folder-wrapper {
            max-width: 120px;
          }

          .header-title,
          .header-subtitle {
            font-size: 32px;
          }

          .love-letters-title {
            font-size: 48px;
          }

          .love-card { min-width: 340px; padding: 32px; }
          .love-quote { font-size: 20px; line-height: 1.5; }
        }

        @media (max-width: 480px) {
          .folders-grid {
            grid-template-columns: 1fr;
            max-width: 160px;
          }

          .folder-wrapper {
            max-width: 100px;
          }

          .folder-title {
            font-size: 12px;
          }

          .love-letters-section {
            padding: 80px 20px 120px;
          }

          .love-track { gap: 16px; }
        }
      `}</style>
    </div>
  );
};

export default App;