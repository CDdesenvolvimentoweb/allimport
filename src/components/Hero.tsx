import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BuildIcon from '@mui/icons-material/Build';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <Box
      id="inicio"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgb(143, 41, 23) 0%, #333333 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: '90px', // Altura do Navbar
      }}
    >
      {/* Efeito de fundo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 150%, rgba(255, 107, 0, 0.15) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container 
          spacing={4} 
          alignItems="center" 
          sx={{ 
            minHeight: 'calc(100vh - 90px)',
          }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4rem',
                  },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Assistência Técnica
                <Box component="span" sx={{ color: '#FF6B00', display: 'block' }}>
                  Especializada
                </Box>
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  fontSize: {
                    xs: '1.2rem',
                    sm: '1.4rem',
                    md: '1.5rem',
                  },
                  maxWidth: '600px',
                }}
              >
                Consertos rápidos e profissionais para seu smartphone.
                Atendimento de qualidade e garantia em todos os serviços.
              </Typography>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PhoneIphoneIcon />}
                  sx={{
                    mr: 2,
                    mb: { xs: 2, sm: 0 },
                    bgcolor: '#FF6B00',
                    fontSize: '1.2rem',
                    padding: '12px 30px',
                    '&:hover': {
                      bgcolor: '#CC5500',
                    },
                  }}
                  onClick={() => window.open('https://wa.me/5517988157666?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!', '_blank')}
                >
                  Agendar Conserto
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<BuildIcon />}
                  sx={{
                    borderColor: '#FF6B00',
                    color: '#FF6B00',
                    fontSize: '1.2rem',
                    padding: '12px 30px',
                    '&:hover': {
                      borderColor: '#CC5500',
                      color: '#CC5500',
                      bgcolor: 'rgba(255,107,0,0.08)',
                    },
                  }}
                  href="#servicos"
                >
                  Nossos Serviços
                </Button>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Reparo de Smartphone"
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  filter: 'drop-shadow(5px 5px 15px rgba(255,107,0,0.3))',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 