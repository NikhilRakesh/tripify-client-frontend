import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ReturnPolicy = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="bg-gray-100 min-h-screen py-12 px-10 space-y-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="cursor-pointer absolute top-0 left-0 px-10 py-5"
                onClick={() => navigate('/')}
            >
                <img
                    src="/TRIP999Artboard 1@4x (1).png"
                    alt="TRIPIFYME Logo"
                    className="w-20"
                />
                <p className='text-sm font-bold py-2'>By QATAYWORLD PVT LTD</p>
            </div>
            <motion.h2
                className="font-bold text-3xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Return Policy - QatayWorld Pvt Ltd.
            </motion.h2>

            <motion.div
                className="space-y-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <section>
                    <h3 className="font-bold text-2xl">Payment Terms</h3>
                    <ul className="list-disc list-inside">
                        <li>After confirmation of any Package request: 25% of tour package cost required immediately to book all the respective services.</li>
                        <li>30 Days prior to arrival date: 50% of tour package cost required.</li>
                        <li>07 Days prior to arrival date: 100% of tour package cost required.</li>
                        <li>All payments must be notified by an e-mail format only with attached transaction details.</li>
                        <li>Payment terms are subject to change at the time of booking as per Hotel Policy and High Season.</li>
                        <li>We will not entertain any credit facility.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Cancellation Policy on Domestic Land package</h3>
                    <ul className="list-disc list-inside">
                        <li>All cancellations must be made in e-mail format only.</li>
                        <li>Any cancellation at 60 Days prior to arrival date – No charge.</li>
                        <li>Any cancellation between 60 Days – 30 Days prior to arrival date: 25% of tour fare charge.</li>
                        <li>Any cancellation between 30 Days – 15 Days prior to arrival date: 50% of tour fare charge.</li>
                        <li>Any cancellation between 15 Days – 10 Days prior to arrival date: 75% of tour fare charge.</li>
                        <li>Any cancellation less than 10 Days: 100% of tour fare charge.</li>
                        <li>Once the package is booked & confirmed Booking is Non Cancelable or Non Refundable.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Refunds (if applicable)</h3>
                    <p>If your refund is approved, then your refund will be processed in 15 days, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Late or missing refunds (if applicable)</h3>
                    <ul className="list-disc list-inside">
                        <li>If you haven’t received a refund yet, first check your bank account again.</li>
                        <li>Then contact your credit card company, it may take some time before your refund is officially posted.</li>
                        <li>Next contact your bank. There is often some processing time before a refund is posted.</li>
                        <li>If you’ve done all of this and you still have not received your refund yet, please contact us at MAIL@TRIPIFYME.COM</li>
                    </ul>
                </section>
            </motion.div>
        </motion.div>
    );
};

export default ReturnPolicy;
