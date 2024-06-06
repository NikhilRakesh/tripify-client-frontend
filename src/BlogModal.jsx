import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const BlogModal = ({ isOpen, onClose, data }) => {
    const fade = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 300 },
    });

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <animated.div style={fade} className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-gray-600 text-sm mb-2">{data.date}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h2>
                <p className="text-gray-700">{data.description}</p>
            </animated.div>
        </div>
    );
};

export default BlogModal;
