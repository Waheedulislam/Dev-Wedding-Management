import { Container, Grid } from "@mui/material";
import BlogBanner from "../BlogBanner";
import BlogActivitisHome from "../../WeedingBlog/BlogActivitis/BlogActivitisHome";
import BlogDetailsCard from "./BlogDetailsCard";

const BlogDetails = () => {
  return (
    <div>
      <BlogBanner
        imageUrl="https://img.freepik.com/premium-photo/picture-water-sky-with-some-leaves-it_1044943-50255.jpg"
        title="Budget-Friendly Wedding Planning Tips"
        subtitle="Blog Details"
        textColor="text-black"
      />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <BlogDetailsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogActivitisHome />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BlogDetails;
