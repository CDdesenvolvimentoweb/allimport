import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Informações de Contato */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" gutterBottom>
                Contato
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  (17) 98815-7666
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  assistenciaallimport10@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  Guaira, SP
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Redes Sociais */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom>
                Redes Sociais
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/share/194GuvAhZF/?mibextid=wwXIfr"
                  target="_blank"
                  sx={{ 
                    color: '#1877F2',
                    '&:hover': { 
                      color: '#1877F2',
                      opacity: 0.8 
                    } 
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/allimport_guaira?igsh=ZHI2NmR3ZTd1OG44&utm_source=qr"
                  target="_blank"
                  sx={{ 
                    color: '#E4405F',
                    '&:hover': { 
                      color: '#E4405F',
                      opacity: 0.8 
                    } 
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://wa.me/5517988157666"
                  target="_blank"
                  sx={{ 
                    color: '#25D366',
                    '&:hover': { 
                      color: '#25D366',
                      opacity: 0.8 
                    } 
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            © {currentYear} All Import. Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 1 }}>
            Criado por C&D Desenvolvimento
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 