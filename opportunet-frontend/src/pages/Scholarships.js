import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';

const Scholarships = () => {
  const [scholarships, setScholarships] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchScholarships = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch('http://localhost:5000/api/scholarships');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch scholarships');
        }

        setScholarships(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Scholarships
      </Typography>
      <Grid container spacing={3}>
        {scholarships.map((scholarship) => (
          <Grid item key={scholarship.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {scholarship.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {scholarship.organization}
                </Typography>
                <Typography variant="body2" paragraph>
                  {scholarship.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Amount: ${scholarship.amount}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                <Button size="small" color="primary">
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Scholarships; 