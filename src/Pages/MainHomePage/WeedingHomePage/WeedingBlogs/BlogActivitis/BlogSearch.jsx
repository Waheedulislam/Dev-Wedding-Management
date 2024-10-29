import { TextField, Button } from "@mui/material";

const BlogSearch = () => {
  return (
    <div className="border p-6  rounded-md shadow bg-white">
      <div className="">
        <h2 className="mb-5  font-bold text-gray-800 border-b border-gray-200">
          Blogs
        </h2>
        <div className="relative">
          <TextField
            id="outlined-basic"
            label="Search for blogs..."
            variant="outlined"
            className="mb-5 w-full"
            InputProps={{
              endAdornment: (
                <Button
                  variant="text"
                  color="primary"
                  size="small"
                  className="absolute top-0 right-0 bg-slate-400"
                >
                  Search
                </Button>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
