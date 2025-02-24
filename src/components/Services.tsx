import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MemoryIcon from '@mui/icons-material/Memory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 60 }} />,
    title: 'Smartphones',
    description: 'Reparo completo de celulares, incluindo tela, bateria e câmera. Soluções para problemas de software.',
    link: '/smartphones'
  },
  {
    icon: <SportsEsportsIcon sx={{ fontSize: 60 }} />,
    title: 'Games',
    description: 'Manutenção de consoles, controles e acessórios. Especialistas em PlayStation e Xbox.',
    link: '/servicos/games'
  },
  {
    icon: <LaptopMacIcon sx={{ fontSize: 60 }} />,
    title: 'Notebooks',
    description: 'Manutenção completa de notebooks, incluindo reparo de hardware e atualização de software.',
    link: '/servicos/notebooks'
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 60 }} />,
    title: 'Componentes',
    description: 'Troca de peças e upgrade de componentes. Melhor desempenho para seu equipamento.',
    link: '/servicos/componentes'
  },
];

const Services = () => {
  return (
    <Box
      id="servicos"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
        position: 'relative',
        py: 8,
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
          background: 'radial-gradient(circle at 80% 20%, rgba(255, 107, 0, 0.15) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            sx={{
              color: '#FF6B00',
              fontWeight: 'bold',
              mb: 3,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
              },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Nossos Serviços
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)',
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: {
                xs: 'calc(0.9rem * 1.10)',
                sm: 'calc(1rem * 1.10)',
                md: 'calc(1.1rem * 1.10)',
              },
              lineHeight: 1.6,
            }}
          >
            Oferecemos assistência técnica especializada para todos os seus dispositivos eletrônicos,
            com atendimento profissional e garantia em todos os serviços.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(51, 51, 51, 0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 107, 0, 0.1)',
                    borderRadius: '16px',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 8px 24px rgba(255, 107, 0, 0.2)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      color: '#FF6B00',
                      mb: 3,
                      transform: 'scale(1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {service.icon}
                  </Box>
                  <CardContent 
                    sx={{ 
                      textAlign: 'center', 
                      p: 0,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          color: '#FFFFFF',
                          fontWeight: 'bold',
                          mb: 2,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to={service.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 3,
                        bgcolor: '#FF6B00',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        '&:hover': {
                          bgcolor: '#CC5500',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 