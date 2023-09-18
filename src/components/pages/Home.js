import React from 'react';
import { Link } from "react-router-dom";
import HeroSection from '../HeroSection';
import OffersSwiper from '../OffersSwiper';
import TravelDistanation from '../TravelDistanation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./Home.scss";

function Home() {
  return (
    <>
      <HeroSection>
        <div className='home-title'> <h1>Travl is Life</h1> </div>
        <div className='home-subtitle'><h3>Our goal is to help you find the best trip</h3></div>
        <div className='find-adventure-btn'>
          <Link to='/offers'><Button variant="outlined" size="large" style={{
            borderRadius: 15,
            color: "#FFF",
            borderColor: "#FFF",
            padding: "12px 26px",
            fontSize: "18px"
          }}>Find Adventure</Button></Link>
        </div>
        <OffersSwiper />
        <TravelDistanation />
        <div className='calculator-link-container'>
          <div>
        <Typography variant="h5">
            Find a trip you can afford
        </Typography>
        </div>
        <div className='calculator-link'>
          <Link to='/offers'>Calculator</Link>
        </div>
        </div>
      </HeroSection>
    </>
  );
}

export default Home;