import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import HandymanIcon from '@mui/icons-material/Handyman';
import BuildIcon from '@mui/icons-material/Build';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
            zIndex: 9999,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
              }}
              style={{
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
              }}
            >
              <HandymanIcon sx={{ 
                fontSize: '50px', 
                color: '#FF6B00',
                filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.5))'
              }} />
              <PhoneAndroidIcon sx={{ 
                fontSize: '50px', 
                color: '#FF6B00',
                filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.5))'
              }} />
              <BuildIcon sx={{ 
                fontSize: '50px', 
                color: '#FF6B00',
                filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.5))'
              }} />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: {
                    xs: '2rem',
                    sm: '3rem',
                    md: '4rem',
                  },
                  transform: 'skewX(-5deg)',
                }}
              >
                Assistência
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: '#FF6B00',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4.5rem',
                  },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  transform: 'skewX(-5deg)',
                }}
              >
                All Import
              </Typography>
            </motion.div>
            <motion.div
              initial={{ width: 0, x: 100 }}
              animate={{ width: '300px', x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 50,
                damping: 10
              }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #FF6B00, #FF8533)',
                margin: '20px auto',
                borderRadius: '2px',
                boxShadow: '0 0 10px rgba(255,107,0,0.5)',
              }}
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.7,
                duration: 0.5
              }}
              style={{
                color: '#FFFFFF',
                fontSize: '1.2rem',
                opacity: 0.8,
                marginTop: '20px',
              }}
            >
              Seja bem-vindo!
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen; 