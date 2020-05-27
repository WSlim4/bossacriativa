import React from 'react';
import '../../global.css';
import './Home.css';
import Banner from '../../assets/banner-1.jpg';

function Home() {

  return (
    <div className="home-container">
      <div className="banner-div">
        <img src={Banner} alt="Logo" className="banner"/>
      </div>
    </div>
  );
}

export default Home;
