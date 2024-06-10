import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const TaxiBooking = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate()

  return (
    <div ref={ref} className="w-full py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#4b64b4] shadow-lg text-center p-10  flex flex-col justify-center items-center"
      >
        <div>
        </div>
        <div className='text-center'>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Book Your Taxi Now</h2>
          <p className="text-lg lg:text-xl text-white mb-8">
            Experience a stress-free and elevated travel experience with our reliable taxi services. Book now and enjoy a comfortable journey.
          </p>
        </div>
        <img src="/Land Xplor logo croped.png" alt="" className='w-6/12' />
        <div className='py-10' onClick={() => { navigate('/Land-Explore') }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white py-2 px-6 rounded-full transition-colors duration-300"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TaxiBooking;
