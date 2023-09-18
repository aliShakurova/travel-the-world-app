import React from 'react';
import HeroSection from '../HeroSection';
import Typography from '@mui/material/Typography';
import FindOfferForm from '../FindOfferForm';

import "./Offers.scss";

function Offers() {
    return (
        <>
            <HeroSection>
                <div className='offers-title'> <h1>Find the best offer</h1> </div>
                <div className='offers-subtitle'><h3>Our goal is to help you find the best trip</h3></div>
                <FindOfferForm />
                <Typography gutterBottom variant="h5" component="div" className='offers-text'>We hope you found what you were looking for!</Typography>
            </HeroSection>
        </>
    );
}

export default Offers;