// BlogDetailsCard.jsx

import { Avatar, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const blogData = [
  {
    id: 1,
    image:
      "https://designingmedia.com/bridely/wp-content/uploads/2024/01/blog-img-1-780x450.jpg",
    title: "Tips For Choosing The Perfect Wedding Venue",
    author: "admin",
    date: "March 7, 2024",
    description:
      "Your wedding venue sets the stage for one of the most important days of your life, so it’s essential to choose wisely  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id quidem quaerat recusandae, quo sint reiciendis perspiciatis maiores odio magni at consequuntur, amet ea exercitationem eligendi vitae. Laborum, incidunt laudantium.",
  },
];

const BlogDetailsCard = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="my-4 mx-auto bg-white  overflow-hidden  ">
      {blogData.map((blog) => (
        <div key={blog.id}>
          <div className="md:flex flex-col gap-4">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full"
                src={blog.image}
                alt="Blog cover"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Blog
              </div>
              <Typography
                variant="h5"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer"
              >
                {blog.title}
              </Typography>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Avatar
                  className="mr-2"
                  alt={blog.author}
                  src="/static/images/avatar/1.jpg"
                />
                <span className="font-medium">{blog.author}</span>
                <AccessTime className="ml-4 mr-1" fontSize="small" />
                <span>{blog.date}</span>
              </div>
              <p className="mt-2 text-gray-500 text-sm">{blog.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetailsCard;
