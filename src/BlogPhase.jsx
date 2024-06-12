import React from 'react';
import { format } from 'date-fns';
import './styles.css'
const BlogPhase = ({ blog, index }) => {
  console.log('blog', blog, index);

  return (
    <div className="my-8 p-4 md:p-6 ">
      <div className="relative mb-6 group">
        {index > 0 && <div className="py-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight transition duration-500 ease-in-out hover:text-gray-700 hover:shadow-lg">
            {blog.header}
          </h1>
        </div>}
        <img
          src={blog.image}
          alt={blog.imageCaption}
          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
        />
      </div>
      <div className="px-4 py-5 md:px-6">
        <p className="text-gray-800 text-sm md:text-base lg:text-lg">
          {blog.imageCaption}
        </p>
      </div>
      <div className="px-4 py-6">
        <p className="text-gray-800 font-serif leading-relaxed whitespace-pre-line">
          {blog.introduction}
        </p>
      </div>
      <div className="px-4 py-6">
        { blog.sections.map((section, index) => (
          <div key={index} className="mb-8 ">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-gray-800">
              {section.subHeader}
            </h3>
            <div>
              <p className="text-gray-800 text-base  leading-relaxed whitespace-normal break-words overflow-hidden">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogPhase;
