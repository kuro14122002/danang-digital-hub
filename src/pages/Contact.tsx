import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initializeApp, updateClock } from '../js/scripts.js';

function Contact() {
  useEffect(() => {
    // Initialize app functionalities
    initializeApp();
    
    // Set up clock interval
    const clockInterval = setInterval(updateClock, 1000);
    updateClock();
    
    // Clean up interval on component unmount
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default Contact; 