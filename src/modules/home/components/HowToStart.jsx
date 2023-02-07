import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import CardCarousel from '../elements/CardCarousel';
import { GREY_BG_COLOR } from '../../../shared/config/Colors';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';


const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const HowToStart = () => {
  return (
    <Box component="section" sx={{ background: GREY_BG_COLOR, padding: '50px 40px' }}>
      <Container>
        
        <Typography variant="h3" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} >How to Start</Typography>
        <Typography variant="h5" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} margin={"0 auto 1rem auto"}>Lorem ipsum dolor sit amet, consectetur</Typography>

        <div>
          <Slider {...settings}>
            {[...new Array(5)].map((_, index) => (
              <div key={`how-to-start__${index}`}>
                <CardCarousel />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Box>
  );
};

export default HowToStart;
