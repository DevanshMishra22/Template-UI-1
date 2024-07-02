import React from 'react';
import Header from './components/Header';
import HeaderCarousel from './components/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee from './components/Marquee';
import PlacementSection from './components/PlacementSection';
import Keypoints from './components/Keypoints';
import OurClients from './components/Ourclients';

function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />
      <HeaderCarousel />
      <Marquee />
      <Keypoints />
      <PlacementSection />
      <OurClients />
    </div>
  );
}

export default App;
