import React, { useState } from 'react';

const GoogleReviewsCard = ({ review, isCenter }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardWidth = isCenter ? "transform scale-110" : "";
    const maxLength = 200;

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedReview = review.review.length > maxLength ? review.review.slice(0, maxLength) + '...' : review.review;
    const displayReview = isExpanded ? review.review : truncatedReview;

    return (
        <div className={`bg-white shadow-lg rounded-lg p-8 border md:w-4/12 ${cardWidth}`}>
            <div key={review.id} className="border-b pb-4 mb-4">
                <p className="font-bold">{review.author}</p>
                <p className="text-gray-500 mb-2">{review.date}</p>
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500">
                        {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 0l2.757 6.693 6.977.604-5.322 4.654 1.776 6.947L10 15.5l-5.188 3.398 1.776-6.947L.266 7.297l6.977-.604L10 0zM6 8.914L4.531 7.297l1.578-6.158L10 3.33l3.891-1.19 1.578 6.158L14 8.914l-4.09.354L10 13.5l-1.91-4.232L6 8.914z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-gray-600 ml-2">({review.rating})</span>
                </div>
                <p>
                    {displayReview}
                    {review.review.length > maxLength && (
                        <button 
                            onClick={handleToggle} 
                            className="text-blue-500 hover:underline ml-1"
                        >
                            {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </p>
            </div>
        </div>
    );
};

export default GoogleReviewsCard;
