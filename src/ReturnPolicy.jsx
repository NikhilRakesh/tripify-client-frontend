import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReturnPolicy = () => {

    const navigate = useNavigate()

    return (
        <div className="container relative mx-auto py-12 px-5">
             <div className='cursor-pointer absolute top-0 left-0 p-5' onClick={() => navigate('/')}>
                <img src="/TRIP999Artboard 1@4x (1).png" alt="" className='w-20' />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 ">Refund Policy</h2>
            <div className="prose lg:prose-lg">
                <p>We have a 5-day return policy, which means you have 5 days after receiving your item to request a return.</p>
                <p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
                <p>Also, make a video while opening the parcel and the box inside. We need the video so that we can raise a complaint with the courier company if there has been a theft.</p>
                <p>To start a return, you can contact us at <a href="mailto:sales@tripifyme.com">sales@tripifyme.com</a> or on WhatsApp at <a href="tel:+919072121217">+91 90721 21217</a>.</p>
                <p>We will arrange return pickup from the provided address once your return is accepted. Please package your items in their original packaging and hand them over to our courier partner. The pickup may take 3-5 business days, and you will receive an acknowledgment receipt once it has been completed. Once we receive your items, we will inspect them and issue a refund to your original payment method. If you paid with cash, you will receive a credit note.</p>
                <p>If more than 15 business days have passed since we’ve approved your return, please contact us at <a href="sales@tripifyme.com">sales@tripifyme.com</a> or on WhatsApp at <a href="tel:+919778282728">+91 97782 82728</a>.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">Damages and Issues</h3>
                <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">Exceptions / Non-returnable Items</h3>
                <p>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>
                <p>Unfortunately, we cannot accept returns on limited sale items or gift cards.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">Exchanges</h3>
                <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">European Union 14 Day Cooling Off Period</h3>
                <p>Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">Refunds</h3>
                <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 7-10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
            </div>
            <p className="mt-8">For any further assistance or queries, please contact or consult our trip advisor at <a href="mailto:sales@tripifyme.com">sales@tripifyme.com</a> or on WhatsApp at <a href="tel:+919072121217">+91 90721 21217</a>.</p>
        </div>
    );
};

export default ReturnPolicy;
