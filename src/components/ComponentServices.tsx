import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import HandymanIcon from '@mui/icons-material/Handyman';
import Navbar from './Navbar';

const componentServices = [
  {
    icon: <StorageIcon sx={{ fontSize: 60 }} />,
    title: 'Upgrade de Hardware',
    description: 'Troca de HD para SSD com migração de dados, aumento de memória RAM para notebooks e PCs, instalação de placas de vídeo e otimização para games.',
    details: [
      'Instalação de SSDs de alta performance',
      'Upgrade de memória RAM',
      'Otimização para jogos',
      'Migração completa de dados',
      'Configuração do sistema'
    ]
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 60 }} />,
    title: 'Recuperação e Carcaças',
    description: 'Recuperação e substituição de carcaças para notebooks, consoles e gabinetes de PC. Reparo de dobradiças, tampas e peças plásticas.',
    details: [
      'Troca de carcaças completas',
      'Reparo de dobradiças',
      'Substituição de tampas',
      'Restauração de gabinetes',
      'Customização de cases'
    ]
  },
];

const ComponentServices = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: 'calc(100vh - 90px)',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
          position: 'relative',
          mt: '90px',
          overflow: 'hidden',
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
        
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, py: 4, width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              sx={{
                color: '#FF6B00',
                fontWeight: 'bold',
                mb: 1,
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Serviços de Componentes
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: {
                  xs: '1.1rem',
                  sm: '1.2rem',
                  md: '1.3rem',
                },
              }}
            >
              Upgrade e recuperação de componentes para todos os seus dispositivos
            </Typography>
          </motion.div>

          <Grid container spacing={6} justifyContent="center" sx={{ height: 'calc(100% - 120px)' }}>
            {componentServices.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
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
                        display: 'flex',
                        justifyContent: 'center',
                        transform: 'scale(1)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      {service.icon}
                    </Box>
                    <CardContent sx={{ textAlign: 'center', p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          color: '#FFFFFF',
                          fontWeight: 'bold',
                          mb: 2,
                          fontSize: '1.8rem',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '1.1rem',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {service.details.map((detail, idx) => (
                          <Typography
                            key={idx}
                            variant="body1"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: '1rem',
                              py: 0.5,
                              borderBottom: idx !== service.details.length - 1 ? '1px solid rgba(255, 107, 0, 0.1)' : 'none',
                            }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ComponentServices; 