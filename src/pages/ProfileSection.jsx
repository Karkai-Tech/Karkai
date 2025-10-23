import React, { useState, useEffect } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

const ProfileSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, teamMembers.length]);

  return (
    <div className="profile-section">
      <div className="profile-stack-window">
        <ScrollStack className="profile-stack-global" useWindowScroll={true} itemDistance={80} itemScale={0.02} itemStackDistance={15} baseScale={0.9}>
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
        .profile-section {
          background-color: #F5EEDC;
          padding: 0 0 10vh 0;
          min-height: 100vh;
        }

        .profile-stack-window { max-width: 1200px; margin: 0 auto; position: relative; height: 100vh; }
        .profile-stack-global { height: 100vh; position: sticky; top: 0; }

        .profile-card {
          background: white;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: center;
          opacity: 1;
          transform: none;
        }

        .profile-section.visible .profile-card {
          opacity: 1;
          transform: translateY(0);
        }
        
        .profile-section.visible {
          opacity: 1;
        }

        .profile-image { flex-shrink: 0; z-index: 2; }

        .profile-image img {
          width: 200px;
          height: 200px;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .profile-content { flex: 1; position: relative; z-index: 2; }
        .profile-side { height: 500px; }
        .profile-stack { height: 100%; background: transparent; }
        .stack-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 28px;
          color: #222;
          text-shadow: 0 4px 0 rgba(0,0,0,0.25);
          margin: 0 0 8px 0;
        }
        .stack-desc { font-family: Manrope, sans-serif; color: #444; font-size: 14px; margin: 0; }

        .profile-greeting {
          font-size: 18px;
          color: #333;
          margin-bottom: 16px;
          font-family: 'Courier New', monospace;
          font-weight: 400;
        }

        .profile-role {
          margin-bottom: 16px;
        }

        .role-line-1 {
          display: block;
          font-size: 64px;
          font-weight: 900;
          color: #222;
          line-height: 1;
          font-family: 'Bricolage Grotesque', sans-serif;
          text-shadow: 0 6px 0 rgba(0,0,0,0.25);
          letter-spacing: -2px;
        }

        .role-line-2 {
          display: block;
          font-size: 64px;
          font-weight: 900;
          color: #222;
          line-height: 1;
          margin-left: 0;
          font-family: 'Bricolage Grotesque', sans-serif;
          text-shadow: 0 6px 0 rgba(0,0,0,0.25);
          letter-spacing: -2px;
        }

        .profile-link {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          color: #333;
          font-size: 20px;
          position: relative;
          font-weight: 500;
        }

        .asterisk {
          color: #ff6b6b;
          font-weight: bold;
          font-size: 22px;
        }

        .profile-link::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          width: 200px;
          height: 2px;
          background: #333;
          transform: translateY(-50%);
        }

        .profile-separator {
          width: 2px;
          height: 40px;
          background: #222;
          margin: 8px 0 24px 0;
        }

        .profile-description {
          font-size: 14px;
          line-height: 1.6;
          color: #333;
          margin-bottom: 32px;
          max-width: 480px;
          font-weight: 400;
          font-family: Manrope, sans-serif;
        }

        .profile-actions {
          display: flex;
          gap: 16px;
        }

        .action-btn {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          border: 1px solid #222;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .action-btn:hover {
          background: #222;
          color: white;
          transform: translateY(-1px);
        }

        .profile-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #222;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .profile-card { grid-template-columns: 1fr; }

          .profile-image img {
            width: 150px;
            height: 150px;
          }

          .role-line-1,
          .role-line-2 {
            font-size: 42px;
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
