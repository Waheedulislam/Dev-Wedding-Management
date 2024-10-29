import BlogCard from "../BlogCard/BlogCard";

const blogData = [
  {
    id: 1,
    image:
      "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-1-780x450.jpg",
    title: "Tips For Choosing The Perfect Wedding Venue",
    author: "admin",
    date: "March 7, 2024",
    description:
      "Your wedding venue sets the stage for one of the most important days of your life, so it’s essential to choose wisely...",
  },
  {
    id: 2,
    image:
      "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-1-780x450.jpg",
    title: "How to Plan Your Wedding Budget",
    author: "admin",
    date: "March 10, 2024",
    description:
      "Planning a wedding can be overwhelming, especially when it comes to budgeting. Here are some tips to keep your finances in check...",
  },
  {
    id: 3,
    image:
      "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-1-780x450.jpg",
    title: "Top Wedding Photography Tips",
    author: "admin",
    date: "March 15, 2024",
    description:
      "Capture the memories of your special day with these expert wedding photography tips...",
  },
];

const WeddingBlog = () => {
  return (
    <>
      <div className="p-4 my-4">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            description={blog.description}
          />
        ))}
      </div>
    </>
  );
};

export default WeddingBlog;
