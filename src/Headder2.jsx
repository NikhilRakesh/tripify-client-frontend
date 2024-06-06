import React, { useEffect, useState } from 'react';
import './styles.css';

const Header2 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <div className="absolute w-full h-full bg-cover bg-center p-10" style={{ backgroundImage: `url(/man-sits-end-trolltunga-before-mountains-1.jpeg)` }}>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br z-0 from-white via-transparent to-black opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-700 to-black opacity-30" />
                </div>
                <div className='md:flex justify-between relative '>
                    <div className='md:w-1/2 p-4 md:p-7 flex flex-col gap-10 md:gap-0 '>
                        <div className='flex md:justify-start justify-center'>
                            <img src="/TRIP999Artboard 1@4x (1).png" alt="logo" className='w-32 md:w-48' />
                        </div>
                        <div className='flex flex-col gap-8 md:gap-16  '>
                            <div className={`pt-12 md:pt-28 flex flex-col items-center md:items-start ${isVisible ? 'text-fade-in' : ''}`}>
                                <div className='text-center md:text-left  w-screen md:w-full '>
                                    {/* <p className="md:text-2xl text-1xl font-bold uppercase text-[#ffa500] mb-4 ">
                                    Designing YOUR dream, One Trip at a time
                                    </p> */}
                                    <p className="md:text-2xl text-1xl font-bold uppercase  text-white  mb-4 ">
                                    <span>Desigining your</span>
                                      
                                        <span>Dream, one Trip </span>
                                      
                                        <span >At a Time</span>
                                    </p>
                                    {/* <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                                        <span>Travel, enjoy</span>
                                        <br />
                                        <span>and live a new</span>
                                        <br />
                                        <span>and full life</span>
                                    </p> */}
                                    <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#ffa500] leading-tight">
                                    Book <span className='line-through text-white'>a Trip</span> <br /><span>an Experience</span>
                                        
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
                            <img src="/Group 1000001756.png" alt="Illustration" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;
