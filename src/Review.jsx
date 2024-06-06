import React, { useEffect, useState } from "react";
import GoogleReviewsCard from "./GoogleReviewsCard";

const Review = () => {


    const reviews = [
        {
            id: 1,
            author: 'Sandra Binu',
            rating: 5,
            review: 'Travelled solo to Munnar. Provided safe and great travel and accommodation. Ensured safety throughout the trip.',
            date: 'A month ago'
        },
        {
            id: 2,
            author: 'Roopa Dileep',
            rating: 5,
            review: 'My very first solo trip to Manali. They made it very comfortable and never felt like I’m going there alone. They ensure my safety first and helped me find a comfy place as for a solo traveller. I had every privilege of being a solo traveller as a Woman! Times when I felt uncomfortable there they were on the other side ready to help me out hear me out. Thanks to the Team !! Sorry for the late Review !!',
            date: 'A month ago'
        },
        {
            id: 3,
            author: 'Jayaprakash K.n',
            rating: 5,
            review: 'One of the best planning company thanks to whole team they follow up every each movement and hotels are awesome we had nys time in Manali and Shimla as well ☺️☺️ budget friendly trip thank you Tripifyme travel',
            date: '2 months ago'
        },
        {
            id: 4,
            author: 'Anjali Govindan',
            rating: 5,
            review: 'Everything was so smooth and clear. The team made sure that we dont encounter any problem at any time. And they were very particular about the updates and timings. We enjoyed the trip a lot.',
            date: '3 months ago'
        },
        {
            id: 5,
            author: 'Sharath PK',
            rating: 5,
            review: 'We were gang of 7 members including one child on our vacation to Thailand hosted by Tripify me. The trip has given us lasting memories as it was planned meticulously and well organised from day 1 to day 6. Their USP is their flexibility. We have demanded changes in itinerary at last minutes and also even during the trip,which was all well taken care of..We covered maximum places without having the feeling of getting rushed through..Thank you.',
            date: '3 months ago'
        }
    ];
    

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + (isMobile ? 1 : 3)) % reviews.length);
        }, 3000);

        window.addEventListener('resize', handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile, reviews.length]);

    const getVisibleSlides = () => {
        const slides = [];
        const numSlides = isMobile ? 1 : 3;
        for (let i = 0; i < numSlides; i++) {
            slides.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return slides;
    };

    return (
        <div className="py-14">
            <div className="mb-4 flex flex-col items-center py-5">
                <p className="text-2xl font-bold text-gray-800">Reviews</p>
                <div className="h-1 w-16 bg-yellow-500 mt-2"></div>
            </div>

            <div className="flex gap-12 px-5">
                {getVisibleSlides().map((review, index) => (
                    <GoogleReviewsCard key={review.id} review={review} isCenter={!isMobile && index === 1} />
                ))}
            </div>
        </div>
    );
}

export default Review;
