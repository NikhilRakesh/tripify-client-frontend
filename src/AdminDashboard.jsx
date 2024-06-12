import React, { useEffect, useState } from 'react';
import './styles.css';
import api, { getCsrfTokenFromCookies, get_api_form } from './Axios';
import Cookies from 'js-cookie';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);

    const [headingText, setHeadingText] = useState('Welcome to the Admin Dashboard');
    const [refresh, setrefresh] = useState(true);
    const [Loading, setLoading] = useState(false);
    const [Enquires, setEnquires] = useState([]);


    const navigate = useNavigate()

    const headings = [
        'Welcome to the Admin Dashboard',
        'Manage Your Content',
        'View Analytics',
        'User Management'
    ];



    useEffect(() => {
        Fetchblogs()
        fetchEnquires()
        const intervalId = setInterval(() => {
            const currentIndex = headings.indexOf(headingText);
            const nextIndex = (currentIndex + 1) % headings.length;
            setHeadingText(headings[nextIndex]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [refresh]);

    const Fetchblogs = async () => {
        try {
            const response = await api.get('/blog');
            if (response.status == 200) {
                setBlogs(response.data)
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            console.log(`error on on admin-login:${error} `);
        }
    }

    const handleAddBlog = async (blogData) => {
        
        setLoading(true)

        try {
            const response = await get_api_form().post('/blog', blogData);
            if (response.status === 201) setrefresh(!refresh)
        } catch (error) {
            setLoading(false)
            console.log(`error on on admin-login:${error} `);
        }
    };

    const handleEditBlog = (index, updatedBlog) => {
        const updatedBlogs = [...blogs];
        updatedBlogs[index] = updatedBlog;
        setBlogs(updatedBlogs);
    };

    const handleDeleteBlog = (index) => {
        const updatedBlogs = blogs.filter((_, i) => i !== index);
        setBlogs(updatedBlogs);
    };

    const setLoadingTrue = () => {
        setLoading(true)
    }

    const callRefresh = () => {
        setrefresh(!refresh)
    }

    const fetchEnquires = async () => {
        try {
            const response = await api.get('/enquiry');
            if (response.status === 200) {
                setEnquires(response.data)
            }
        } catch (error) {
            console.log(`error on admin-login: ${error}`);
        }
    }


    return (
        <div className="min-h-screen bg-[]">
            <div className="py-6 sm:px-6 lg:px-8">
                <div className='flex justify-end'>
                    <button className='text-white bg-black px-4 py-1 rounded-lg' onClick={() => { navigate('/admin-login') }}>logout</button>
                </div>
                <h1 className="text-4xl font-bold text-center my-10 neon-glow animate-pulse">
                    {headingText}
                </h1>
                <div className='md:flex gap-5 md:p-0 p-5 '>
                    <div className="w-full  md:mt-10 bg-white  border-blue-600 p-5 rounded-lg border shadow-lg ">
                        <AddBlogForm onAddBlog={handleAddBlog} />
                    </div>

                </div>
                    {/* Blog List */}
                    <div className="mt-10 p-5  border-blue-600  bg-white  rounded-md border shadow-md">
                        <div className='overflow-y-scroll blog grid md:grid-cols-4 h-[500px] gap-8'>
                            {blogs.length === 0 ? (
                                [1, 2, 3, 4, 5].map((blog, index) => (
                                    <BlogItemSkeleton
                                        key={index}
                                        index={index}
                                        blog={blog}
                                        onEditBlog={handleEditBlog}
                                        callRefresh onDeleteBlog={handleDeleteBlog}
                                    />
                                ))
                            ) : (
                                blogs.map((blog, index) => (
                                    <BlogItem
                                        key={index}
                                        index={index}
                                        blog={blog}
                                        onEditBlog={handleEditBlog}
                                        onDeleteBlog={handleDeleteBlog}
                                        setLoadingTrue={setLoadingTrue}
                                        callRefresh={callRefresh}
                                    />
                                ))
                            )}
                        </div>
                    </div>

                {/* Inquiry Cards */}
                <div className="my-10 bg-gray-50 border rounded-md shadow-lg p-5 border-blue-600 overflow-x-auto">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Inquiries</h2>
                    {Enquires.length === 0 ? (
                        <div className='text-center p-8'>
                            <p>There are no enquiries...</p>
                        </div>
                    ) : (
                        <table className="w-full table-auto">
                            <thead>
                                <tr className='bg-gray-200'>
                                    <th className="py-3 px-6 text-left sm:px-4 md:px-6 lg:px-8 xl:px-10">Name</th>
                                    <th className="py-3 px-6 text-left sm:px-4 md:px-6 lg:px-8 xl:px-10">Phone</th>
                                    <th className="py-3 px-6 text-left sm:px-4 md:px-6 lg:px-8 xl:px-10">Date</th>
                                    <th className="py-3 px-6 text-left sm:px-4 md:px-6 lg:px-8 xl:px-10">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Enquires.map((enquiry, i) => (
                                    <EnquiryCard key={i} data={enquiry} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            {Loading && <LoadingSpinner />}
        </div>
    );
};

// Component for adding a new blog
const AddBlogForm = ({ onAddBlog }) => {
    const [blogs, setBlogs] = useState([createNewBlog()]);

    function createNewBlog() {
        return {
            header: '',
            author: '',
            image: null,
            imageCaption: '',
            introduction: '',
            sections: [{ subHeader: '', description: '' }],
            male: true,
        };
    }

    const handleBlogChange = (index, field, value) => {
        const newBlogs = [...blogs];
        newBlogs[index][field] = value;
        setBlogs(newBlogs);
    };

    const handleSectionChange = (blogIndex, sectionIndex, field, value) => {
        const newBlogs = [...blogs];
        newBlogs[blogIndex].sections[sectionIndex][field] = value;
        setBlogs(newBlogs);
    };

    const handleImageChange = (blogIndex, file) => {
        const newBlogs = [...blogs];
        newBlogs[blogIndex].image = file;
        setBlogs(newBlogs);
    };

    const addSection = (blogIndex) => {
        const newBlogs = [...blogs];
        newBlogs[blogIndex].sections.push({ subHeader: '', description: '' });
        setBlogs(newBlogs);
    };

    const addMoreBlog = () => {
        setBlogs([...blogs, createNewBlog()]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const uniqueKey = uuidv4();
        onAddBlog(blogs);
        setBlogs([createNewBlog()]); 
        // const blogsWithKey = blogs.map((blog) => ({ ...blog, key: uniqueKey }));
        // blogsWithKey.forEach((blog, index) => {
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //         const imageData = reader.result;
        //         const blogData = { ...blog };
        //         onAddBlog(blogData);
        //         if (index === blogs.length - 1) {
        //             // setBlogs([createNewBlog()]); 
        //         }
        //     };
        //     reader.readAsDataURL(blog.image);
        // });
    };

    return (
        <div className="flex space-x-8 ">
            <form onSubmit={handleSubmit} className="space-y-4 w-1/2 h-[1100px] overflow-y-scroll p-4">
                <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
                {blogs.map((blog, blogIndex) => (
                    <div key={blogIndex} className="space-y-4 border-b pb-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor={`header-${blogIndex}`} className="block text-sm font-medium text-gray-700">Header</label>
                            <input
                                id={`header-${blogIndex}`}
                                type="text"
                                placeholder="Header"
                                value={blog.header}
                                onChange={(e) => handleBlogChange(blogIndex, 'header', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor={`author-${blogIndex}`} className="block text-sm font-medium text-gray-700">Author</label>
                            <input
                                id={`author-${blogIndex}`}
                                type="text"
                                placeholder="Author"
                                value={blog.author}
                                onChange={(e) => handleBlogChange(blogIndex, 'author', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor={`image-${blogIndex}`} className="sr-only">Choose Image</label>
                            <input
                                id={`image-${blogIndex}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(blogIndex, e.target.files[0])}
                                className="border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor={`imageCaption-${blogIndex}`} className="block text-sm font-medium text-gray-700">Image Caption</label>
                            <input
                                id={`imageCaption-${blogIndex}`}
                                type="text"
                                placeholder="Image Caption"
                                value={blog.imageCaption}
                                onChange={(e) => handleBlogChange(blogIndex, 'imageCaption', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor={`introduction-${blogIndex}`} className="block text-sm font-medium text-gray-700">Introduction</label>
                            <textarea
                                id={`introduction-${blogIndex}`}
                                rows="4"
                                placeholder="Introduction"
                                value={blog.introduction}
                                onChange={(e) => handleBlogChange(blogIndex, 'introduction', e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 resize-none"
                                required
                            ></textarea>
                        </div>
                        {blog.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor={`subHeader-${blogIndex}-${sectionIndex}`} className="block text-sm font-medium text-gray-700">Sub Header</label>
                                    <input
                                        id={`subHeader-${blogIndex}-${sectionIndex}`}
                                        type="text"
                                        placeholder="Sub Header"
                                        value={section.subHeader}
                                        onChange={(e) => handleSectionChange(blogIndex, sectionIndex, 'subHeader', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor={`description-${blogIndex}-${sectionIndex}`} className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        id={`description-${blogIndex}-${sectionIndex}`}
                                        rows="4"
                                        placeholder="Description"
                                        value={section.description}
                                        onChange={(e) => handleSectionChange(blogIndex, sectionIndex, 'description', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addSection(blogIndex)}
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                        >
                            Add Section
                        </button>
                        <div className="flex items-center space-x-4">
                            <label htmlFor={`corporate-${blogIndex}`}>
                                <input
                                    type="radio"
                                    id={`corporate-${blogIndex}`}
                                    value="corporate"
                                    checked={blog.male}
                                    onChange={() => handleBlogChange(blogIndex, 'male', true)}
                                    className="mr-1"
                                />
                                Corporate
                            </label>
                            <label htmlFor={`womens-${blogIndex}`}>
                                <input
                                    type="radio"
                                    id={`womens-${blogIndex}`}
                                    value="womens"
                                    checked={!blog.male}
                                    onChange={() => handleBlogChange(blogIndex, 'male', false)}
                                    className="mr-1"
                                />
                                Women's
                            </label>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addMoreBlog}
                    className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
                >
                    Add More Blog
                </button>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full"
                >
                    Submit
                </button>
            </form>
            <div className="w-1/2 h-[1100px] overflow-y-scroll">
                <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
                <BlogPreview blogs={blogs} />
            </div>
        </div>
    );
};



// Component for displaying a blog item
const BlogItem = ({ index, blog, onEditBlog, onDeleteBlog, setLoadingTrue, callRefresh }) => {


    const handleDelete = async () => {
        setLoadingTrue()
        try {
            const response = await api.delete(`/blog/${blog._id}`);
            if (response.status == 200) {
                callRefresh()
            }

        } catch (error) {
            callRefresh()
            console.log(`error on on admin-login:${error} `);
        }
    };

    function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    }
    
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md p-4 m-2">
            <img src={blog.blogs[0]?.image} alt={blog.blogs[0]?.header} className="rounded-md object-cover w-full h-48 mb-4" />
            <div>
                <h3 className="text-xl font-semibold mb-2">{blog.blogs[0]?.header}</h3>
                <p className="text-gray-600 truncate">{truncateText(blog.blogs[0]?.introduction, 100)}</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

// Static Enquiry Card Component
const EnquiryCard = ({ data }) => {
    const [status, setStatus] = useState(data.status);

    const updateStatus = async () => {
        try {
            // Make a PUT request to update the status
            await api.put(`/enquiry/${data._id}`);
            setStatus(true);
        } catch (error) {
            console.error('Error updating enquiry status:', error);
        }
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">{data?.name}</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">{data?.phone}</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">{new Date(data.createdAt).toLocaleDateString()}</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
                {!status && (
                    <select className="border border-gray-300 rounded-md p-2" value={status ? "Completed" : "Pending"} onChange={updateStatus}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                )}
                {status && <span className={status ? "text-green-600" : ""}>{status ? "Completed" : "Pending"}</span>}
            </td>
        </tr>
    );
};


const BlogItemSkeleton = () => {
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md p-4 m-2">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
            </div>
        </div>
    );
};

const BlogPreview = ({ blogs }) => {
    return (
        <div className="space-y-8 shadow-lg ">
            {blogs.map((blog, blogIndex) => (
                <div key={blogIndex} className="p-4 border border-gray-300 rounded-md">
                    <h2 className="text-3xl font-semibold">{blog.header}</h2>
                    <p className="text-sm text-gray-500">Author: {blog.author}</p>
                    {blog.image && (
                        <div className="mt-4">
                            <img
                                src={URL.createObjectURL(blog.image)}
                                alt="Blog Preview"
                                className="w-full h-auto rounded-md"
                            />
                            <p className="text-sm text-gray-500 mt-2">{blog.imageCaption}</p>
                        </div>
                    )}
                    <p className="mt-4">{blog.introduction}</p>
                    {blog.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mt-6">
                            <h3 className="text-2xl font-semibold">{section.subHeader}</h3>
                            <p className="mt-2">{section.description}</p>
                        </div>
                    ))}
                    <div className="mt-4">
                        <span className="text-sm font-medium">Category: </span>
                        <span>{blog.male ? 'Corporate' : "Women's"}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
