import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
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
                Terms and Conditions - QatayWorld Pvt Ltd.
            </motion.h2>

            <motion.div
                className="space-y-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <section>
                    <h3 className="font-bold text-2xl">What do you get from TRIPIFYME by QATAYWORLD PVT LTD</h3>
                    <ul className="list-disc list-inside">
                        <li>Customers under this offer will get attractive discounts on Flights, Hotels, Buses, Cabs and Holiday Packages booked TRIPIFYME.</li>
                        <li>Each transaction during the sale period.</li>
                        <li>A few lucky winners will also get a chance to win giveaway vacations.</li>
                        <li>During this sale, you will get to enjoy:
                            <ul className="list-disc list-inside ml-5">
                                <li>Discounted fares on selected airlines: Air Mauritius, Air France, KLM Dutch Airlines, Delta Airlines, British Airways, Ethiopian Airlines, ITA Airways, IndiGo, Korean Airlines, LOT Polish, Lufthansa & Swiss Airlines, Qantas Airways, Qatar Airways, SpiceJet, Turkish Airlines, Virgin Atlantic and Vistara.</li>
                                <li>Discounted rates on exclusive selected hotels: Sunsiyam, Neemrana, Inde Hotel, Sterling, Spree, Byke, Justa, Vits, Brij, Royal, Orchid and Regenta, Suba Group, Pride, Club Mahindra, Clarks, Amritara, Cygnett, OTHPL, The Clarks, One Earth, Welcomheritage, Shrigo, Starlit, Beyond Stay, Le roi, Zone By The Park, The Fern, Fab hotel, Ramee Group of Hotel, Jain Group, Sumiyashee, Moustache Escape, Playotel, Lime Tree, Treehouse, Mount Hotels and Summit Hotels & Resorts.</li>
                                <li>Attractive discount on Holiday Packages:
                                    <ul className="list-disc list-inside ml-5">
                                        <li>Travel international including flights under INR 30,990/-*</li>
                                        <li>Travel Domestic under INR 10,599/-*</li>
                                        <li>Spiritual Tours under INR 12,599/-*</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>For queries, contact us at:
                            <ul className="list-disc list-inside ml-5">
                                <li>Email ID: MAIL@TRIPIFYME.COM</li>
                                <li>Phone Number: 907 202121 7 / 907 212121 7 / 907 222121 7</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">How do you get it</h3>
                    <ul className="list-disc list-inside">
                        <li>Giveaway Rewards:
                            <ul className="list-disc list-inside ml-5">
                                <li>Follow the TRIPIFYME.TRIP account on Instagram.</li>
                                <li>Participate in various Sales Contests.</li>
                                <li>Keep checking the stories on Instagram for the winner's list.</li>
                                <li>The winners will be announced on Social Media Platforms, post-sale only.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">What else do you need to know?</h3>
                    <ul className="list-disc list-inside">
                        <li>Bus booking offer:
                            <ul className="list-disc list-inside ml-5">
                                <li>The maximum discount that can be availed by the user is ₹500.</li>
                                <li>The offer cannot be clubbed with any other promotional offers.</li>
                                <li>Bookings with valid promo codes will be only eligible for this offer.</li>
                                <li>The discount will be calculated on base fare.</li>
                                <li>The offer is applicable on private bus bookings only.</li>
                            </ul>
                        </li>
                        <li>Cab booking offer:
                            <ul className="list-disc list-inside ml-5">
                                <li>The users will receive a 25% discount on Airport transfer, Hourly rental, One Way & Round Trip Cab Bookings with TRIPIFYME.</li>
                                <li>The 25% (up to) discount on cab will be calculated on base fare.</li>
                                <li>The maximum discount under this offer is ₹2500.</li>
                                <li>The offer is applicable on selected cabs only.</li>
                                <li>This offer is valid for a limited period.</li>
                                <li>Amendments are not allowed for any of the cab bookings.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Terms & Conditions</h3>
                    <ul className="list-disc list-inside">
                        <li>In the event of any misuse or abuse of the offer, TRIPIFYME reserves the right to deny the offer to the customers.</li>
                        <li>TRIPIFYME is the sole authority for interpretation of these terms.</li>
                        <li>In addition, TRIPIFYME standard booking and privacy policy on www.TripifyMe.in shall apply.</li>
                        <li>In the event of any dispute, Courts of Kerala will have jurisdiction.</li>
                        <li>TRIPIFYME reserves the right, at any time, without prior notice and liability and without assigning any reason whatsoever, to add/alter/modify/change or vary all of these terms and conditions or to replace, wholly or in part, this offer by another offer, whether similar to this offer or not, or to extend or withdraw it altogether.</li>
                        <li>TRIPIFYME shall not be liable for any loss or damage arising due to force majeure.</li>
                    </ul>
                </section>
            </motion.div>
        </motion.div>
    );
};

export default TermsOfServicePage;
