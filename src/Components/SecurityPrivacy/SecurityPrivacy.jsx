import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SecurityPrivacy.css';

const SecurityPrivacy = () => {
    return (
        <div className="security-container">
            <motion.h1 
                id='security-heading'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Security & Privacy
            </motion.h1>
            
            <motion.p
            className='security-subheading-p'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Your data is protected with industry-leading security measures and certifications.
            </motion.p>
            
            <motion.div 
                className="know-more-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Link to="/privacy-policy" className="know-more-button" aria-label="Navigate to Privacy Policy page">
                    Know More
                </Link>
            </motion.div>
            
            <div className="security-features">
                <motion.div 
                    className="security-feature-box"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="/lock.svg" alt="Data Encryption" />
                    <h2 className='security-subheading'>Data Encryption</h2>
                    <p>Secure encryption in transit <br /> & at rest.</p>
                </motion.div>
                
                <motion.div 
                    className="security-feature-box"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="/cloud.svg" alt="Cloud Security" id="cloud" />
                    <h2 className='security-subheading'>Robust Cloud Security</h2>
                    <p>Scalable & protected cloud <br /> infrastructure.</p>
                </motion.div>
            </div>

            <motion.div 
                className="backed-by"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
            >
                <img src="/backed.svg" alt="ICICI Bank" />
            </motion.div>
        </div>
    );
}

export default SecurityPrivacy;