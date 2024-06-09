import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import api from "./Axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = ({ male }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await api.get('/blog');
                if (response.status === 200) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.log(`error on admin-login: ${error}`);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        if (blogs.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [blogs]);

    const getFilteredBlogs = () => {
        return blogs.filter(blog => blog.blogs[0].male === male);
    };

    const getVisibleSlides = () => {
        const filteredBlogs = getFilteredBlogs();
        const slides = [];
        for (let i = 0; i < 3; i++) {
            slides.push(filteredBlogs[(currentIndex + i) % filteredBlogs.length]);
        }
        return slides;
    };

    const getVisibleSlideMobile = () => {
        const filteredBlogs = getFilteredBlogs();
        const currentIndexMobile = currentIndex % filteredBlogs.length;
        return [filteredBlogs[currentIndexMobile]];
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        blogs.length === 0 ?
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-2xl text-gray-600 py-5">Loading blogs...</p>
            </div>
            :
            <div className="mb-20">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center px-36 pt-10 pb-20">
                        <p className="flex-grow-0 flex-shrink-0 text-[40px] text-left text-neutral-800">Blogs</p>
                    </div>
                    <div className="md:flex w-full gap-28 hidden px-5">
                        {getVisibleSlides()?.map((slide, i) => (
                            <BlogCard key={i} isVisible={i === 1} data={slide} />
                        ))}
                    </div>
                    <div className="flex md:hidden w-full gap-28 ">
                        {getVisibleSlideMobile()?.map((slide, i) => (
                            <BlogCard key={i} isVisible={i === 1} data={slide} />
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Blog;
