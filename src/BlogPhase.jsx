import React from 'react';
import { format } from 'date-fns';

const BlogPhase = ({ blog }) => {
  const formattedDate = blog?.date ? format(new Date(blog.date), 'MMMM d, yyyy') : '';

  return (
    <div className="my-8 p-4 ">
     
      <div className="relative mb-6 group">
        {/* Display the image */}
        <img 
          src={blog.image} 
          alt={blog.imageCaption} 
          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 px-4 py-2 rounded-br-lg">
          {/* Display the formatted date */}
          <p className="text-white text-sm font-semibold">{formattedDate}</p>
        </div>
      </div>
      <div className="px-4 py-5">
        {/* Display the image caption */}
        <p className="text-gray-800 text-sm">{blog.imageCaption}</p>
      </div>  
      <div className="px-4 py-6">
        {/* Display the introduction */}
        <p className="text-gray-800 font-serif text-lg leading-relaxed whitespace-pre-line">
          {blog.introduction}
        </p>
      </div>
      <div className="px-4 py-6">
        {/* Display the sections */}
        {blog.sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{section.subHeader}</h3>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPhase;
