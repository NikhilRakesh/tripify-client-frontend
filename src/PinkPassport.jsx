import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GoogleReviewsCard from './GoogleReviewsCard';
import Blog from './Blog';
import api from './Axios';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const PinkPassport = () => {


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  const reviews = [
    {
      id: 1,
      author: 'Sruthi S',
      rating: 5,
      review: 'I had a wonderful staycation with my best friends. This is the first we are choosing a location through other services but it was worth it. We had an awesome stay @elixir varkala with good ambience and peaceful location. It was safe for us as it was a girl’s trip.',
      date: 'A month ago',
    },
    {
      id: 2,
      author: 'Sandra Binu',
      rating: 5,
      review: 'Travelled solo to Munnar. Provided safe and great travel and accommodation. Ensured safety throughout the trip.',
      date: 'A month ago',
    },
    {
      id: 3,
      author: 'Bhadra MV',
      rating: 5,
      review: 'We always prefer tripifyme for all our trips and it was given a great service.',
      date: '8 months ago',
    },
    {
      id: 4,
      author: 'Aiswarya S Iyer',
      rating: 5,
      review: 'We had an awesome time in Langkawi islands. Thanks to tripify me for all the arrangements. Services were excellent. Totally recommended!!!! Double Like',
      date: 'A month ago',
    },
    {
      id: 5,
      author: 'Veena Prakash',
      rating: 5,
      review: 'Are you planning for a trip? Then TripifyMe is the greatest choice if you want good service for a reasonable price...',
      date: 'A year ago',
    },
    {
      id: 6,
      author: 'Anjali G',
      rating: 5,
      review: 'Thank you Tripifyme for that wonderful Munnar Trip.',
      date: '4 years ago',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef(null);

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 3)) % reviews.length);
    }, 3000);

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, reviews.length]);

  const getVisibleSlides = () => {
    const slides = [];
    const numSlides = isMobile ? 1 : 3;
    for (let i = 0; i < numSlides; i++) {
      slides.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return slides;
  };

  const handleButtonClick = () => {
    setFormVisible(true);
    setTimeout(() => {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/enquiry', formData);
      console.log(response);
      if (response.status === 201) {
        toast.success('Enquiry Successfully Submited')
      }
    } catch (error) {
      console.log('Error submitting enquiry:', error);
      alert('Error submitting enquiry')
    }

    // Reset the form fields after submission
    setFormData({
      name: '',
      phone: '',
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9072121217', '_blank');
  };

  const handlePhoneCallClick = () => {
    window.location.href = 'tel:9072121217';
  };

  return (
    <div className=" w-full md:mx-auto border">
      <div
        className="fixed top-3/4 md:top-24 lg:top-3/4 md:left-[95%] left-[90%] transform -translate-x-1/2 mt-4 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg cursor-pointer flex items-center space-x-2 z-50"
        onClick={handleWhatsAppClick}
      >         
        <FaWhatsapp className="text-2xl" />
      </div>
      <header className="flex border-b-2 px-10 py-5">
        <motion.div
          className="md:w-6/12 md:px-16 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={() => navigate('/')}
        >
          <img src="/PinkPassport new logo.png" alt="" className="w-4/12" />
        </motion.div>
        <motion.div
          className="md:w-6/12   md:flex items-center justify-end md:px-16"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            onClick={handleButtonClick}>
            Enquiry
          </button>
        </motion.div>
      </header>

      <div className="md:flex mt-10">
        <motion.div
          className="md:w-7/12 p-5 flex flex-col justify-center gap-10 py-10 "
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-black flex justify-center flex-col text-left font-bold space-y-5 pl-10 lg:text-8xl py-5">
            <h1 className='text-6xl'>Travel in Confidence</h1>
            <h1 className='text-6xl'>Travel Designed for <span className='text-pink-500'>Women</span></h1>
          </div>
          <div className="py-5 pl-10">
            <button type="submit" className="bg-black  text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-5/12 flex justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/woman-pulling-suitcase-wearing-winter-clothes_978087-30539.png"
            alt=""
            className="w-6/12 "
          />
        </motion.div>
      </div>

      <div className="md:flex mt-10 p-5 border-b-2 mb-10">
        <motion.div
          className="md:w-8/12 md:flex"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-6/12 flex justify-end items-center">
            <div className="flex flex-col gap-32 py-5">
              <div>
                <h1 className="font-bold text-6xl lg:text-5xl py-5">5K<span className='text-pink-500'>+</span></h1>
                <p className="text-3xl lg:text-5xl font-medium">Trusted Female Travellers</p>
              </div>
              <div>
                <h1 className="font-bold text-6xl lg:text-5xl py-5">250<span className='text-pink-500'>+</span></h1>
                <p className="text-3xl lg:text-5xl font-medium">Destinations</p>
              </div>
            </div>
          </div>
          <div className="md:w-6/12">
            <img src="/women2.png" alt="" className='w-10/12' />
          </div>
        </motion.div>
        <motion.div
          className="md:w-4/12 flex items-center"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="font-bold text-3xl lg:text-6xl py-8 text-pink-500">Craving adventure but prioritizing safety?  </h1>
            <p className="text-xl lg:text-2xl font-medium">
              Explore the world with confidence on our meticulously planned women-only tours, solo or small group. We curate female-friendly experiences, from guides and transport to comfy stays, so you can focus on making unforgettable memories.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="py-14">
        <motion.div
          className="mb-4 flex flex-col items-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl font-bold text-pink-400">
            She <span className="text-gray-800">Said</span>
          </p>
          <div className="h-1 w-16 bg-yellow-500 mt-2"></div>
        </motion.div>

        <motion.div
          className="flex gap-12 px-5 pb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {getVisibleSlides().map((review, index) => (
            <GoogleReviewsCard key={review.id} review={review} isCenter={!isMobile && index === 1} />
          ))}
        </motion.div>
      </div>
      <Blog male={false} />
      <div className="bg-pink-300 md:flex p-5 ">
        <motion.div
          className="md:w-7/12 flex justify-center"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/3d-icon-travel-with-woman.png" alt="" className="w-6/12" />
        </motion.div>
        <motion.div
          ref={formRef}
          className="md:w-5/12 flex flex-col justify-center"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="font-bold text-3xl lg:text-6xl py-5">Get in Touch</h1>
            <p className="text-xl lg:text-3xl">Fill out the form below, and we'll get back to you as soon as possible.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 my-5">
              <p className="text-2xl font-medium">Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 rounded-lg px-5 w-full lg:w-6/12 py-3 focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-5 my-5">
              <p className="text-2xl font-medium">Number</p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 rounded-lg px-5 w-full lg:w-6/12 py-3 focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="py-5 flex gap-5">
              <button type="submit" className="bg-black w-6/12 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                Enquire
              </button>
              <button type="submit" onClick={handlePhoneCallClick} className="bg-black w-6/12 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                call
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Toaster/>
    </div>
  );
};

export default PinkPassport;
