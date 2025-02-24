import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <Box
      id="contato"
      sx={{
        bgcolor: 'background.default',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
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
            color="primary"
            gutterBottom
          >
            Entre em Contato
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Estamos aqui para ajudar! Entre em contato conosco
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <Typography variant="h4" gutterBottom color="primary">
                  Informações de Contato
                </Typography>
                <Box sx={{ mt: 4, width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOnIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                    <Typography>
                      Rua 10, 704 - Centro<br />
                      Guaíra - SP<br />
                      CEP: 14790-000
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                    <Typography>(17) 98815-7666</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <WhatsAppIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                    <Typography 
                      component="a" 
                      href="https://wa.me/5517988157666" 
                      target="_blank"
                      sx={{ 
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }}
                    >
                      (17) 98815-7666
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                    <Typography>assistenciaallimport10@gmail.com</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ mt: 4 }}>
                  Horário de Funcionamento:<br />
                  Segunda a Sexta: 09h às 18h<br />
                  Sábado: 09h às 13h
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '450px',
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.4777342535135!2d-48.3142385249888!3d-20.321873681156454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb0900624ebb57%3A0x7850bac2120928a8!2sALL%20IMPORT%20ASSISTENCIA%20TECNICA%20ESPECIALIZADA!5e0!3m2!1spt-BR!2sbr!4v1740431037064!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 