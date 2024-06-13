import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
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
                Privacy Policy - QatayWorld Pvt Ltd.
            </motion.h2>

            <motion.div
                className="space-y-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <section>
                    <h3 className="font-bold text-2xl">Introduction</h3>
                    <p>Qatayworld Private Limited (hereinafter “TRIPIFYME”) recognizes the importance of privacy of its users and also of maintaining confidentiality of the information provided by its users as a responsible data controller and data processor.</p>
                    <p>This Privacy Policy provides for the practices for handling and securing user's Personal Information (defined hereunder) by TRIPIFYME and its subsidiaries and affiliates.</p>
                    <p>This Privacy Policy is applicable to any person (‘User’) who purchase, intend to purchase, or inquire about any product(s) or service(s) made available by TRIPIFYME through any of TRIPIFYME’s customer interface channels including its website, mobile site, mobile app & offline channels including call centers and offices (collectively referred herein as "Sales Channels").</p>
                    <p>For the purpose of this Privacy Policy, wherever the context so requires "you" or "your" shall mean User and the term "we", "us", "our" shall mean TRIPIFYME. For the purpose of this Privacy Policy, Website means the website(s), mobile site(s) and mobile app(s).</p>
                    <p>By using or accessing the Website or other Sales Channels, the User hereby agrees with the terms of this Privacy Policy and the contents herein. If you disagree with this Privacy Policy please do not use or access our Website or other Sales Channels.</p>
                    <p>This Privacy Policy does not apply to any website(s), mobile sites and mobile apps of third parties, even if their websites/products are linked to our Website. User should take note that information and privacy practices of TRIPIFYME’s business partners, advertisers, sponsors or other sites to which TRIPIFYME provides hyperlink(s), may be materially different from this Privacy Policy. Accordingly, it is recommended that you review the privacy statements and policies of any such third parties with whom they interact.</p>
                    <p>This Privacy Policy is an integral part of your User Agreement with TRIPIFYME and all capitalized terms used, but not otherwise defined herein, shall have the respective meanings as ascribed to them in the User Agreement.</p>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">How We Protect Your Personal Information?</h3>
                    <p>All payments on the Website are secured. This means all Personal Information you provide is transmitted using TLS (Transport Layer Security) encryption. TSL is a proven coding system that lets your browser automatically encrypt, or scramble, data before you send it to us. Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.</p>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Withdrawal of Consent and Permission</h3>
                    <p>You may withdraw your consent to submit any or all Personal Information or decline to provide any permissions on its Website as covered above at any time. In case, you choose to do so then your access to the Website may be limited, or we might not be able to provide the services to you. You may withdraw your consent by sending an email to MAIL@TRIPIFYME.COM</p>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Your Rights Qua Personal Information</h3>
                    <p>You may access your Personal Information from your user account with TRIPIFYME. You may also correct your personal information or delete such information (except some mandatory fields) from your user account directly. If you don’t have such a user account, then you write to MAIL@TRIPIFYME.COM</p>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Eligibility to Transact with TRIPIFYME</h3>
                    <p>You must be at least 18 years of age to transact directly with TRIPIFYME and also to consent to the processing of your personal data.</p>
                </section>

                <section>
                    <h3 className="font-bold text-2xl">Changes to the Privacy Policy</h3>
                    <p>We reserve the rights to revise the Privacy Policy from time to time to suit various legal, business and customer requirement. We will duly notify the users as may be necessary.</p>
                    <p>You may always submit concerns regarding this Privacy Policy via email to us at MAIL@TRIPIFYME.COM. TRIPIFYME shall endeavor to respond to all reasonable concerns and inquiries.</p>
                </section>
            </motion.div>
        </motion.div>
    );
};

export default PrivacyPage;
