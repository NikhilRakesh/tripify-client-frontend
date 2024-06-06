import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Service = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const services = [
    {
      image: "/ticket-booking.png",
      heading: "Ticket Booking",
      description: "Secure the best prices with discounted ticket bookings."
    },
    {
      image: "/carbon_hotel.png",
      heading: "Hotel Booking",
      description: "trustworthy and safe hotel reservations, ensuring quality at the best prices"
    },
    {
      image: "/cil_paper-plane.png",
      heading: "Tour Plan",
      description: "Customized budget friendly tour packages tailored to your preferences."
    },
    {
      image: "/icons8-taxi-80.png",
      heading: "Taxi Booking",
      description: "Secure and reliable taxi bookings within 2 hours, prioritizing trust and safety."
    },
  ];

  const settings = {
    dots: true,
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateIndex, setAnimateIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push({
        service: services[(currentIndex + i) % services.length],
        animate: (currentIndex + i) % services.length === animateIndex
      });
    }
    return slides;
  };

  const getVisibleSlideMobile = () => {
    const currentIndexMobile = currentIndex % services.length;
    return [{
      service: services[currentIndexMobile],
      animate: currentIndexMobile === animateIndex
    }];
  };

  useEffect(() => {

    const timeout = setTimeout(() => {
      setAnimateIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, services.length]);

  return (
    <div ref={ref} className='w-full h-full pb-10'>
      <div className="w-full  mt-20 mb-5 flex justify-center items-center">
        <p className=" text-[40px] font-bold text-center text-black pb-5">
          Our Services
        </p>
      </div>
      <div className='hidden md:flex md:flex-row flex-col justify-center gap-8 md-gap-0 md:space-x-12 px-5'>
        {getVisibleSlides().map((slide, index) => (
          <ServiceCard key={index} service={slide.service} isCenter={index === 1}  />
        ))}
      </div>
      <div className='flex flex-col md:flex-row justify-center md:gap-8 md:space-x-12 px-5 md:hidden'>
        {getVisibleSlideMobile().map((slide, index) => (
          <div key={index} className="w-full">
            <ServiceCard service={slide.service}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;