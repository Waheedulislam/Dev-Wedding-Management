/* eslint-disable react/prop-types */
// BlogCard.jsx

import { Avatar, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const BlogCard = ({ image, title, author, date, description }) => {
  return (
    <div className="my-4 mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt="Blog cover"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Blog
          </div>
          <Typography
            variant="h5"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </Typography>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <Avatar
              className="mr-2"
              alt={author}
              src="/static/images/avatar/1.jpg"
            />
            <span className="font-medium">{author}</span>
            <AccessTime className="ml-4 mr-1" fontSize="small" />
            <span>{date}</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm">{description}</p>
          <a href="#" className="text-indigo-500 mt-4 block font-semibold">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
