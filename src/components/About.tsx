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
            Sobre a All Import
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Somos especialistas em reparo de smartphones, com mais de 13anos de experiência no mercado
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
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
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
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
            sx={{ mt: 6 }}
          >
            Com mais de 13 anos de experiência no mercado, a All Import se destaca pela excelência
            no atendimento e qualidade dos serviços prestados. Nossa equipe é altamente capacitada
            e está sempre atualizada com as últimas tecnologias do mercado.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 