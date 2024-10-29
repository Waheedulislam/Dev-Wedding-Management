import { TextField, Button } from "@mui/material";

const BlogSearch = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h2 className="mb-5">Search for Blogs</h2>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          className="mb-5"
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
};

export default BlogSearch;
