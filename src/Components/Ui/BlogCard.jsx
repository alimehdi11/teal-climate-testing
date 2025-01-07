import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Blog Image with Zoom Effect */}
      <div className="relative group overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 dark:bg-tc-dark-blue bg-tc-blue text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          {blog.date}
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col flex-grow p-5">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 dark:text-gray-100 mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {blog.description}
        </p>

        {/* Author and Read More - Stays at Bottom */}
        <div className="mt-auto flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
          <span className="flex items-center">
            <img
              src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=gy4VMn6_ZqVQ2HBCtDwyT3hPYrZgdDnxGE1n8BfVJA4="
              alt={blog.author}
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            {blog.author}
          </span>
          <NavLink
            to={`/blogs/blog/${blog.id}`}
            className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            Read More →
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
