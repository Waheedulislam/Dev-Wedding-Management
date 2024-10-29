import { Box, Typography } from "@mui/material";

const Archive = () => {
  return (
    <Box className="border p-6 my-4 rounded-md shadow bg-white">
      <Typography
        variant="h5"
        className="mb-5 font-bold text-gray-800 border-b border-gray-200"
      >
        Archives
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" className="mb-2 text-gray-700">
          March 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default Archive;
