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
      primary: '#FFFFFF', 
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
  backgroundColor: 'gray', 
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
          <Container sx={{ mt: 0 }}>            
            <Grid container spacing={2} sx={{ ml: 2, mt: 2, alignItems: 'center', width: '100%' }}> 
                <Box sx={{ width: 150, height: 125, borderRadius: '70%', overflow: 'hidden', backgroundColor: 'gray', display: 'flex', }}>
                  <img src="/logo.png" alt="Logo da Decora" style={{ width: '100%', height: '100%' }} />
                </Box>
                <Typography variant="h4" sx={{ml: 4, mt: 2, color: theme.palette.common.terracotta, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Transforme seu espaço, eleve sua vida.</Typography> 
             
                <Box sx={{ ml: 4, mt: 2, width: '100%' }}> 
          
                  <Typography variant="h4" sx={{ color: theme.palette.common.white }}>O design que se adapta ao seu estilo de vida</Typography> 
                  <Typography variant="h6" sx={{ color: theme.palette.common.white, mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Criamos móveis planejados que transformam ambientes comuns em espaços extraordinários, refletindo sua personalidade com sofisticação e funcionalidade.</Typography> 
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
              
            </Grid>

            
            <Grid container spacing={2} sx={{ mt: 4 }}> 
               
                <Carousel theme={theme} images={carouselImages} /> 
              
              </Grid>
              <Grid container spacing={2} sx={{ mt: 4 }}> 
               
                <Box sx={{ mt: { xs: 4, md: 0 } }}> 
                  <Typography variant="h4" sx={{ mb: 2, color: theme.palette.common.terracotta, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Seção de Benefícios: Sua Casa, Seu Jeito</Typography> 
                  {textContent.map((cardData, index) => (
                    <TextCard theme={theme} key={index} title={cardData.title} description={cardData.description} />
                  ))}
                </Box>
           
                <Box sx={{ mt: 2 }}> 
                  {textContent.slice(1, 5).map((cardData, index) => (
                    <TextCard theme={theme} key={index} title={cardData.title} description={cardData.description} />
                  ))}
                </Box>
                
                <TextCard theme={theme} title={textContent[5].title} description={textContent[5].description} />
              </Grid>
            

            
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ mb: 2, color: theme.palette.common.terracotta, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Depoimento</Typography> 
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

export default App;