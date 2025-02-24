import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import LaptopIcon from '@mui/icons-material/Laptop';
import MemoryIcon from '@mui/icons-material/Memory';
import BuildIcon from '@mui/icons-material/Build';
import Navbar from './Navbar';

const notebookServices = [
  {
    icon: <LaptopIcon sx={{ fontSize: 60 }} />,
    title: 'Troca de Telas',
    description: 'Substituição de telas para notebooks e MacBooks. Utilizamos peças originais com garantia e compatibilidade total com seu equipamento.',
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 60 }} />,
    title: 'Troca de Componentes',
    description: 'Upgrade e substituição de HD, SSD, memória RAM, teclado, touchpad, bateria e demais componentes do seu notebook.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 60 }} />,
    title: 'Reparo em Placas',
    description: 'Conserto especializado em placas-mãe, reparo de curto-circuito, substituição de componentes SMD e recuperação de notebooks.',
  },
];

const NotebookServices = () => {
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
              Serviços para Notebooks
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
              Soluções profissionais para notebooks e MacBooks
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center" sx={{ height: 'calc(100% - 120px)' }}>
            {notebookServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                      p: 3,
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
                        mb: 2,
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
                          fontSize: '1.5rem',
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
                        }}
                      >
                        {service.description}
                      </Typography>
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

export default NotebookServices; 