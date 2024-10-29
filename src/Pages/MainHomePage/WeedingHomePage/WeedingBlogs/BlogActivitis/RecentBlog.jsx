import { Box, Typography, Divider } from "@mui/material";

const RecentBlog = () => {
  return (
    <Box className="border p-6 my-4 rounded-md shadow bg-white">
      <Typography
        variant="h5"
        className="mb-5 font-bold text-gray-800 border-b border-gray-200  "
      >
        Recent posts
      </Typography>
      <Box mt={2}>
        <Typography
          variant="body1"
          className="cursor-pointer hover:text-blue-300  mb-2"
        >
          Tips For choosing perfect wedding venue
        </Typography>
        <Divider sx={{ my: 1, borderStyle: "dashed" }} />
      </Box>
      <Box>
        <Typography
          variant="body1"
          className="cursor-pointer hover:text-blue-300 mb-2"
        >
          Budget Friendly Wedding Planning Tips
        </Typography>
        <Divider sx={{ my: 1, borderStyle: "dashed" }} />
      </Box>
      <Box>
        <Typography
          variant="body1"
          className="cursor-pointer hover:text-blue-300 mb-2"
        >
          Tips For choosing perfect wedding venue
        </Typography>
        <Divider sx={{ my: 1, borderStyle: "dashed" }} />
      </Box>
    </Box>
  );
};

export default RecentBlog;
