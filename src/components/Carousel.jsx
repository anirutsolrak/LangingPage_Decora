import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CarouselContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 400,
  overflow: 'hidden', // Ocultar o overflow para evitar que as imagens ultrapassem o limite
}));

const CarouselComponent = ({ images, theme }) => { // Recebe o tema como prop
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <CarouselContainer>
      <SwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        {...autoPlay(
          {
            interval: 3000, // Tempo de autoplay em milissegundos
          },
          {
            onAutoPlay: () => setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length),
          }
        )}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} loading="lazy" style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </SwipeableViews>
      <Button
        onClick={() => handleStepChange((activeStep - 1 + images.length) % images.length)}
        sx={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: theme.palette.common.white, color: theme.palette.common.black }}
      >
        <KeyboardArrowLeftIcon />
      </Button>
      <Button
        onClick={() => handleStepChange((activeStep + 1) % images.length)}
        sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: theme.palette.common.white, color: theme.palette.common.black }}
      >
        <KeyboardArrowRightIcon />
      </Button>
    </CarouselContainer>
  );
};

export default CarouselComponent;