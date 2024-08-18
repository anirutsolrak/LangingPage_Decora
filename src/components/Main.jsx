import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'; // Importar o Button do MUI

const MainContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  color: theme.palette.common.terracotta, // Cor do título principal
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra no título principal
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.common.black, // Cor do subtítulo
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.common.black, // Cor da descrição
}));

const Main = ({ theme, title, subtitle, description, buttonText }) => { 
  return (
    <Box>
      <Container maxWidth="lg">
        <Title variant="h1">{title}</Title>
        <Subtitle variant="h4">{subtitle}</Subtitle>
        <Description variant="body1">{description}</Description>

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
            } 
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default Main;