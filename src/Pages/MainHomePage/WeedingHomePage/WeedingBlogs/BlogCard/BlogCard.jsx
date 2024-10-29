/* eslint-disable react/prop-types */
// BlogCard.jsx

import { Avatar, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, title, author, date, description }) => {
  return (
    <div className="my-4 mx-auto bg-white rounded-xl shadow-md overflow-hidden group">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-72 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
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
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer"
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
          <Link
            to={`/weedingHome/weedingBlogs/${id}`}
            className="text-indigo-500 mt-4 block font-semibold"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
