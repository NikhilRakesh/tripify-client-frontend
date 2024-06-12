import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate()

  const handlePayment = async () => {
    const response = await fetch('http://localhost:8000/api/initiatePayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    // Create a form to submit to PhonePe's payment gateway
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = data.url;

    const payloadField = document.createElement('input');
    payloadField.type = 'hidden';
    payloadField.name = 'payload';
    payloadField.value = data.payload;
    form.appendChild(payloadField);

    const checksumField = document.createElement('input');
    checksumField.type = 'hidden';
    checksumField.name = 'checksum';
    checksumField.value = data.checksum;
    form.appendChild(checksumField);

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
       <div className='cursor-pointer absolute top-0 left-0 p-10' onClick={() => navigate('/')}>
                <img src="/TRIP999Artboard 1@4x (1).png" alt="" className='w-28' />
                <p className='text-sm font-bold py-2'>By QATAYWORLD PVT LTD</p>
            </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 animate__animated animate__fadeInDown">Make a Payment</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__fadeInUp"
            placeholder="Enter amount"
          />
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate__animated animate__fadeInUp"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
