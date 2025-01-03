import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './DemoButton.scss';

const DemoButton = () => {
  const navigate = useNavigate();

  const trackBookDemo = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Book a Demo Click',
      label: 'Demo Button',
    });
  };

  const scrollToRequestDemo = () => {
    const requestDemoSection = document.getElementById('page8');
    if (requestDemoSection) {
      requestDemoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const requestDemoSection = document.getElementById('page8');
        if (requestDemoSection) {
          requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <button
      className="demo-button"
      onClick={() => {
        trackBookDemo();
        scrollToRequestDemo();
      }}
      aria-label="Click to book a demo"
    >
      Book a Demo
    </button>
  );
};

export default DemoButton;