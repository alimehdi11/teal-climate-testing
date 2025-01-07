import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import React Icons
import { MdArrowBack } from "react-icons/md";
import blogsData from "../Data/blogData";

const SingleBlog = () => {
  const { id } = useParams(); // Extract blog ID from the URL
  const navigate = useNavigate();

  // Find the blog by ID
  const blog = blogsData.find((b) => b.id === parseInt(id));



  return (
    <div className="container mx-auto py-12 px-4 lg:px-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn-primary text-white  bg-tc-blue dark:bg-tc-dark-blue mb-5 "
      >
        <MdArrowBack size={20} className="inline"/>
        Back
      </button>

      {/* Blog Content */}
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        {/* Blog Image */}
        <div className="relative group">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[30rem] object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-tc-blue dark:bg-tc-dark-blue text-white text-xs px-3 py-1 rounded-lg shadow-md">
            {blog.date}
          </div>
        </div>

        {/* Blog Text Content */}
        <div className="p-8 lg:p-12">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm mb-6">
            <span>
              Written by: <span className="font-semibold">{blog.author}</span>
            </span>
            <span>|</span>
            <span>{blog.date}</span>
          </div>

          {/* Blog Description */}
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {blog.description}
          </p>

          {/* Blog Body Content */}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quibusdam aliquid debitis ex magni deserunt, voluptatem nisi sed
              iusto pariatur earum eos ullam. Quaerat sit cupiditate amet
              dolorum suscipit aliquam!
            </p>

            <p>
              In hac habitasse platea dictumst. Vestibulum vel lorem volutpat,
              vehicula libero nec, malesuada massa. Suspendisse potenti. Etiam
              volutpat nibh a leo vestibulum, id sollicitudin orci aliquet.
            </p>

            <p>
              Nulla facilisi. Praesent non magna vel arcu fringilla suscipit.
              Curabitur id tincidunt sem, nec volutpat magna. Integer vel orci a
              mauris facilisis luctus nec a mauris.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Loved this blog? Share it with others!
        </h3>
        <div className="flex justify-center gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <FaFacebook size={20} />
            Facebook
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-600 transition-all duration-300"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <FaTwitter size={20} />
            Twitter
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900 transition-all duration-300"
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
