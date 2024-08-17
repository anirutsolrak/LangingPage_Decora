import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; 

const TextCardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  width: '80%',
  maxWidth: '800px',
  borderRadius: theme.spacing(1),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
}));

const TextCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  fontSize: '1.2rem',
  color: theme.palette.common.terracotta, // Cor do título do card
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra no título do card
}));

const TextCardDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '1rem',
  color: theme.palette.common.white, // Cor da descrição do card
}));

const TextCard = ({ theme, title, description, isTestimonial }) => { // Recebe o tema como prop
  return (
    <TextCardContainer elevation={3}>
      {isTestimonial && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="subtitle1">
            "{description}"
          </Typography>
        </Box>
      )}
      <TextCardTitle variant="h5">{title}</TextCardTitle>
      <TextCardDescription variant="body1">{!isTestimonial && description}</TextCardDescription>
    </TextCardContainer>
  );
};

export default TextCard;