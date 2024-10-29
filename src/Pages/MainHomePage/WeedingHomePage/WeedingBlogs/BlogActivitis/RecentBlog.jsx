import { Container, Typography, Button } from "@mui/material";

const RecentBlog = () => {
  return (
    <Container className="p-4">
      <Typography variant="h4" className="mb-4">
        Recent Blogs
      </Typography>
      <Button variant="contained" color="primary">
        View All
      </Button>
    </Container>
  );
};

export default RecentBlog;
