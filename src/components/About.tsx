import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import TimerIcon from '@mui/icons-material/Timer';
import SecurityIcon from '@mui/icons-material/Security';

const features = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Qualidade Garantida',
    description: 'Utilizamos apenas peças originais e oferecemos garantia em todos os serviços.',
  },
  {
    icon: <TimerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Rapidez no Atendimento',
    description: 'Consertos rápidos e eficientes, com prazo médio de 24 horas.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Segurança Total',
    description: 'Seus dados estão seguros conosco. Realizamos backup quando necessário.',
  },
];

const About = () => {
  return (
    <Box
      id="sobre"
      sx={{
        bgcolor: 'background.paper',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '90px', // Altura do Navbar
        pb: '90px', // Padding bottom igual ao top para centralização
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
              color="primary"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Sobre a All Import
            </Typography>
            <Typography 
              variant="h6" 
              align="center" 
              color="text.secondary" 
              paragraph
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
              }}
            >
              Somos especialistas em reparo de smartphones, com mais de 13 anos de experiência no mercado
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 20px rgba(255, 107, 0, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
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
              color="text.secondary"
              align="center"
              sx={{ 
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.8
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