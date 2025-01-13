import React from 'react';
import ReactGA from 'react-ga4';
import './Demo.scss';

const Demo = () => {
  const trackBookDemo = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Book a Demo Click',
      label: 'Demo Section',
    });
  };

  const scrollToRequestDemo = () => {
    const requestDemoSection = document.getElementById('page8');
    if (requestDemoSection) {
      const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
      const offsetPosition = requestDemoSection.offsetTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="demo-section">
      <div className="content">
        <div className="demo-left">
          <h2 className="demo-h2">Are you ready to experience the power of Finace?</h2>
          <p className="demo-p">
            Take action today and seize the opportunity to revolutionize your workforce's financial well-being by scheduling a demo slot with us. Our team of experts will guide you through a personalized demo, tailored to your specific business needs.
          </p>
        </div>
        <div className="demo-right">
          <button
            className="demo-btn"
            onClick={() => {
              trackBookDemo();
              scrollToRequestDemo();
            }}
            aria-label="Click to book a demo"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;