import React, { ReactElement, useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  useScrollTrigger, 
  Slide, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { text: 'Início', id: 'inicio' },
    { text: 'Serviços', id: 'servicos' },
    { text: 'Sobre', id: 'sobre' },
    { text: 'Contato', id: 'contato' }
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#1A1A1A', height: '100%', pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              '&:hover': {
                bgcolor: 'rgba(255, 107, 0, 0.08)'
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: '#FFFFFF',
                '.MuiListItemText-primary': {
                  fontSize: '1.15rem'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{
          background: 'linear-gradient(45deg, #1A1A1A 30%, #333333 90%)',
          boxShadow: '0 4px 8px 3px rgba(255, 107, 0, .3)',
          height: { xs: '70px', md: '90px' },
          width: '100%',
        }}
      >
        <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar 
            sx={{ 
              py: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h6" 
                component="a"
                onClick={() => scrollToSection('inicio')}
                sx={{
                  color: '#FF6B00',
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2rem' },
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

            {/* Menu para Desktop */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                gap: 1.5
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {menuItems.map((item) => (
                  <Button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ 
                      color: item.text === 'Contato' ? '#FFFFFF' : '#FFFFFF',
                      fontSize: '1.15rem',
                      padding: '12px 26px',
                      ...(item.text === 'Contato' ? {
                        bgcolor: '#FF6B00',
                        '&:hover': {
                          bgcolor: '#CC5500'
                        }
                      } : {
                        '&:hover': {
                          color: '#FF6B00',
                          backgroundColor: 'rgba(255, 107, 0, 0.08)'
                        }
                      })
                    }}
                    variant={item.text === 'Contato' ? 'contained' : 'text'}
                  >
                    {item.text}
                  </Button>
                ))}
              </motion.div>
            </Box>

            {/* Botão Menu Mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: '#FF6B00'
              }}
            >
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Drawer Mobile */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhor desempenho em mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250,
              bgcolor: '#1A1A1A',
              borderLeft: '2px solid #FF6B00'
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 