import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h2" gutterBottom>
          Welcome to Opportunet
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your gateway to educational opportunities and scholarships
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/scholarships')}
            sx={{ mr: 2 }}
          >
            Browse Scholarships
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/register')}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 