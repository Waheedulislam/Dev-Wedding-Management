import { Box, Typography } from "@mui/material";

const BlogCategory = () => {
  return (
    <Box className="border p-6 my-4 rounded-md shadow bg-white">
      <Typography
        variant="h5"
        className="mb-5 font-bold text-gray-800 border-b border-gray-200  "
      >
        Categories
      </Typography>
      <Box mt={2}>
        <Typography
          variant="body1"
          className="cursor-pointer hover:text-blue-300  mb-2"
        >
          Honeymoon
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          className="cursor-pointer hover:text-blue-300 mb-2"
        >
          Seasonal Ideas
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          className="cursor-pointer hover:text-blue-300 mb-2"
        >
          Vanue selection
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCategory;
