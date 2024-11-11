import { Container, Grid } from "@mui/material";
import BlogBanner from "./BlogBanner";
import WeddingBlog from "./Blog/Blog";
import BlogActivitisHome from "./BlogActivitis/BlogActivitisHome";

const Blog = () => {
  return (
    <div>

      <BlogBanner
        imageUrl="https://img.freepik.com/premium-photo/picture-water-sky-with-some-leaves-it_1044943-50255.jpg"
        title="Blog"
        subtitle="Home"
        textColor="text-black"
      />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <WeddingBlog />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogActivitisHome />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
