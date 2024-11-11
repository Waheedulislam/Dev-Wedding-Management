import Archive from "./Archive";
import BlogCategory from "./BlogCategory";
import BlogSearch from "./BlogSearch";
import RecentBlog from "./RecentBlog";
import RecentComments from "./RecentComment";

const BlogActivitisHome = () => {
  return (
    <div className="my-6">
      <BlogSearch />
      <RecentBlog />
      <BlogCategory />
      <RecentComments />
      <Archive />
    </div>
  );
};

export default BlogActivitisHome;
