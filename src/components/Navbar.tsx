import React, { ReactElement } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, useScrollTrigger, Slide, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Props {
  window?: () => Window;
  children: ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{
          background: 'linear-gradient(45deg, #1A1A1A 30%, #333333 90%)',
          boxShadow: '0 4px 8px 3px rgba(255, 107, 0, .3)',
          height: '90px',
          width: '100%',
        }}
      >
        <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar 
            sx={{ 
              py: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ flexGrow: 1 }}
            >
              <Typography 
                variant="h6" 
                component="a"
                onClick={() => scrollToSection('inicio')}
                sx={{
                  color: '#FF6B00',
                  fontWeight: 700,
                  fontSize: '2rem',
                  letterSpacing: '1.3px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#CC5500',
                  },
                }}
              >
                All Import
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Button 
                  color="inherit"
                  onClick={() => scrollToSection('inicio')}
                  sx={{ 
                    color: '#FFFFFF',
                    fontSize: '1.15rem',
                    padding: '12px 26px',
                    '&:hover': {
                      color: '#FF6B00',
                      backgroundColor: 'rgba(255, 107, 0, 0.08)'
                    }
                  }}
                >
                  Início
                </Button>
                <Button 
                  color="inherit"
                  onClick={() => scrollToSection('servicos')}
                  sx={{ 
                    color: '#FFFFFF',
                    fontSize: '1.15rem',
                    padding: '12px 26px',
                    '&:hover': {
                      color: '#FF6B00',
                      backgroundColor: 'rgba(255, 107, 0, 0.08)'
                    }
                  }}
                >
                  Serviços
                </Button>
                <Button 
                  color="inherit"
                  onClick={() => scrollToSection('sobre')}
                  sx={{ 
                    color: '#FFFFFF',
                    fontSize: '1.15rem',
                    padding: '12px 26px',
                    '&:hover': {
                      color: '#FF6B00',
                      backgroundColor: 'rgba(255, 107, 0, 0.08)'
                    }
                  }}
                >
                  Sobre
                </Button>
                <Button 
                  variant="contained"
                  onClick={() => scrollToSection('contato')}
                  sx={{ 
                    bgcolor: '#FF6B00',
                    fontSize: '1.15rem',
                    padding: '12px 26px',
                    '&:hover': {
                      bgcolor: '#CC5500'
                    }
                  }}
                >
                  Contato
                </Button>
              </Box>
            </motion.div>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 