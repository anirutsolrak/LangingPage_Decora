import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const MainContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginBottom: theme.spacing(2),
}));

const Main = ({ title, subtitle, description, buttonText }) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Title variant="h1">{title}</Title>
        <Subtitle variant="h4">{subtitle}</Subtitle>
        <Description variant="body1">{description}</Description>
        {/* Passa a prop buttonText para o componente Button */}
        <Button text={buttonText} />
      </Container>
    </Box>
  );
};

export default Main;
