import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navigate = useNavigate()

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <div className="absolute w-full h-full bg-cover bg-center p-10" style={{ backgroundImage: `url(/man-sits-end-trolltunga-before-mountains-1.jpeg)` }}>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br z-0 from-white via-transparent to-black opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-700 to-black opacity-30" />
                </div>
                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
                    <FaBars className="text-white text-2xl md:text-3xl cursor-pointer" onClick={toggleNav} />
                </div>
                {isNavOpen && (
                    <div className="absolute top-0 right-0 w-64 h-full bg-transparent backdrop-blur-lg shadow-lg z-40 flex flex-col items-start p-4">
                        <button className="text-white font-bold text-lg mb-4" onClick={toggleNav}>Close</button>
                        <nav className="flex flex-col space-y-2">
                            <a onClick={() => { navigate('/about-us') }} className="text-gray-400 cursor-pointer">About Us</a>
                            <a onClick={() => { navigate('/blogs') }} className="text-gray-400 cursor-pointer">Blogs</a>
                            <a onClick={() => navigate('/Photo-Gallery')} className="text-gray-400 cursor-pointer">Gallery</a>
                            <a onClick={() => navigate('/pink-passport')} className="text-gray-400 cursor-pointer">Pink Passport</a>
                            <a onClick={() => navigate('/Coprate-TravelPage')} className="text-gray-400 cursor-pointer">Corporate travel</a>
                            <a onClick={() => navigate('/Land-Explore')} className="text-gray-400 cursor-pointer">LandXplorer</a>
                            {/* <a onClick={() => navigate('/Payment-Form')} className="text-gray-400 cursor-pointer">Make Payment</a> */}
                        </nav>
                    </div>
                )}
                <div className='md:flex justify-between relative '>
                    <div className='md:w-1/2 p-4 md:p-7 flex flex-col gap-10 md:gap-0 '>
                        <div className='flex md:justify-start justify-center'>
                            <img src="/TRIP999Artboard 1@4x (1).png" alt="logo" className='w-32 md:w-48' />
                        </div>
                        <div className='flex flex-col gap-8 md:gap-16  '>
                            <div className={`pt-12 md:pt-28 flex flex-col items-center md:items-start ${isVisible ? 'text-fade-in' : ''}`}>
                                <div className='text-center md:text-left  w-screen md:w-full '>
                                    <p className="md:text-2xl text-1xl font-bold uppercase  text-white  mb-4 ">
                                        <span>Desigining your</span>
                                        <span>Dream, one Trip </span>
                                        <span >At a Time</span>
                                    </p>
                                    <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#ffa500] leading-tight">
                                        <span className='text-white'>Book</span> <span className=' custom-line-through text-white'>a Trip</span>
                                        <br />
                                        <span className='md:pl-48'>an Experience</span>
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center md:justify-start gap-4'>
                                <img
                                    src="play-removebg-preview-1.png"
                                    className="w-6/12  md:w-6/12 lg:w-4/12"
                                    alt="Play Button 1"
                                />
                                <img
                                    src="play-removebg-preview-2.png"
                                    className="w-6/12 md:w-6/12 lg:w-4/12"
                                    alt="Play Button 2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`md:w-1/2 p-4 md:p-8 ${isVisible ? 'fade-in' : ''}`}>
                        <div className='w-full'>
                            <img src="/phone-image-tripify.png" alt="Illustration" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;
