import React from 'react';
import Header from './components/Header';
import HeaderCarousel from './components/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee from './components/Marquee';
import PlacementSection from './components/PlacementSection';

function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />
      <HeaderCarousel />
      <PlacementSection />
    </div>
  );
}

export default App;
