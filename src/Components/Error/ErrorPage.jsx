import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // If using React Router

const ErrorPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1NfT0N-m7mJgBUDb6W7-v4iWexFEzOXZ3A&s")', // Add your background image
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", p: 4, borderRadius: 2 }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          It seems that the page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Don’t worry, lovebirds! Let’s get you back on track.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/" // Change to your home route
            >
              Go to Home
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/wedding-planning" // Change to your wedding planning route
            >
              Wedding Planning
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Typography variant="caption">
            If you need further assistance, feel free to contact us!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorPage;
