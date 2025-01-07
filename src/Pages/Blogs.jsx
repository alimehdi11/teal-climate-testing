import React, { useState } from "react";
import BlogCard from "../Components/Ui/BlogCard";
import blogsData from "../Data/blogData";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on the search query
  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-white">
          Teal Climate Blogs
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Stay updated with the latest insights and innovations on carbon
          emissions, climate change, and sustainable solutions. Together, we can
          build a greener future.
        </p>
      </div>

      {/* Search Section */}
      <div className="container mx-auto text-center mb-16">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-tc-blue dark:focus:ring-tc-dark-blue bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Blog Cards Section */}
      <div className="container mx-auto lg:px-4 min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-gray-600 dark:text-gray-400 col-span-full text-center">
              No blogs found matching your search.
            </p>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 h-[400px] flex items-center max-w-[900px] mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="dark:text-gray-200 mb-6">
            Get the latest updates on climate change and sustainability directly
            in your inbox.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 dark:text-gray-200"
            />
            <button className="px-6 py-2 bg-gray-200 text-tc-blue font-bold rounded-r-lg hover:bg-gray-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
