import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from './Axios';
import toast, { Toaster } from 'react-hot-toast';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

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
      toast.error('Enquiry Not Submited')
      console.log(`error on admin-login: ${error}`);
    }
    setFormData({
      name: '',
      phone: '',
    });
  };

  const locations = [
    'Bengaluru',
    'Kochi',
    'Pathanamthitta',
    'Delhi'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 1000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const redirectToWhatsApp = (id) => {
    const phoneNumber = '9072121217';

    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(whatsappUrl, '_blank');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-5 py-8 bg-[#2E0249] flex md:flex-row flex-col md:gap-0 gap-10"
    >
      <div className='md:w-6/12 '>
        <div className='flex flex-col gap-16 p-8 '>
          <div className='text-white text-5xl font-bold flex flex-col items-center'>
            <div className='flex flex-col gap-16'>
              <div>
                <h1>Let’s discuss </h1>
                <h1>on something <span className='text-[#A91079]'>cool</span></h1>
                <h1>together</h1>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='text-white text-xs flex gap-3'>
                  <img src="/EnvelopeFill.png" alt="" className='w-5 h-5' />
                  <p>sales@tripifyme.com</p>
                </div>
                <div className='text-white text-xs flex gap-3'>
                  <img src="/TelephoneFill.png" alt="" className='w-5 h-5' />
                  <p>+91 90721 21217</p>
                </div>
                <div className='text-white text-xs flex gap-3'>
                  <img src="/Vector.png" alt="" className='w-5 h-5' />
                  <p>{locations[currentLocationIndex]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-6/12 bg-white rounded-xl shadow-xl'>
        <form onSubmit={handleSubmit} className="bg-white shadow-xl border border-gray-200 rounded-lg p-8 space-y-8">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-[#2E0249]">
                We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
              </p>
            </div>
            <div className="w-full sm:w-8/12 flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 outline-[#A91079] border-gray-300 shadow-sm sm:text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="email"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border-gray-300 outline-[#A91079] shadow-sm sm:text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-center flex gap-5 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#A91079] md:w-4/12 text-white py-3 px-6 rounded-md shadow-md transition-transform duration-200 ease-in-out"
            >
              Request a call back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#A91079] md:w-4/12 text-white py-3 px-6 rounded-md shadow-md transition-transform duration-200 ease-in-out"
              onClick={redirectToWhatsApp}
            >
              Redirect to whatsapp
            </motion.button>
          </div>
        </form>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default InquiryForm;
