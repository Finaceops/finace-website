import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lord-icon-element';
import './UsefulLinks.scss';
import ReactGA from 'react-ga4';

const UsefulLinks = () => {
    const navigate = useNavigate();

    const trackEvent = (category, action, label) => {
        ReactGA.event({
            category,
            action,
            label,
        });
    };

    const scrollToSection = (sectionId, label) => {
        trackEvent("Navigation", "Scroll to Section", label);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    };

    return (
        <div className="useful-section">
            <div className="contact-section" aria-labelledby="contact-section">
                <div className="contact" aria-labelledby="find-us">
                    <lord-icon
                        src="https://cdn.lordicon.com/tdtlrbly.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#7dac3e"
                        style={{ width: '50px', height: '50px' }}
                        aria-label="Location icon"
                    ></lord-icon>
                    <div className="text">
                        <h4 id="find-us" className="contact-heading">Find Us</h4>
                        <p>Bangalore, India</p>
                    </div>
                </div>
                <div className="contact" aria-labelledby="mail-us">
                    <lord-icon
                        src="https://cdn.lordicon.com/tdhnvcoq.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#133453,secondary:#7dac3e"
                        style={{ width: '50px', height: '50px' }}
                        aria-label="Email icon"
                    ></lord-icon>
                    <div className="text">
                        <h4 id="mail-us" className="contact-heading">Mail Us</h4>
                        <p>finace.ops@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="useful-links">
                <div id="page9-about" className="Finace">
                    <h1>Finace</h1> is a revolutionary platform that empowers employees to access their earned wages in real-time and take control of their finances. Employers can benefit from heightened employee engagement, productivity, and an analytical dashboard providing real-time data. Join Finace for financial wellness like never before.
                </div>
                <div className="right">
                    <h4>Useful Links</h4>
                    <hr style={{ borderWidth: '2px' }} />
                    <nav aria-label="Useful links navigation">
                        <ul className="links-list">
                            <li>
                                <a
                                    onClick={() => scrollToSection('page1', 'Home')}
                                    className="list-item"
                                    aria-label="Go to Home section"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToSection('page2', 'Services')}
                                    className="list-item"
                                    aria-label="Go to Services section"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToSection('page8', 'Contact Us')}
                                    className="list-item"
                                    aria-label="Go to Contact Us section"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="list-item"
                                    aria-label="Go to Privacy Policy"
                                >
                                    <Link
                                        to="/privacy-policy"
                                        aria-label="Navigate to Privacy Policy page"
                                    >
                                        Privacy Policy
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default UsefulLinks;