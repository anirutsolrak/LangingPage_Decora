import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const ImageGalleryContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const ImageContainer = styled(Link)(({ theme }) => ({
  width: '200px',
  height: '200px',
  margin: theme.spacing(1),
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  textDecoration: 'none',
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryContainer>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index}>
            <ImageContainer to={`/image/${index + 1}`}>
              <Image src={image.src} alt={image.alt} />
            </ImageContainer>
          </Grid>
        ))}
      </Grid>
    </ImageGalleryContainer>
  );
};

export default ImageGallery;