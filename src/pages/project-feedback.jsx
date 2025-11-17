import React, { useState, useEffect } from 'react';
import { X, Globe, Smartphone, TrendingUp } from 'lucide-react';

// --- Constants ---
const PRIMARY_COLOR_LIGHT = '#9cf600ff';
const PRIMARY_COLOR_DARK = '#22c55e';
const ACCENT_COLOR_DARK = '#171717';
const CARD_BG = '#ffffff';

// --- Project Data (Streamlined to 3 categories) ---
const projects = [
    {
        id: 1,
        title: 'Full Stack Development',
        icon: <Globe size={28} color={PRIMARY_COLOR_DARK} />,
        tagline: 'World-class web applications from front to back-end.',
        items: [
            { name: 'E-commerce Platforms', description: 'Scalable solutions for retail and wholesale.', category: 'Web' },
            { name: 'SaaS & Custom Dashboards', description: 'Bespoke tools for business operations.', category: 'Web' },
            { name: 'CMS & Website Refactoring', description: 'Modernizing existing digital infrastructure.', category: 'Web' },
        ]
    },
    {
        id: 2,
        title: 'Mobile App Development',
        icon: <Smartphone size={28} color={PRIMARY_COLOR_DARK} />,
        tagline: 'Native and cross-platform apps for iOS and Android.',
        items: [
            { name: 'Consumer Lifestyle Apps', description: 'Health, wellness, and social networking.', category: 'Mobile' },
            { name: 'Enterprise & Utility Apps', description: 'Tools for internal processes and data collection.', category: 'Mobile' },
            { name: 'Prototyping & MVP Launch', description: 'Fast execution for new business ideas.', category: 'Mobile' },
        ]
    },
    {
        id: 3,
        title: 'Digital Marketing & SEO',
        icon: <TrendingUp size={28} color={PRIMARY_COLOR_DARK} />,
        tagline: 'Data-driven strategies for measurable online growth.',
        items: [
            { name: 'Local SEO & UX Optimization', description: 'Targeting specific markets in Tamil Nadu.', category: 'Marketing' },
            { name: 'Conversion Rate Optimization (CRO)', description: 'Turning visitors into paying customers.', category: 'Marketing' },
            { name: 'Content Strategy & Campaigns', description: 'Engaging content planning and execution.', category: 'Marketing' },
        ]
    },
];

