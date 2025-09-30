import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventGrid from './components/EventGrid';
import FeaturedVenues from './components/FeaturedVenues';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <EventGrid />
      <FeaturedVenues />
      <Footer />
    </div>
  );
}

export default App;