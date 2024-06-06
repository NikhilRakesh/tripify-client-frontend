import React from "react";
import PackageCard from "./PackageCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

const Destinations = () => {

    const packages = [
        {
            image: 'rectangle-25.png',
            duration: '3 Days, 2 Nights',
            price: 500,
            description: 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency',
            country: 'Indonesia'
        },
        {
            image: 'rectangle-26.png',
            duration: '3 Days, 2 Nights',
            price: 800,
            description: 'Explore the Shrines and Blossoms here in this beautiful country',
            country: 'Japan'
        },
        {
            image: 'rectangle-25.png',
            duration: '3 Days, 2 Nights',
            price: 500,
            description: 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency',
            country: 'Indonesia'
        },
        {
            image: 'rectangle-26.png',
            duration: '3 Days, 2 Nights',
            price: 800,
            description: 'Explore the Shrines and Blossoms here in this beautiful country',
            country: 'Japan'
        },
    ];

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
        <div className="h-full my-16 ">
            <div className="w-full flex-vertical space-y-10">
                <p className="text-[40px] font-bold text-center text-black pt-10">
                    Best Packages For You
                </p>
                <div className="md:flex hidden justify-center gap-5 py-10">
                    <div className="w-1/12 rounded-[10px] bg-[#5385a0] flex flex-col justify-center items-center py-2">
                        <div className="text-white text-sm">
                            Hot Deals
                        </div>
                    </div>
                    <div className="w-1/12 rounded-[10px] bg-[#5385a0] flex flex-col justify-center items-center py-2">
                        <div className="text-white text-sm">
                            South Asia
                        </div>
                    </div>
                    <div className="w-1/12 rounded-[10px] bg-[#5385a0] flex flex-col justify-center items-center py-2">
                        <div className="text-white text-sm">
                            Honeymoon
                        </div>
                    </div>
                    <div className="w-1/12 rounded-[10px] bg-[#5385a0] flex flex-col justify-center items-center py-2">
                        <div className="text-white text-sm">
                            Europe
                        </div>
                    </div>
                    <div className="w-1/12 rounded-[10px] bg-[#5385a0] flex flex-col justify-center items-center py-2">
                        <div className="text-white text-sm">
                            More
                        </div>
                    </div>
                </div>

                <div className="mx-auto p-4 overflow-hidden  w-full ">
                    <Slider {...settings}>
                        {packages.map((pkg, index) => (
                            <div key={index} className="">
                                <PackageCard packageInfo={pkg} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Destinations;
