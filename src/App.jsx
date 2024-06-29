import React from 'react';
import Header from './components/Header';
import HeaderCarousel from './components/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee from './components/Marquee';
import InquiryForm from './components/InquiryForm';

function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />
      <HeaderCarousel />
      <InquiryForm />
    </div>
  );
}

export default App;
