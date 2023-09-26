import React from 'react';
import HeroSection from '../HeroSection';
import Typography from '@mui/material/Typography';
import LastNews from '../LastNews';

import "./News.scss";

function News() {
    return (
        <>
            <HeroSection>
                <div className='news-title'> <h1>Last news</h1> </div>
                <div className='news-subtitle'><h3>Our goal is to help you find the best trip</h3></div>
                <LastNews />
                <Typography gutterBottom variant="h5" component="div" className='news-text'>We hope you liked our news!</Typography>
            </HeroSection>
        </>
    );
}

export default News;