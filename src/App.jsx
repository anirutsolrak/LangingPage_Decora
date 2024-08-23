import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Carousel from './components/Carousel'; 
import Button from '@mui/material/Button';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick'; // Importar React Slick
import Footer from './components/Footer'; // Importar o Footer

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
    mode: 'light', // Mudar para modo claro
    primary: {
      main: '#f3ffff',
    },
    secondary: {
      main: '#333333',
    },
    background: {
      default: '#FFFFFF', // Branco como fundo padrão
    },
    text: {
      primary: '#000000', // Preto como texto principal
      secondary: '#888888', // Cinza como texto secundário
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
  //backgroundImage: 'linear-gradient(to right, #f3ffff, #333333)', // Remover o degradê 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default // Usar a cor branca como background
}));

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

            {/* Banner com degradê */}
            <Box 
              sx={{
                width: '100%',
                height: 80, 
                backgroundImage: `url('/border.jpg')`, 
                backgroundRepeat: 'repeat-x', 
                backgroundPosition: 'top', 
                marginBottom: theme.spacing(4),
                padding: 0, 
                border: 'none', 
              }}
            >
              <Typography variant="h5" sx={{ color: theme.palette.common.green, fontWeight: 'bold', textAlign: 'center', padding: theme.spacing(2) }}>Compre móveis de qualidade com entrega rápida e garantia!</Typography>
            </Box>

            {/* Logo e Texto */}
            <Grid container spacing={2} sx={{ mt: 2, alignItems: 'center' }}> 
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}> 
                <Box sx={{ width: 150, height: 125, borderRadius: '50%', overflow: 'hidden', backgroundColor: theme.palette.common.white, border: '1px solid #ccc' }}>
                  <img src="/logo.png" alt="Logo da Decora" style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box sx={{ ml: 4, mt: 2 }}> 
                  <Typography variant="h4" sx={{ mb: 1, color: theme.palette.common.terracotta, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Móveis de Qualidade e Durabilidade</Typography> 
                  <Typography variant="subtitle1" sx={{ color: theme.palette.common.black }}>Entrega Rápida e Garantia</Typography> 
                  <Typography variant="body2" sx={{ color: theme.palette.common.black, mb: 2 }}>Encontre os melhores móveis para sua casa, com qualidade, durabilidade e entrega rápida. Aproveite a garantia de satisfação e renove seu lar com estilo.</Typography> 
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
                    Compre Agora
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}> 
                {/* ... (Conteúdo do Carousel) */}
              </Grid>
            </Grid>

            {/* Carrossel e Seção de Benefícios */}
            <Grid container spacing={2} sx={{ mt: 4 }}> 
              <Grid item xs={12} md={6}> {/* Carousel à esquerda */}
                <Carousel theme={theme} images={carouselImages} /> 
              </Grid>
              <Grid item xs={12} md={6} sx={{  }}> {/* Seção de Benefícios à direita */}
                <Grid container spacing={2} sx={{ mt: 0, alignItems: 'center', width: '100%' }}>
                  <Grid item xs={12} sx={{  }}>
                    <Typography variant="h4" sx={{ mb: 2, color: theme.palette.common.terracotta, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Seção de Benefícios</Typography> 
                    <Typography variant="body1" sx={{ color: theme.palette.common.black, mb: 2 }}>Entrega rápida em até 24 horas.</Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.black, mb: 2 }}>Frete grátis para compras acima de R$ 500.</Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.black, mb: 2 }}>Parcelamento em até 12x sem juros.</Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.black, mb: 2 }}>Garantia de 1 ano.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Depoimento */}
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ mb: 2, color: theme.palette.common.terracotta, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Depoimento</Typography> 
                <Typography variant="body1" sx={{ color: theme.palette.common.black, mb: 2 }}>"Adorei a experiência de comprar meus móveis com a Decora! A entrega foi super rápida, o móvel é de ótima qualidade e a garantia me deixou tranquila. Recomendo a Decora para todos!"</Typography>
              </Grid>
            </Grid>

            {/* Botão */}
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
                Compre Agora
              </Button>
            </Box>

            <Footer theme={theme}/>
          </Container>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;