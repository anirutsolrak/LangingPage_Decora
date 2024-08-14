import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import ImageGallery from './components/ImageGallery';
import Carousel from '@mui/material/Carousel';
import TextCard from './components/TextCard';
import Button from '@mui/material/Button';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Importe o Grid do MUI
import Box from '@mui/material/Box'; // Importe o Box para o logo

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f3ffff',
    },
    secondary: {
      main: '#333333',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#f3ffff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

// Array de imagens para o mosaico
const mosaicImages = [
  {
    src: '/assets/image1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/assets/image2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/assets/image3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/assets/image4.jpg',
    alt: 'Image 4',
  },
];

// Array de imagens para o carrossel
const carouselImages = [
  {
    src: '/assets/image1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/assets/image2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/assets/image3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/assets/image4.jpg',
    alt: 'Image 4',
  },
];

// ... (restante do código)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Root>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: theme.spacing(4),
            }}
          >
            <img
              src="/assets/logo.png"
              alt="Logo da Decora"
              width="200"
              height="auto"
            />
          </Box>
          <Main
            title="Transforme seu espaço, eleve sua vida."
            subtitle="O design que se adapta ao seu estilo de vida."
            description="Criamos móveis planejados que transformam ambientes comuns em espaços extraordinários, refletindo sua personalidade com sofisticação e funcionalidade."
            buttonText="Solicite Seu Projeto"
          />

          {/* Mosaico de Imagens */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {mosaicImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Carrossel */}
          <Carousel sx={{ mt: 4 }}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </Carousel>

          {/* Seção de Benefícios */}
          {textContent.map((cardData, index) => (
            <TextCard
              key={index}
              title={cardData.title}
              description={cardData.description}
            />
          ))}

          {/* Depoimento */}
          {testimonialContent.map((testimonialData, index) => (
            <TextCard
              key={index}
              title={testimonialData.title}
              description={testimonialData.description}
              isTestimonial
            />
          ))}

          {/* Botão */}
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.primary,
              padding: theme.spacing(1, 2),
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: theme.spacing(1),
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Solicite Seu Projeto
          </Button>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