// --- Sub-Component: Project Card ---
const ProjectCard = ({ project, onClick }) => {
    return (
        <div 
            className="project-card-outer group"
            onClick={() => onClick(project)}
        >
            <div className="project-card">
                {/* Fixed Content (Always Visible) */}
                <div className="card-header">
                    {project.icon}
                    <h3 className="card-title">{project.title}</h3>
                </div>
                <p className="card-tagline">{project.tagline}</p>
                <div className="card-cta">Explore Projects →</div>

                {/* Hover Content (Mimicking 4th image pop-up) */}
                <div className="card-hover-details">
                    <div className="details-header">{project.title}</div>
                    <ul className="details-list">
                        {project.items.map((item, index) => (
                            <li key={index} className="details-item">
                                <span className="details-item-name">{item.name}</span>
                                <span className="details-item-category">{item.category}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Placeholder for a potential modal/alert for "Explore Projects" CTA
    const handleProjectClick = (project) => {
        // You can use this to show a detailed modal if needed, 
        // but for now, we'll just show the console log.
        // setSelectedProject(project); 
        console.log('Project card clicked:', project.title);
        // We will use the modal for the overall app structure, even if not strictly needed now.
        setSelectedProject(project);
    };

    return (
        <div className="app-container">
            <div className="projects-section">
                
                {/* Header Section */}
                <div className="header">
                    <h1 className="header-title">Our Capabilities</h1>
                    <h2 className="header-subtitle">Empowering Brands Through Digital Innovation</h2>
                </div>

                {/* Cards Grid */}
                <div className="cards-grid">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal (For the "Explore Projects" action) */}
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
                            <X size={24} color={ACCENT_COLOR_DARK} />
                        </button>
                        
                        <h3 className="modal-title">
                            Projects for: {selectedProject.title}
                        </h3>
                        
                        <div className="modal-items-grid">
                            {selectedProject.items.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="modal-item"
                                >
                                    <div className="modal-item-icon-wrapper">
                                        <Globe size={24} color={PRIMARY_COLOR_DARK} />
                                    </div>
                                    <h4 className="modal-item-name">
                                        {item.name}
                                    </h4>
                                    <p className="modal-item-description">
                                        {item.description}
                                    </p>
                                    <span className="modal-item-category-tag">{item.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
     

            <style>{`
                /* Global Reset and Font */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #FFF9EA; /* White background as requested */
                    color: ${ACCENT_COLOR_DARK};
                }

                .app-container {
                    min-height: 100vh;
                }

                /* Section Layout */
                .projects-section {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 100px 32px;
                }

                .header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .header-title {
                    font-size: 48px;
                    font-weight: 800;
                    margin-bottom: 10px;
                    color: #000000;
                    letter-spacing: -1px;
                }

                .header-subtitle {
                    font-size: 24px;
                    font-weight: 500;
                    color: #4b5563;
                }

                /* Cards Grid */
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                /* --- Project Card Styles (Mimicking Reference Images) --- */
                .project-card-outer {
                    cursor: pointer;
                    position: relative;
                    perspective: 1000px; /* For 3D transform */
                }

                .project-card {
                    background-color: #ffffffff; /* Light gray to stand out slightly from white body */
                    border-radius: 12px;
                    padding: 30px;
                    height: 280px; /* Fixed height for uniformity */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
                    z-index: 10;
                }
                
                /* Hover effect on the card */
                .project-card-outer:hover .project-card {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                    border-color: ${PRIMARY_COLOR_LIGHT};
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 10px;
                }

                .card-title {
                    font-size: 22px;
                    font-weight: 700;
                    color: ${ACCENT_COLOR_DARK};
                }

                .card-tagline {
                    font-size: 16px;
                    color: #6b7280;
                    margin-bottom: 20px;
                }
                
                .card-cta {
                    font-size: 14px;
                    font-weight: 600;
                    color: ${PRIMARY_COLOR_DARK};
                    align-self: flex-start;
                    padding: 8px 15px;
                    border-radius: 8px;
                    background-color: ${PRIMARY_COLOR_LIGHT};
                    transition: background-color 0.2s;
                }

                .project-card-outer:hover .card-cta {
                    background-color: ${PRIMARY_COLOR_DARK};
                    color: ${CARD_BG};
                }

                /* Hover Detail Pop-up (Mimics the 4th Image) */
                .card-hover-details {
                    position: absolute;
                    inset: 0;
                    background-color: ${CARD_BG};
                    padding: 30px;
                    border-radius: 12px;
                    
                    /* Initial hidden state, positioned below */
                    transform: translateY(100%);
                    opacity: 0;
                    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s ease-out;
                    z-index: 20;
                    
                    /* Box shadow to match the floating look */
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    
                    display: flex;
                    flex-direction: column;
                }

                /* Visible state on hover */
                .project-card-outer:hover .card-hover-details {
                    transform: translateY(0);
                    opacity: 1;
                }

                .details-header {
                    font-size: 20px;
                    font-weight: 700;
                    color: ${ACCENT_COLOR_DARK};
                    margin-bottom: 20px;
                    border-bottom: 2px solid ${PRIMARY_COLOR_LIGHT};
                    padding-bottom: 10px;
                }
                
                .details-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                
                .details-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 0;
                    border-bottom: 1px dotted #e5e7eb;
                }

                .details-item-name {
                    font-weight: 600;
                    font-size: 15px;
                    color: ${ACCENT_COLOR_DARK};
                }

                .details-item-category {
                    font-size: 12px;
                    font-weight: 500;
                    color: #6b7280;
                    padding: 4px 8px;
                    border-radius: 4px;
                    background-color: #f3f4f6;
                }


                /* --- Modal Styles (Used for detailed view/click action) --- */
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
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    background-color: ${CARD_BG};
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
                    font-size: 32px;
                    font-weight: 800;
                    margin-bottom: 40px;
                    color: ${ACCENT_COLOR_DARK};
                }

                .modal-items-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 24px;
                }

                .modal-item {
                    padding: 24px;
                    border-radius: 12px;
                    background-color: #f7f7f7;
                    transition: transform 0.2s, box-shadow 0.2s;
                    border: 1px solid #e5e7eb;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                .modal-item:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(34, 197, 94, 0.1);
                    border-color: ${PRIMARY_COLOR_DARK};
                }

                .modal-item-icon-wrapper {
                    background-color: ${PRIMARY_COLOR_LIGHT};
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                }

                .modal-item-name {
                    font-size: 18px;
                    font-weight: 700;
                    color: ${ACCENT_COLOR_DARK};
                }

                .modal-item-description {
                    font-size: 14px;
                    color: #666666;
                }
                
                .modal-item-category-tag {
                    align-self: flex-start;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border-radius: 4px;
                    background-color: #e5e7eb;
                    color: #4b5563;
                    margin-top: auto; /* Push to bottom */
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }

                /* Responsive adjustments */
                @media (max-width: 1024px) {
                    .cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 768px) {
                    .cards-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .projects-section {
                        padding: 60px 20px;
                    }
                    .header-title {
                        font-size: 36px;
                    }
                    .header-subtitle {
                        font-size: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .modal-content {
                        padding: 20px;
                        border-radius: 16px;
                    }
                    .modal-items-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default App;