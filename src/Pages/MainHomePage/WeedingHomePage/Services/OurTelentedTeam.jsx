import { Container, Typography, Grid, Box, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { motion } from "framer-motion";

// Sample data for team members
const teamMembers = [
  {
    name: "Mikel Shipon",
    role: "Wedding Planner",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Random person image
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Emily Grace",
    role: "Event Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Random person image
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "John Doe",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/3.jpg", // Random person image
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
];

const OurTalentedTeam = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container maxWidth="lg" className="text-center py-10">
      <Box mb={6}>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Meet Our Talented Team
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Meet the Experts Behind Your Dream Wedding
        </Typography>
      </Box>
      <Grid container spacing={4} className="mt-5">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="group">
            <Box className="relative overflow-hidden rounded-lg">
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full rounded-lg  "
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <Box className="absolute top-0 right-0 flex-col items-end justify-center hidden group-hover:flex h-full w-full bg-black bg-opacity-30 text-center z-10">
                {member.socialLinks.facebook && (
                  <IconButton
                    component="a"
                    href={member.socialLinks.facebook}
                    target="_blank"
                    aria-label="facebook"
                  >
                    <Facebook className="bg-[#9ACCC9] p-1 rounded-full w-10 h-10 text-white" />
                  </IconButton>
                )}
                {member.socialLinks.instagram && (
                  <IconButton
                    component="a"
                    href={member.socialLinks.instagram}
                    target="_blank"
                    aria-label="instagram"
                  >
                    <Instagram className="bg-[#9ACCC9] p-1 rounded-full w-10 h-10 text-white" />
                  </IconButton>
                )}
                {member.socialLinks.twitter && (
                  <IconButton
                    component="a"
                    href={member.socialLinks.twitter}
                    target="_blank"
                    aria-label="twitter"
                  >
                    <Twitter className="bg-[#9ACCC9] p-1 rounded-full w-10 h-10 text-white" />
                  </IconButton>
                )}
              </Box>
            </Box>

            <Box className="bg-[#9ACCC9] group-hover:bg-red-400 p-4 text-white rounded-tl-lg rounded-b-lg mx-4 md:mx-10 -translate-y-6 transition-all duration-300">
              <Typography variant="h6" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="body2">{member.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurTalentedTeam;
