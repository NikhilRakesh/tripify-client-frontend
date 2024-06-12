import React, { useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from './Axios';
import LoadingSpinner from './LoadingSpinner';
import { motion } from 'framer-motion';
import "./styles.css";
import BlogPhase from './BlogPhase';
import DotPattern from './magicui/DotPatternProps';
import EnquiryForm2 from './EnquiryForm2';

const BlogPage = () => {
  const [blog, setBlog] = useState({});
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { id } = useParams();
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get(`/blog/${id}`);
        if (response.status === 200) {
          setBlog(response.data);
        }
      } catch (error) {
        console.log(`error on admin-login: ${error}`);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const response = await api.get('/blog');
        if (response.status === 200) {
          setRelatedBlogs(response.data);
        }
      } catch (error) {
        console.log(`error on admin-login: ${error}`);
      }
    };

    fetchBlogs();
    fetchRelatedBlogs();
  }, [id]);

  const isEmpty = Object.keys(blog).length === 0;

  const truncateText = (text, maxLength) => {
    return text?.length <= maxLength ? text : `${text?.slice(0, maxLength)}...`;
  };

  const Navigate = useNavigate()

  return isEmpty ? (
    <LoadingSpinner />
  ) : (


    <div className="flex flex-col md:flex-row  gap-8 relative h-screen  bg-gray-200 z-0 ">
      <div className='opacity-25 -z-0'>
        <DotPattern width={16} height={16} cx={2} cy={2} cr={2} />
      </div>
      <div className='bg-gradient-to-r from-[#ce8936] via-[#f6c871] to-[#f1b852] md:flex px-5 pb-36 absolute -z-10 w-full h-1/2'>
      </div>
      {/* Main Blog Content */}
      <div className='md:fixed h-screen overflow-y-scroll scrollbar'>

        <div className='md:flex px-5 pb-36 bg-transparent absolute -z-10 w-full'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='flex justify-center'
          >
            <img src="/blogwomen-removebg-preview.png" alt="" className='md:w-8/12 w-6/12 ' />
          </motion.div>

          <motion.div
            className='text-white md:text-6xl text-5xl m-auto font-bold'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 >Tripifyme Times</h1>
            <p className='text-lg text-black p-2'>Your Travel Updates</p>
          </motion.div>
        </div>

        <div className='md:flex gap-8 md:px-10 px-4 m-3'>

          <div onClick={() => { Navigate('/') }} className='absolute top-0 '>
            <img src="/TRIP999Artboard 1@4x (1) (Copy).png" alt="" className='w-28 pt-5  cursor-pointer' />
          </div>

          <motion.div
            className="w-full md:w-8/12 bg-transparent border rounded-lg shadow-lg overflow-hidden p-8  lg:mt-[350px] mt-[420px] backdrop-blur-md	mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" py-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 mb-6">{blog.blogs[0].header}</h2>
            </div>
            <motion.div
              className="bg-transparent backdrop-blur-lg bg-white bg-opacity-30 border border-white rounded-full py-4 px-6 flex items-center justify-between "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center ">
                <img src="/tripify-icone.png" alt="Author Logo" className="w-12 h-12 rounded-full shadow-lg" />
                <div className="ml-4">
                  <h4 className="text-black font-bold text-lg">{blog.blogs[0].author}</h4>
                  <p className="text-black text-sm">author</p>
                </div>
              </div>
              <motion.div
                className="text-black text-2xl font-bold cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/like.png" alt="" className='w-8' />
              </motion.div>
            </motion.div>
            {blog.blogs.map((blogItem, index) => (
              <BlogPhase key={index} blog={blogItem} index={index} />
            ))}
          </motion.div>

          {/* Related Blogs Sidebar */}
          <motion.div
            className="w-full md:w-4/12 bg-transparent border-gray-200 rounded-lg shadow-md overflow-auto lg:mt-[350px]  backdrop-blur-lg border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4">
              <div className=' rounded-lg mb-5'>
                <EnquiryForm2 />
              </div>
              <h3 className="text-xl font-semibold mb-4">Related Blogs</h3>
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={index}
                  className="mt-4 border rounded-lg p-4 cursor-pointer bg-white bg-opacity-20 flex items-center shadow-md transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => Navigate(`/blogs/${relatedBlog._id}`)}
                >
                  <div className="w-1/3 mr-4">
                    <img src={relatedBlog.blogs[0].image} alt={relatedBlog.blogs[0].header} className="w-full h-auto rounded" />
                  </div>
                  <div className="w-2/3">
                    <h4 className="font-medium text-lg mb-1">{relatedBlog.blogs[0].header}</h4>
                    {/* <p className="text-sm text-gray-600">{format(new Date(relatedBlog.date), 'MMMM d, yyyy')}</p> */}
                    <p className="text-sm text-gray-800 mt-2 truncate">{truncateText(relatedBlog.blogs[0].introduction, 100)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>

  );
};

export default BlogPage;
