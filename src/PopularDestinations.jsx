import React from 'react';
import DestinyCard from './DestinyCard';
import worldMapImage from '/world_map_png28-2.png';
import AnimatedWorldMap from './AnimatedWorldMap'; // Import the new component

const PopularDestinations = () => {

    const destinations = [
        {
            id: 1,
            image: 'rectangle-15.png',
            name: 'Thailand',
            spots: '20+ Spots',
            duration: '2D & 3N'
        },
        {
            id: 2,
            image: 'rectangle-16.png',
            name: 'Indonesia',
            spots: '25+ Spots',
            duration: '3D & 3N'
        },
        {
            id: 3,
            image: 'rectangle-17.png',
            name: 'New Zealand',
            spots: '20+ Spots',
            duration: '3D & 2N'
        },
        {
            id: 1,
            image: 'rectangle-15.png',
            name: 'Thailand',
            spots: '20+ Spots',
            duration: '2D & 3N'
        },
    ];


    return (
        <div className='py-10'>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">Explore Our Popular Destinations</h2>
                <p className="text-lg text-gray-600">Discover amazing places around the world</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 md:gap-0'>
                <div className='lg:w-1/2'>
                    {/* <img src={worldMapImage} alt="World Map" className="w-full h-auto opacity-60 object-cover md:border border-black" /> */}
                    <AnimatedWorldMap />
                </div>
                <div className='lg:w-1/2 px-10 flex flex-col gap-5 items-center justify-center '>
                    {
                        destinations.map((destiny, index) => (
                            <DestinyCard key={destiny.id} destiny={destiny} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
