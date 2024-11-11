import { Box, Typography } from "@mui/material";

const RecentComments = () => {
  return (
    <Box className="border p-6 my-4 rounded-md shadow bg-white">
      <Typography
        variant="h5"
        className="mb-5 font-bold text-gray-800 border-b border-gray-200"
      >
        Recent Comments
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" className="mb-2 text-gray-700">
          No comments to show
        </Typography>
      </Box>
    </Box>
  );
};

export default RecentComments;
