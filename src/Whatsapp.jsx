import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const Whatsapp = () => {
    const [hovered, setHovered] = React.useState(false);

    const props = useSpring({
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        config: { tension: 300, friction: 10 },
    });

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/9072121217', '_blank');
    };

    return (
        <animated.div
            style={props}
            className="fixed top-3/4 md:top-24 lg:top-3/4 md:left-[93%] left-[80%] transform -translate-x-1/2 mt-4 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg cursor-pointer flex items-center space-x-2 z-50"
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FaWhatsapp className="text-2xl" />
        </animated.div>
    );
}

export default Whatsapp;
