import React, { useState, useEffect, useRef } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CREATIVE WEBFLOW DEVELOPER",
      description: "I create immersive, high-performing Webflow websites tailored for startups, agencies, and in-house teams that need speed, scalability, and full control.",
      avatar: "https://i.pravatar.cc/200?img=1",
      linkedin: "#",
      portfolio: "#"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "UI/UX DESIGNER",
      description: "I craft beautiful, intuitive user experiences that drive engagement and conversion. Specializing in mobile-first design and accessibility.",
      avatar: "https://i.pravatar.cc/200?img=2",
      linkedin: "#",
      portfolio: "#"
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "FULL-STACK DEVELOPER",
      description: "Building scalable web applications with modern technologies. Passionate about clean code and performance optimization.",
      avatar: "https://i.pravatar.cc/200?img=3",
      linkedin: "#",
      portfolio: "#"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "DIGITAL MARKETING SPECIALIST",
      description: "Driving growth through data-driven marketing strategies. Expert in SEO, social media, and conversion optimization.",
      avatar: "https://i.pravatar.cc/200?img=4",
      linkedin: "#",
      portfolio: "#"
    },
    {
      id: 5,
      name: "David Kim",
      role: "PRODUCT MANAGER",
      description: "Leading product strategy and development. Focused on user research, feature prioritization, and cross-functional collaboration.",
      avatar: "https://i.pravatar.cc/200?img=5",
      linkedin: "#",
      portfolio: "#"
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "BRAND STRATEGIST",
      description: "Creating compelling brand identities and visual systems. Helping businesses tell their story through strategic design.",
      avatar: "https://i.pravatar.cc/200?img=6",
      linkedin: "#",
      portfolio: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.profile-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="profile-section">
      <div className="profile-stack-window">
        <ScrollStack 
          className="profile-stack-global" 
          useWindowScroll={true} 
          itemDistance={80} 
          itemScale={0.02} 
          itemStackDistance={15} 
          baseScale={0.9} 
        >
          {teamMembers.map((member, idx) => (
            <ScrollStackItem key={member.id}>
              <div className="profile-card">
                <div className="profile-image">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <div className="profile-content">
                  <div className="profile-greeting">Hi, I'm {member.name}</div>
                  <div className="profile-role">
                    <span className="role-line-1">{member.role.split(' ')[0]}</span>
                    <span className="role-line-2">{member.role.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="profile-link">
                    <span className="asterisk">*</span>
                    <span>See my work in my Portfolio</span>
                  </div>
                  <div className="profile-separator"></div>
                  <div className="profile-description">{member.description}</div>
                  <div className="profile-actions">
                    <button className="action-btn linkedin-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="action-btn portfolio-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      <style>{`
        :root {
          --profile-bg-color: #F5EEDC;
          --profile-card-bg: white;
          --profile-text-color: #333;
          --profile-title-color: #222;
          --profile-accent-color: #ff6b6b;
        }

        .profile-section {
          background-color: var(--profile-bg-color);
          padding: 0;
          height: ${teamMembers.length * 100}vh; // 600vh total height creates the scroll area
          position: relative;
          /* Ensure proper stacking context */
          z-index: 1;
        }

        .profile-stack-window { 
          width: 100%; 
          margin: 0 auto; 
          position: sticky; 
          top: 0; // Ensures the window is fixed at the top of the viewport
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Improved stacking and positioning */
          z-index: 2;
          isolation: isolate;
        }
        
        .profile-stack-global { 
          height: 100vh; 
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          /* Enhanced positioning for smooth animations */
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .profile-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          display: flex;
          gap: 40px;
          align-items: flex-start;
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          isolation: isolate;
          box-sizing: border-box;
        }

        .profile-image { 
          flex-shrink: 0; 
        }

        .profile-image img {
          width: 180px;
          height: 180px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .profile-content { 
          flex: 1; 
          position: relative;
          z-index: 1;
        }

        .profile-greeting {
          font-size: 16px;
          color: var(--profile-text-color);
          margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }

        .profile-role {
          margin-bottom: 16px;
        }

        .role-line-1 {
          display: block;
          font-size: 48px;
          font-weight: 800;
          color: var(--profile-title-color);
          line-height: 1.1;
          font-family: 'Inter', sans-serif;
          letter-spacing: -1px;
        }

        .role-line-2 {
          display: block;
          font-size: 48px;
          font-weight: 800;
          color: var(--profile-title-color);
          line-height: 1.1;
          margin-left: 0;
          font-family: 'Inter', sans-serif;
          letter-spacing: -1px;
        }

        .profile-link {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          color: var(--profile-text-color);
          font-size: 16px;
          position: relative;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }

        .asterisk {
          color: var(--profile-accent-color);
          font-weight: bold;
          font-size: 18px;
        }

        .profile-link::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          width: 15px;
          height: 1px;
          background: var(--profile-text-color);
          transform: translateY(-50%);
        }

        .profile-separator {
          width: 1px;
          height: 50px;
          background: var(--profile-title-color);
          margin: 8px 0 20px 0;
        }

        .profile-description {
          font-size: 16px;
          line-height: 1.6;
          color: var(--profile-text-color);
          margin-bottom: 24px;
          max-width: 480px;
          font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        .profile-actions {
          display: flex;
          gap: 16px;
        }

        .action-btn {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          border: 1px solid #ddd;
          background: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .action-btn:hover {
          background: var(--profile-title-color);
          color: white;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .profile-card {
            flex-direction: column;
            text-align: center;
            padding: 28px;
          }

          .profile-image img {
            width: 140px;
            height: 140px;
          }

          .role-line-1,
          .role-line-2 {
            font-size: 36px;
          }

          .role-line-2 {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileSection;