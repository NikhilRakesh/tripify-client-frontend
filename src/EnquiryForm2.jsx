import React, { useState } from 'react';
import api from './Axios';

const EnquiryForm2= () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/enquiry', formData);
      if (response.status === 200) {
        // You can add any success message or actions here
        alert('Enquiry submitted successfully!');
      }
    } catch (error) {
      console.log(`Error on enquiry submission: ${error}`);
    }

    // Clear the form
    setFormData({
      name: '',
      phone: '',
    });
  };

  const redirectToWhatsApp = (id) => {
    const phoneNumber = '9072121217';

    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(whatsappUrl, '_blank');
}
  return (
    <div className="enquiry-form-container p-5">
      <h2 className='text-center font-bold'>Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="enquiry-form py-5 flex  flex-col gap-5" >
        <div className="form-group flex  gap-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className='bg-transparent border p-2 border-black rounded-lg w-full'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group flex gap-4">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className='bg-transparent border p-2 border-black rounded-lg w-full'
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex justify-center mt-5 gap-5'>
             <button type="submit" className='bg-black text-white w-1/2 py-2 px-5 rounded-full'>Request a call back</button>
             <button type="button" className='bg-black text-white w-1/2 py-2 px-5 rounded-full' onClick={redirectToWhatsApp}>Redirect to whatsapp</button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm2;
