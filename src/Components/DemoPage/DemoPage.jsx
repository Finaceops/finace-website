import React, { useState, useEffect } from 'react';
import './DemoPage.scss';
import Navbar from '../Navbar/Navbar';
import UsefulLinks from '../UsefulLinks/UsefulLinks';
import Footer from '../Footer/Footer';
import RequestDemo from '../RequestDemo/RequestDemo'

const DemoPage = () => {
  return (
    <section>
      <Navbar />
      <div className="header-space"></div>
      <RequestDemo />
      <UsefulLinks />
      <Footer />
    </section>
  )
}

export default DemoPage