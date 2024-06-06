import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

const headings = [
    "Specifically designed travel packages for Women",
    // "Explore the World with Confidence.",
    // "Travel Far, Travel Often.",
];

const sentences = [
    "We specialize in safe solo trips and curated group tours",
    "meticulously handpicking women-friendly transport, guides, and accommodation.",
    "Travel with confidence knowing your safety is our priority ",
];

const WomenTraveling = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },
    });

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <Parallax className="absolute inset-0 z-0" y={[-20, 20]}>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.7)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-700 to-black opacity-50" />
                </div>
            </Parallax>
            {/* Content */}
            <div className="relative z-10 text-white text-center lg:text-left w-full max-w-4xl mx-auto p-4 lg:p-8">
                <div>
                    <img src="/PinkPassport new logo.png" alt="" className='w-6/12' />
                </div>
                <animated.h1 className="text-4xl font-bold mb-4 text-shadow-lg lg:text-5xl xl:text-6xl" style={fade}>
                    {headings[index]}
                </animated.h1>
                <animated.p className="text-lg text-shadow-sm mt-2 lg:mt-4" style={fade}>
                    {sentences[index]}
                </animated.p>
                <animated.div className="mt-8 text-lg " style={fade}>
                    <p className="mb-2">Discover amazing destinations tailored for women travelers.</p>
                    <p className="mb-2">Connect with like-minded women from around the globe.</p>
                    <p className="mb-2">Access exclusive travel tips and resources.</p>
                </animated.div>
                <animated.div className="mt-8" style={fade}>
                    <Link to="/pink-passport">
                        <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 transform hover:scale-105 shadow-lg">
                            Explore Pink Passport
                        </button>
                    </Link>
                </animated.div>
            </div>
        </div>
    );
};

export default WomenTraveling;
