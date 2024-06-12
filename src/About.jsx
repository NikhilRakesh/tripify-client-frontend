import React from 'react';
import { FaSuitcase, FaPlane, FaHotel, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate()


  return (
    <div className="min-h-screen relative bg-cover bg-center flex items-center bg-gray-200 justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
     <div className='cursor-pointer absolute top-0 left-0 p-10' onClick={() => navigate('/')}>
        <img src="/TRIP999Artboard 1@4x (1).png" alt="" className='w-20' />
      </div>
      <div className="bg-white bg-opacity-90 max-w-4xl w-full space-y-8 p-10 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4 animate-fade-in-up">
          Welcome to Tripifyme
        </h1>
        <p className="text-lg text-gray-700 animate-fade-in-up delay-100">
          <FaSuitcase className="inline-block text-blue-600 mr-2" />
          We are very excited to introduce Tripifyme as the one-stop provider for all travel needs and requirements. We label ourselves as leading, innovative, and highly efficient and look forward to demonstrating these qualities at the earliest possible chance.
        </p>
        <p className="text-lg text-gray-700 animate-fade-in-up delay-200">
          <FaPlane className="inline-block text-blue-600 mr-2" />
          Tripifyme is a prominent travel and tourism organization dedicated to providing amazing experiences for travelers from all over the world, business outings, and official trips, flight bookings, etc. We provide a comprehensive choice of trip packages to diverse destinations, catering to all types of travelers from solitary explorers to families, couples, and groups. Our programmes include leisure, adventure, cultural exploration, and other activities.
        </p>
        <p className="text-lg text-gray-700 animate-fade-in-up delay-300">
          <FaMapMarkedAlt className="inline-block text-blue-600 mr-2" />
          We provide a variety of excursions and recreational activities that can be tailored to your specific needs and timetable. Do you require any equipment for your adventure? We lend out equipment such as bikes, kayaks, and camping gear. Relax and recharge with our relaxation retreats, which include spa days, yoga and meditation classes, and peaceful escapes to gorgeous destinations. We are dedicated to providing you with the opportunity to get away from it all and participate in fascinating excursions and leisure activities for all companies, schools, universities across India.
        </p>
        <p className="text-lg text-gray-700 animate-fade-in-up delay-400">
          <FaHotel className="inline-block text-blue-600 mr-2" />
          Background and Expertise: We are one of the leading Inbound & Outbound Tour Operators in India. We are more into the b2b market having a good number of agents across the world. From 2014, we have been a valued partner for travelers seeking adventure, relaxation, and cultural enrichment.
        </p>
      </div>
    </div>
  );
};

export default About;
