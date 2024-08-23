import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid'; // Importar o Grid

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
}));

const Footer = ({ theme }) => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              TIXSHOP
            </Typography>
            <Typography variant="body2">
              Rua Qualquer, 123, Cidade Qualquer
            </Typography>
            <Typography variant="body2">
              (12) 9456-7890
            </Typography>
            <Typography variant="body2">
              ola@grandestite.com.br
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              SIGA-NOS
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="#" sx={{ mr: 2 }}>
                <FacebookIcon />
              </Link>
              <Link href="#" sx={{ mr: 2 }}>
                <TwitterIcon />
              </Link>
              <Link href="#" sx={{ mr: 2 }}>
                <InstagramIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Funcionamento
            </Typography>
            <Typography variant="body2">
              Algumas informações sobre o funcionamento da empresa.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;