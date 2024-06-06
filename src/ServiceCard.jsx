import React, { useEffect, useState } from 'react';

const ServiceCard = ({ service, isCenter, animate }) => {
    const [transitionClass, setTransitionClass] = useState('');

    useEffect(() => {
        const transitionTimeout = setTimeout(() => {
            setTransitionClass(isCenter ? 'transition-all duration-300 ease-in-out' : '');
        }, 100);

        return () => clearTimeout(transitionTimeout);
    }, [isCenter]);

    useEffect(() => {
        if (animate) {
            const animateTimeout = setTimeout(() => {
                setTransitionClass('');
            }, 500);

            return () => clearTimeout(animateTimeout);
        }
    }, [animate]);

    return (
        <div
            className={`service-card rounded-[15px] bg-gray-50 border shadow-2xl p-5 md:w-4/12 w-full ${isCenter ? 'center border-2' : ''} ${animate ? 'animate-enter' : ''} ${transitionClass}`}
        >
            <div className="ml-4 flex flex-col justify-center">
                <div className='pb-5'>
                    <div className=''>
                        <img src={service?.image} alt="img" className="w-10 h-10 mb-4" />
                    </div>
                    <p className="text-2xl font-bold text-black">{service?.heading}</p>
                </div>
                <p className="mt-2 text-base text-black pb-5">
                    {service?.description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
