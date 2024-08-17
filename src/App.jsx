import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import ImageGallery from './components/ImageGallery';
import Carousel from './components/Carousel'; 
import WovenImageList from './components/WovenImageList'; 
import TextCard from './components/TextCard';
import Button from '@mui/material/Button';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick'; // Importar React Slick

// Estilos para o React Slick
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
      primary: '#000000', 
      secondary: '#999999', 
    },
    common: {
      black: '#000000', 
      white: '#FFFFFF', 
      green: '#4CAF50', 
      terracotta: '#E27171', 
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

const Root = styled('div')(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #f3ffff, #333333)', 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

// Array de imagens para o mosaico
const mosaicImages = [
  {
    img: '/imagem1.jpg', 
    title: 'Image 1',
  },
  {
    img: '/imagem2.jpg', 
    title: 'Image 2',
  },
  {
    img: '/imagem3.jpg', 
    title: 'Image 3',
  },
  {
    img: '/imagem4.jpg', 
    title: 'Image 4',
  },
];

// Array de imagens para o carrossel
const carouselImages = [
  {
    src: '/imagem1.jpg', 
    alt: 'Image 1',
  },
  {
    src: '/imagem2.jpg', 
    alt: 'Image 2',
  },
  {
    src: '/imagem3.jpg', 
    alt: 'Image 3',
  },
  {
    src: '/imagem4.jpg', 
    alt: 'Image 4',
  },
];

const textContent = [
  {
    title: 'Seção de Benefícios: Sua Casa, Seu Jeito',
    description: 'Do sonho à realidade: Deixe sua imaginação fluir! Criamos móveis sob medida que se encaixam perfeitamente em seu espaço e estilo de vida. Seu toque único: Escolha materiais, cores, acabamentos e detalhes que reflitam sua personalidade.',
  },
  {
    title: 'Personalização Completa',
    description: 'Durabilidade: Nossos móveis são construídos para resistir ao tempo, usando materiais de alta qualidade e técnicas de produção impecáveis.',
  },
  {
    title: 'Qualidade Incomparável',
    description: 'Beleza atemporal: Design elegante e funcional que se mantém moderno por anos.',
  },
  {
    title: 'Funcionalidade Inteligente',
    description: 'Organização e praticidade: Soluções inteligentes que otimizam o espaço e facilitam seu dia a dia.',
  },
  {
    title: 'Conforto e bem-estar:',
    description: 'Criamos ambientes que convidam ao relaxamento e à felicidade.',
  },
  {
    title: 'Com nossos móveis, você terá muito mais do que um simples móvel, terá um reflexo de sua individualidade, um investimento em qualidade e um toque de sofisticação em seu lar!',
    description: '',
  },
];

const testimonialContent = [
  {
    title: 'Mauricio de souza',
    description: '"Adorei a experiência de criar meus móveis com a Decora! Desde o primeiro contato, a equipe foi super atenciosa e compreensiva, entendendo exatamente o que eu queria para a minha sala de estar. A personalização é realmente completa, pude escolher cada detalhe, desde a madeira até o acabamento. O resultado final superou minhas expectativas! Os móveis são lindos, robustos e práticos, além de se encaixarem perfeitamente no meu espaço. A qualidade é impecável e o design é moderno e atemporal. Recomendo de olhos fechados!"',
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Root>
          <Container maxWidth="lg" sx={{ mt: 4 }}> 

          
            <Box 
              sx={{
                width: '100%',
                height: 200,
                backgroundImage: 'linear-gradient(to right, #f3ffff, #333333)', 
                marginBottom: theme.spacing(4),
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: theme.spacing(8) }}> 
              <img src="/logo.jpg" alt="Logo da Decora" width="200" height="auto" />
            </Box>

            <Main theme={theme} 
              title="Transforme seu espaço, eleve sua vida."
              subtitle="O design que se adapta ao seu estilo de vida."
              description="Criamos móveis planejados que transformam ambientes comuns em espaços extraordinários, refletindo sua personalidade com sofisticação e funcionalidade."
              buttonText="Solicite Seu Projeto"
            />

          
            <Grid container spacing={2} sx={{ mt: 2, width: '100%' }}> 
              {mosaicImages.map((image, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <img src={image.img} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={2} sx={{ mt: 4, alignItems: 'center' }}> 
              <Grid item xs={12} md={6}> 
                <Carousel theme={theme} images={carouselImages} />
              </Grid>
              <Grid item xs={12} md={6}> 
                <Box sx={{ mt: { xs: 4, md: 0 } }}> 
                
                  <Typography variant="h4" sx={{ mb: 2 }}>Seção de Benefícios: Sua Casa, Seu Jeito</Typography> 
                  {textContent.map((cardData, index) => (
                    <TextCard theme={theme} key={index} title={cardData.title} description={cardData.description} />
                  ))}
                </Box>
              </Grid>
            </Grid>

          
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ mb: 2 }}>Depoimento</Typography> 
                {testimonialContent.map((testimonialData, index) => (
                  <TextCard 
                    theme={theme} 
                    key={index} 
                    title={testimonialData.title} 
                    description={testimonialData.description} 
                    isTestimonial 
                    sx={{ border: '1px solid #ccc' }} 
                  />
                ))}
              </Grid>
            </Grid>

          
            <Box sx={{ mt: 8 }}> 
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: theme.palette.common.green, 
                  color: theme.palette.common.white, 
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
            </Box>
          </Container>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App