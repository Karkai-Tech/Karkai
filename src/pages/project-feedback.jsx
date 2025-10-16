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

  return (
    <div className="app-container">
      {/* Projects Section */}
      <div className="projects-section">
        {/* Header */}
        <div className="header">
          <h1 className="header-title">
            Empowering Brands
          </h1>
          <h2 className="header-subtitle">
            Through Digital Innovation
          </h2>
        </div>

        {/* Folders Grid */}
        <div className="folders-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="folder-item"
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
        <div className="love-letters-header">
          <h1 className="love-letters-title">
            Love Letters
          </h1>
          <p className="love-letters-description">
            We cherish each customer message as a heartfelt love letter your trust inspires our unwavering commitment to excellence and fuels our passion to exceed expectations
          </p>
        </div>

        {/* Sticky Notes */}
        <div className="sticky-notes-container">
          {/* Note 1 - Pink/Red */}
          <div className="sticky-note note-1">
            <p className="sticky-note-text">
              Fast delivery, flawless execution. Couldn't be happier!
            </p>
          </div>

          {/* Note 2 - Blue */}
          <div className="sticky-note note-2">
            <p className="sticky-note-text">
              Fast delivery, flawless execution. Couldn't be happier!
            </p>
          </div>

          {/* Note 3 - Pink */}
          <div className="sticky-note note-3">
            <p className="sticky-note-text">
              Fast delivery, flawless execution. Couldn't be happier!
            </p>
          </div>

          {/* Note 4 - Yellow */}
          <div className="sticky-note note-4">
            <p className="sticky-note-text">
              Fast delivery, flawless execution. Couldn't be happier!
            </p>
          </div>

          {/* Note 5 - Mint/Green */}
          <div className="sticky-note note-5">
            <p className="sticky-note-text">
              Fast delivery, flawless execution. Couldn't be happier!
            </p>
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
          transition: transform 0.3s;
          width: 100%;
          max-width: 200px;
        }

        .folder-item:hover .folder-wrapper {
          transform: scale(1.1);
        }

        .folder-svg {
          width: 100%;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.25));
        }

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

        .sticky-notes-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
          margin-top: 60px;
        }

        .sticky-note {
          position: absolute;
          width: 240px;
          height: 240px;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .sticky-note-text {
          font-family: 'Comic Sans MS', 'Brush Script MT', cursive, sans-serif;
          font-size: 18px;
          line-height: 1.5;
          color: #000000;
          font-style: italic;
          font-weight: 500;
        }

        .note-1 {
          background-color: #FF9AA2;
          transform: rotate(-8deg);
          left: 5%;
          top: 50%;
          margin-top: -120px;
          animation: float 6s ease-in-out infinite;
        }

        .note-2 {
          background-color: #A0C4FF;
          transform: rotate(5deg);
          left: 20%;
          top: 50%;
          margin-top: -120px;
          animation: float 6s ease-in-out 1.2s infinite;
        }

        .note-3 {
          background-color: #FFB7CE;
          transform: rotate(-4deg);
          left: 50%;
          margin-left: -120px;
          top: 50%;
          margin-top: -120px;
          animation: float 6s ease-in-out 2.4s infinite;
          z-index: 2;
        }

        .note-4 {
          background-color: #FFEB99;
          transform: rotate(6deg);
          right: 20%;
          top: 50%;
          margin-top: -120px;
          animation: float 6s ease-in-out 3.6s infinite;
        }

        .note-5 {
          background-color: #A0E8AF;
          transform: rotate(-5deg);
          right: 5%;
          top: 50%;
          margin-top: -120px;
          animation: float 6s ease-in-out 4.8s infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-15px) rotate(var(--rotation, 0deg));
          }
        }

        .note-1 {
          --rotation: -8deg;
        }
        
        .note-2 {
          --rotation: 5deg;
        }
        
        .note-3 {
          --rotation: -4deg;
        }
        
        .note-4 {
          --rotation: 6deg;
        }
        
        .note-5 {
          --rotation: -5deg;
        }
        
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
          .sticky-notes-container {
            height: 400px;
          }

          .sticky-note {
            width: 200px;
            height: 200px;
            padding: 25px;
          }

          .sticky-note-text {
            font-size: 16px;
          }
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

          .sticky-notes-container {
            height: 500px;
          }

          .sticky-note {
            width: 160px;
            height: 160px;
            padding: 20px;
          }

          .sticky-note-text {
            font-size: 14px;
          }

          .note-1 {
            left: 2%;
          }

          .note-2 {
            left: 15%;
            top: 30%;
          }

          .note-3 {
            left: 50%;
            margin-left: -80px;
            top: 45%;
          }

          .note-4 {
            right: 15%;
            top: 30%;
          }

          .note-5 {
            right: 2%;
          }
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

          .sticky-notes-container {
            height: 600px;
          }

          .note-1,
          .note-2,
          .note-3,
          .note-4,
          .note-5 {
            position: relative;
            left: auto;
            right: auto;
            top: auto;
            margin: 20px auto;
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default App;