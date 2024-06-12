import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandExplore = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  const navigate = useNavigate()

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className='cursor-pointer' onClick={() => navigate('/')}>
        <img src="/TRIP999Artboard 1@4x (1).png" alt="" className='w-20' />
      </div>
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">LandXplorer</h1>
        <p className="text-lg mt-4">Feeling the pressure of beating traffic or navigating unfamiliar roads?</p>
        <p className="text-lg">Longing to arrive refreshed and ready, whether it's a business meeting or a weekend adventure?</p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-md text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Your Ride, Elevated</h2>
        <p className="mb-4">Land Xplorers, powered by TripifyMe, is your gateway to a stress-free and elevated travel experience in [City Name] and surrounding areas. We offer reliable rides, on time, every time, ensuring you arrive at your destination feeling refreshed and ready to conquer your day.</p>
        <h3 className="text-xl font-semibold mb-2">( Arrive On Time, Every Time)</h3>
        <p className="mb-4">No more waiting or uncertainty - get a guaranteed cab with us within 3 hours.</p>
        <motion.button
          className="bg-white text-blue-600 py-2 px-4 rounded shadow-lg hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Book Now
        </motion.button>
      </motion.div>

      {/* Corporate Taxi Service Section */}
      <motion.div
        className="bg-white p-6 mt-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Elevate Your Commute: Seamless Corporate Taxis for Focused Professionals</h2>
        <p className="mb-4">Ditch the stress of traffic and unreliable schedules. Our corporate taxi service prioritizes both your budget and your time. We offer a fleet designed for productivity and comfort. Every ride is equipped with amenities to help you focus on what matters most, whether it's prepping for a meeting or unwinding after a long day. Need to recharge? Subtle touches throughout the experience ensure you arrive feeling refreshed and ready to tackle your day.</p>
        <motion.button
          className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Call
        </motion.button>
      </motion.div>

      {/* Tour Taxi Service Section */}
      <motion.div
        className="bg-gray-100 p-6 mt-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Explore Without Limits: Unforgettable Tours with our tour taxi services</h2>
        <p className="mb-4">Skip the crowded buses and stressful navigation. Our private tour taxis whisk you away on unforgettable journeys, tailored to your interests. Explore hidden gems and iconic landmarks at your own pace, with a local expert by your side. Whether you're seeking a quick city tour or an epic multi-day adventure, we handle the logistics with ease, ensuring a smooth and stress-free experience.</p>
        <motion.button
          className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Call
        </motion.button>
      </motion.div>

      {/* Safety and Reliability Section */}
      <motion.div
        className="bg-white p-6 mt-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Safety and Reliability</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Certified and Insured Drivers</li>
          <li className="mb-2">On time Service</li>
          <li className="mb-2">Comfortable and maintained vehicles</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Flexibility and convenience</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">Personalized journeys</li>
          <li className="mb-2">Budget conscious options</li>
          <li className="mb-2">Short trips or Extended Adventures</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">=</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">Stress free travel</li>
          <li className="mb-2">Boost your confidence</li>
          <li className="mb-2">Arrive Refreshed and Ready</li>
        </ul>
      </motion.div>

      {/* Additional Information Section */}
      <motion.div
        className="bg-gray-100 p-6 mt-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">We can get you a taxi in 3 hours.</h2>
        <p className="mb-4">Affordable rides without compromising on quality.</p>
        <h2 className="text-2xl font-semibold mt-4 mb-4">Safe & Certified</h2>
        <p className="mb-4">Registered and completely transparent system</p>
        <h2 className="text-2xl font-semibold mt-4 mb-4">24*7 Customer Support</h2>
        <p className="mb-4">Wherever you are, we got you covered. All round the clock. Women-friendly service with certified drivers and a team of responsive customer support agents ready to assist you, anytime, anyday.</p>
      </motion.div>
    </div>
  );
}

export default LandExplore;
