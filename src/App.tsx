import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import SplashScreen from './components/SplashScreen';
import SmartphoneServices from './components/SmartphoneServices';
import GamesServices from './components/GamesServices';
import NotebookServices from './components/NotebookServices';
import ComponentServices from './components/ComponentServices';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B00', // Laranja vibrante
      light: '#FF8533',
      dark: '#CC5500',
    },
    secondary: {
      main: '#1A1A1A', // Preto suave
      light: '#333333',
      dark: '#000000',
    },
    background: {
      default: '#F5F5F5', // Fundo claro
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem',
      },
      color: '#1A1A1A',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
      color: '#FF6B00',
    },
    h3: {
      color: '#1A1A1A',
    },
    h4: {
      color: '#FF6B00',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
            padding: '0 24px'
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '10px 20px',
        },
        contained: {
          backgroundColor: '#FF6B00',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#CC5500',
          },
        },
        outlined: {
          borderColor: '#FF6B00',
          color: '#FF6B00',
          '&:hover': {
            borderColor: '#CC5500',
            color: '#CC5500',
            backgroundColor: 'rgba(255, 107, 0, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: '0 8px 24px rgba(255, 107, 0, 0.15)',
          },
        },
      },
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Hero />
          <Services />
          <About />
          <Contact />
        </Box>
      </motion.div>
    </Box>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <SplashScreen isVisible={showSplash} />
        <Box
          sx={{
            visibility: showSplash ? 'hidden' : 'visible',
          }}
        >
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/smartphones" element={<SmartphoneServices />} />
            <Route path="/games" element={<GamesServices />} />
            <Route path="/notebooks" element={<NotebookServices />} />
            <Route path="/componentes" element={<ComponentServices />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 