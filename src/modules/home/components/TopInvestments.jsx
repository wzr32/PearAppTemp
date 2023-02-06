import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import SVGLoremPlace from '../../../shared/assets/lorem_placeholder.svg';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const TopInvestments = () => {
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

  return (
    <Box component="section" sx={{ padding: '50px 0' }}>
      <Container>
        
      <Typography variant="h4" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} margin={"0 0 1rem 0"} >Top Investments</Typography>
      <Typography variant="h5" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} margin={".5rem auto 1rem auto"}>Get started and learn to pear with these tutorials</Typography>

        <Slider {...settings}>
          {[...new Array(5)].map((_, index) => (
            <Box component="div" key={`top-investments__${index}`}>
              <img src={SVGLoremPlace} alt="lorem_placeholder" />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  )
}

export default TopInvestments;
