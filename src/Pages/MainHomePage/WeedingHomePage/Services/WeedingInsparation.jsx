import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import backgroundImage from "../../../../assets/icons/heartsBanner.jpg";

import image1 from "../../../../assets/wedding/wedding1.jpg";
import image2 from "../../../../assets/wedding/wedding2.jpg";
import image3 from "../../../../assets/wedding/wedding3.jpg";

const weddingImage = [
  {
    id: 1,
    title: "Tips for choosing the perfect wedding venue",
    data: "March, 10, 2024",
    image: image1,
    place: "Venue Selection",
  },
  {
    id: 2,
    title: "Wedding Decor Inspiration",
    data: "April, 15, 2024",
    image: image2,
    place: "Decor Inspiration",
  },
  {
    id: 3,
    title: "Wedding Cake Ideas",
    data: "May, 20, 2024",
    image: image3,
    place: "Cake Ideas",
  },
];

const WeedingInsparation = () => {
  return (
    <div
      className="my-20 py-8 px-4 r h-screen flex md:flex-row flex-col-reverse justify-center items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Container className="mx-auto py-10">
        <Box mb={6} textAlign="center">
          <Typography variant="p" color="textSecondary" gutterBottom>
            We Share Expert Advice
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            Your Source for Wedding <br /> Inspiration and Tips
          </Typography>
        </Box>
        <Grid container spacing={4} className="mt-5">
          {weddingImage.map((wedding, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="group">
              <Paper
                elevation={3}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src={wedding.image}
                  alt={wedding.title}
                  className="w-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                <Box className="absolute top-2 right-2  text-end z-10 ">
                  <Typography
                    variant="p"
                    color="white"
                    sx={{
                      backgroundColor: "rgba(255, 0, 0, 0.5)", // Red color with low opacity
                      display: "inline-block",
                      px: "10px",
                      py: "4px",
                      borderRadius: "10px",
                    }}
                  >
                    {wedding.place}
                  </Typography>
                </Box>
              </Paper>

              <Box className="bg-white mx-10 ml-0 p-4 rounded-tr-2xl rounded-b-2xl -translate-y-4">
                <Typography variant="body2" color="textPrimary">
                  {wedding.data}
                </Typography>
                <Box className="flex  items-center gap-4 mt-4">
                  <Box
                    sx={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "primary.main",
                    }}
                  ></Box>
                  <Typography variant="h6" gutterBottom color="primary.main">
                    {wedding.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WeedingInsparation;
