import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoPlayer from './VideoPlayer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ensure you have react-icons installed
import ClipLoader from 'react-spinners/ClipLoader'; // Optional spinner component

const JourneyWithUs = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [hasMoreVideos, setHasMoreVideos] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const sliderRef = useRef(null);

    const YOUTUBE_API_KEY = 'AIzaSyBzvlw8zHw8Q8KmVpeWaW_iB0pRaRaHQg0';
    const CHANNEL_ID = 'UC2ysr_lTuaAwYyVF0yCn8mw';

    const fetchVideos = async (pageToken = '') => {
        try {
            // Fetch uploads playlist ID
            let response = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
            );
            let data = await response.json();
            const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

            // Fetch latest videos from uploads playlist
            response = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=5&pageToken=${pageToken}&key=${YOUTUBE_API_KEY}`
            );
            data = await response.json();

            if (data.items && data.items.length > 0) {
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                setNextPageToken(data.nextPageToken);
                setHasMoreVideos(!!data.nextPageToken);
            } else {
                setHasMoreVideos(false);
            }
        } catch (error) {
            console.error('Error fetching YouTube videos', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const loadMoreVideos = () => {
        if (hasMoreVideos && nextPageToken) {
            fetchVideos(nextPageToken);
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        afterChange: (current) => {
            if (current >= videos.length - 3 && hasMoreVideos) {
                loadMoreVideos();
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

     function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    }


    return (
        <div className='mb-10'>
            <div>
                <p className="text-[40px] font-bold text-black mx-auto mb-24 text-center">
                    Journey with Us
                </p>
            </div>
            <div className='flex items-center '>
                <button className="prev-button bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300" onClick={prevSlide}>
                    <FaChevronLeft size={20} />
                </button>
                <div className='overflow-hidden flex-1 m-auto p-5'>
                    {loading ? (
                        <div className='flex justify-center items-center h-full'>
                            <ClipLoader color="#000000" loading={loading} size={50} />
                        </div>
                    ) : (
                        <Slider ref={sliderRef} {...settings}>
                            {videos.map((video, index) => (
                                <div key={index} className='flex flex-col items-center'>
                                    <VideoPlayer
                                        url={`https://www.youtube.com/watch?v=${video?.snippet?.resourceId?.videoId}`}
                                        isCenter={index === 1}
                                        video={video}
                                    />
                                    <div className='mt-4 py-3 px-5  w-full'>
                                        <p className='text-center text-sm  font-semibold text-gray-800'>
                                            {truncateText(video?.snippet?.title,100)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
                <button className="next-button bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300" onClick={nextSlide}>
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default JourneyWithUs;
