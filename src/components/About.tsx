import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessIcon from '@mui/icons-material/Business';
import mercadoLivreLogo from '../assets/mercadolivre.jpg';
import garantiaLogo from '../assets/garantida.jpg';
import segurancaLogo from '../assets/seguranca.jpg';
import algarLogo from '../assets/algar.jpg';

const features = [
  {
    icon: (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <VerifiedIcon sx={{ fontSize: 40, color: '#FF6B00' }} />
      </Box>
    ),
    title: 'Qualidade Garantida',
    description: 'Utilizamos apenas peças originais e oferecemos garantia em todos os serviços.',
    customStyle: {
      backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.68)), url(${garantiaLogo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%)',
        opacity: 0.6,
        transition: 'opacity 0.3s ease-in-out',
        borderRadius: 2,
        backdropFilter: 'blur(8px)',
      },
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 20px rgba(255, 107, 0, 0.3)',
        '&::before': {
          opacity: 0.65,
          backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 100%)',
        }
      },
    }
  },
  {
    icon: (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <StorefrontIcon sx={{ fontSize: 40, color: '#FF6B00' }} />
      </Box>
    ),
    title: 'Ponto Mercado Livre',
    description: 'Somos um ponto oficial do Mercado Livre para retirada e envio de produtos.',
    customStyle: {
      backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.68)), url(${mercadoLivreLogo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%)',
        opacity: 0.6,
        transition: 'opacity 0.3s ease-in-out',
        borderRadius: 2,
        backdropFilter: 'blur(8px)',
      },
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 20px rgba(255, 107, 0, 0.3)',
        '&::before': {
          opacity: 0.65,
          backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 100%)',
        }
      },
    }
  },
  {
    icon: (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <SecurityIcon sx={{ fontSize: 40, color: '#FF6B00' }} />
      </Box>
    ),
    title: 'Segurança Total',
    description: 'Seus dados estão seguros conosco. Realizamos backup quando necessário.',
    customStyle: {
      backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.68)), url(${segurancaLogo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%)',
        opacity: 0.6,
        transition: 'opacity 0.3s ease-in-out',
        borderRadius: 2,
        backdropFilter: 'blur(8px)',
      },
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 20px rgba(255, 107, 0, 0.3)',
        '&::before': {
          opacity: 0.65,
          backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 100%)',
        }
      },
    }
  },
  {
    icon: (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <BusinessIcon sx={{ fontSize: 40, color: '#FF6B00' }} />
      </Box>
    ),
    title: 'Credenciado Algar Telecom',
    description: 'Somos assistência técnica credenciada oficial da Algar Telecom.',
    customStyle: {
      backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.68)), url(${algarLogo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%)',
        opacity: 0.6,
        transition: 'opacity 0.3s ease-in-out',
        borderRadius: 2,
        backdropFilter: 'blur(8px)',
      },
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 20px rgba(255, 107, 0, 0.3)',
        '&::before': {
          opacity: 0.65,
          backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 100%)',
        }
      },
    }
  },
];

const About = () => {
  return (
    <Box
      id="sobre"
      sx={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '90px',
        pb: '90px',
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ 
          width: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          gap: 6,
        }}>
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
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                color: '#FF6B00',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Sobre a All Import
            </Typography>
    
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '307px',
                      width: '736px',
                      maxWidth: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      borderRadius: 2,
                      mx: 'auto',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease-in-out',
                      ...feature.customStyle
                    }}
                  >
                    <Box 
                      sx={{ 
                        mb: 2,
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        color: '#FF6B00',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        color: 'rgba(255,255,255,0.85)',
                        position: 'relative',
                        zIndex: 1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{ 
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.8)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Com mais de 13 anos de experiência no mercado, a All Import se destaca pela excelência
              no atendimento e qualidade dos serviços prestados. Nossa equipe é altamente capacitada
              e está sempre atualizada com as últimas tecnologias do mercado.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 