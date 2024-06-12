import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Blog from './Blog';
import InquiryForm from './InquiryForm';
import { FaClock, FaHandshake, FaCouch, FaUserTie, FaHeadset } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CorporateTravelPage = () => {

  const inquiryFormRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  const scrollToInquiryForm = () => {
    inquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate()

  return (
    <div className="w-full mx-auto p-10">
      <header className="flex justify-between items-center py-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => { navigate('/') }}
          className='cursor-pointer'
        >
          <img src="/logo.png" alt="Company Logo" className="w-32" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
            onClick={scrollToInquiryForm}
          >
            Contact Us
          </button>
        </motion.div>
      </header>

      <motion.div
        className="text-center my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">Travel Simplified, Business Amplified</h1>
        <p className="text-xl lg:text-2xl mt-4 text-gray-600">Streamline corporate travel with our all-in-one platform: flights, hotels, retreats, events & more </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-around mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <img src="/coporatetravelsimage.png" alt="Corporate Travel" className="" />
        </div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Services offered.</h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-4">
            We offer comprehensive travel management solutions tailored to meet the unique needs of your business.
          </p>
          <ul className="text-lg lg:text-xl text-gray-600 list-disc list-inside space-y-2">
            <li>Customizable Corporate Retreats</li>
            <li>Stress free Event Management</li>
            <li>24/7 Taxi services</li>
            <li>Exclusive Corporate Discounts</li>
            <li>Unbeatable Flight Booking Deals</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="text-center my-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Our Corporate Travel Services</h2>
        <div className="flex flex-wrap justify-around">
          {[
            { title: 'Flight Booking', description: 'Seamless flight booking with great corporate rates.', icon: '✈️' },
            { title: 'Hotel Reservations', description: 'Comfortable stays at top-rated hotels worldwide.', icon: '🏨' },
            { title: 'Car Rentals', description: 'Convenient car rentals to suit your travel needs.', icon: '🚗' },
            { title: 'Travel Insurance', description: 'Comprehensive travel insurance for peace of mind.', icon: '🛡️' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="w-full lg:w-5/12 p-4 "
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mt-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* New content */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">We Promise</h2>
            <p className="text-lg text-gray-600">Our commitment to providing exceptional travel experiences.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-5/12 lg:w-1/4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <FaClock className="text-blue-500 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Punctuality</h3>
                <p className="text-gray-600">Reliable arrivals so that you are never late.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <FaHandshake className="text-green-500 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Trustworthy Travel</h3>
                <p className="text-gray-600">Registered and dependable network of drivers and personnel. Everyone should be at ease.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <FaCouch className="text-purple-500 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Comfort First</h3>
                <p className="text-gray-600">Customizable and accessorized trips anytime, anywhere. Relax and recharge.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <FaUserTie className="text-orange-500 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Drivers</h3>
                <p className="text-gray-600">Professionalism guaranteed throughout with registered and trained personnel all through.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <FaHeadset className="text-red-500 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">24 Hours Customer Service</h3>
                <p className="text-gray-600">We are never hesitant to help you anytime, anywhere. We've got your back.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center my-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Client Testimonials</h2>
      </div>

      <div className="bg-cover bg-center py-20" style={{ backgroundImage: 'url("/client-login-bg.jpg")' }}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Do More with Our Client Login Platform</h2>
          <p className="text-lg mb-8">Streamline the booking process for your employees with secure, individual logins. No more scrambling for usernames or passwords – each team member can access and manage their travel details independently</p>
          <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 inline-block">Know more</a>
        </div>
      </div> */}

      <div className="container mx-auto py-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Tripifyme: Tailored Solutions for Businesses of All Sizes</h2>
          <p className="text-lg mb-8">Tripifyme empowers businesses of all sizes to streamline their corporate travel and elevate their employee experience. We understand that different businesses have unique needs, so we offer flexible solutions that adapt to your scale and budget</p>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="w-full lg:w-5/12 p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Startups and Small businesses</h3>
            <p className="text-lg text-gray-600 mb-4">Simplify operations, cost-effective travel, empower your team.</p>
          </div>
          <div className="w-full lg:w-5/12 p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Established Businesses & Enterprises</h3>
            <p className="text-lg text-gray-600 mb-4">Scalable solutions, centralized management, dedicated account manager</p>
          </div>
        </div>

      </div>

      <div className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
            <p className="text-lg mb-8">Tripifyme isn't just another travel agency. We're your one-stop shop for effortless corporate travel management. Ditch the spreadsheets and endless emails – our user-friendly platform streamlines booking, simplifies approvals, and gives you real-time insights. Focus on your business goals, while we handle the logistics with expertise and care. We prioritize punctuality, reliability, comfort, and professional drivers, ensuring a stress-free experience for your team. Experience the Tripifyme difference – elevate your business travel and empower your employees to succeed.</p>
          </div>
          <div className="text-center" ref={inquiryFormRef}>
            <InquiryForm />
          </div>
        </div>
      </div>
      <Blog male={true} />
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center mt-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Upgrade Your Corporate Travel?</h2>
        <p className="text-lg lg:text-xl mb-8">Contact us today to find out how we can make your corporate travel more efficient and cost-effective.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">Get Started</button>
      </div>
    </div>
  );
};

export default CorporateTravelPage;
