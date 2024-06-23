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
            price: 19000,
            description: 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency',
            country: 'Indonesia'
        },
        {
            image: 'rectangle-26.png',
            duration: '3 Days, 2 Nights',
            price: 34999,
            description: 'Explore the Shrines and Blossoms here in this beautiful country',
            country: 'Japan'
        },
        {
            image: 'https://imgs.search.brave.com/FZHTvKbsdUl2XVJYJWwCdLJA4tlwYaIvubeLOrteQsc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/OTQ4NDYwNC9waG90/by9wdW5ha2hhLXZh/bGxleS1iaHV0YW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhVY1VHTkNXUUd3/bkhOWngxWFlzZkp0/Y3Q4dWtSQmE4UC1a/MDBqQmdLZlU9',
            duration: '5 Nights, 6 Days',
            price: 24999,
            description: 'Experience the serene beauty and rich culture of Bhutan for 6 days.',
            country: 'Bhutan'
        },
        {
            image: 'https://imgs.search.brave.com/kQOcl8qBwv98ydaoXxxnDiqY2IPQtBFO1hOYSmnVd_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90aGFpbGFuZC10/ZW1wbGVfNTExOTUt/MjUwLmpwZz9zaXpl/PTYyNiZleHQ9anBn',
            duration: '4 Nights, 5 Days',
            price: 19999,
            description: 'Enjoy the vibrant nightlife and stunning beaches of Thailand.',
            country: 'Thailand'
        },
        {
            image: 'https://imgs.search.brave.com/i7bAnzR_SXfE14mIegj1T8dqpzDG-0bchNPxnJd7jSQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/OTM3NDc2OC9waG90/by9wYW5vcmFtaWMt/b2Yta3VhbGEtbHVt/cHVyLWNpdHktYXQt/bmlnaHQtbWFsYXlz/aWEud2VicD9iPTEm/cz0xNzA2NjdhJnc9/MCZrPTIwJmM9TGhk/OUFkR2o1VHpaSVph/SDdiZ0stSGdQZ0lw/QmtyQ1dYQW51c0Jy/YjZQQT0',
            duration: '3 Nights, 4 Days',
            price: 12999,
            description: 'Discover the diverse culture and beautiful landscapes of Malaysia.',
            country: 'Malaysia'
        },
        {
            image: 'https://imgs.search.brave.com/qnQYiua09Ms3p3G1TUGHQAGP1IZbXsfIhO6kv9jDP2A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/MTc0ODM0Ny9waG90/by90b3AtZG93bi12/aWV3LW9mLW51c2Et/bGVtYm9uZ2FuLWlz/bGFuZC1pbi1iYWxp/LWluLWluZG9uZXNp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bHp1M0MwYi03/QTlqZVFweW1oTXRV/QUhSSTRUSHZSeXNB/TTdERkhxbjlxcz0',
            duration: '4 Nights, 5 Days',
            price: 16455,
            description: 'Relax and unwind in the beautiful island of Bali.',
            country: 'Bali'
        },
        {
            image: 'https://imgs.search.brave.com/xZ-JFuiO0OPpft_FrfF6y_1QDFvNDVYg65JJ9LOKNY8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wOS8xMy80NS9k/dWJhaS00MDQ0MTgz/XzY0MC5qcGc',
            duration: '3 Nights, 4 Days',
            price: 26500,
            description: 'Experience the luxury and grandeur of Dubai.',
            country: 'Dubai'
        },
        {
            image: 'https://imgs.search.brave.com/uLIVFFNj1X9AgxpKCk-AQ9-FBX1far_FWfVgHTGfen4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTM5OTY4L3Bob3Rv/L2lzbGFuZC1vZi1t/YWxkaXZlcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9eUFV/NXJybUMyc2RBblYy/RFNzQmxYYnhKZjhJ/ck15R2xLdkdKMG43/VGRiaz0',
            duration: '3 Nights, 4 Days',
            price: 17999,
            description: 'Enjoy the stunning beaches and crystal-clear waters of the Maldives.',
            country: 'Maldives'
        },
        {
            image: 'https://imgs.search.brave.com/hAamsPgSbMie1hmz7pG_OLlcTzY6P7SK19liVkiaFYs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU0L0phdGF5dV9h/ZHZlbnR1cmVfY2Vu/dHJlLmpwZw',
            duration: '4 Nights, 5 Days',
            price: 12500,
            description: 'Explore the tranquil backwaters and lush landscapes of Kerala.',
            country: 'Kerala'
        },
        {
            image: 'https://imgs.search.brave.com/qym-c4gwE68UxHhwEpSYfheNQvwg-0Ks7NtSxvd9HME/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbGQtbWFuYWxp/LWNvdmVyZWQtd2l0/aC1mcmVzaC1zbm93/LWZyb20taGVhdnkt/c25vd2ZhbGxfOTI2/MTk5LTIxNzQzOTEu/anBnP3NpemU9NjI2/JmV4dD1qcGc',
            duration: '4 Nights, 5 Days',
            price: 7444,
            description: 'Enjoy the scenic beauty and adventure activities in Manali.',
            country: 'Manali'
        },
        {
            image: 'https://imgs.search.brave.com/yjIa7nIbb68WtuThgCG89xKcBVVpuTbtOL7KeBBWahs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk2MjUzNS9waG90/by9zcmluYWdhci1r/YXNobWlyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz01eTlz/VTdib0EtVEZ5cjdM/QlZ5ZnBtb0tUOUEy/WTdXeEEydHFkSUUw/ekJ3PQ',
            duration: '4 Nights, 5 Days',
            price: 12222,
            description: 'Experience the paradise on earth with the beautiful valleys of Kashmir.',
            country: 'Kashmir'
        }
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
