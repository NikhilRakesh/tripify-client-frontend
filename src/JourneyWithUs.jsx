import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoPlayer from './VideoPlayer';

const JourneyWithUs = () => {

    const [videos, setVideos] = useState([]);

    const YOUTUBE_API_KEY = 'AIzaSyBzvlw8zHw8Q8KmVpeWaW_iB0pRaRaHQg0';
    const CHANNEL_ID = 'UC2ysr_lTuaAwYyVF0yCn8mw';

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const sliderRef = React.useRef(null);

    useEffect(() => {

        const fetchVideos = async () => {

            try {
                // Fetch uploads playlist ID
                let response = await fetch(
                    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
                );
                let data = await response.json();
                const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

                // Fetch latest videos from uploads playlist
                response = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=5&key=${YOUTUBE_API_KEY}`
                );
                data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error('Error fetching YouTube videos', error);
            }
        };

        fetchVideos();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

   

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
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


    return (
        <div className='mb-10'>
            <div>
                <p className="text-[40px] font-bold text-black mx-auto mb-24 text-center">
                    Journey with Us
                </p>
            </div>
            <div className=' overflow-hidden p-5'>
            {/* <button className="prev-button" onClick={prevSlide}>
                Prev
            </button> */}
                <Slider  {...settings}>
                    {
                        videos.map((video, index) => (
                            <div key={index}>
                                <VideoPlayer
                                    url={`https://www.youtube.com/watch?v=${video?.snippet?.resourceId?.videoId}`}
                                    isCenter={index === 1}
                                />
                            </div>
                        ))
                    }
                </Slider>
                {/* <button className="next-button" onClick={nextSlide}>
                Next
            </button> */}
            </div>
        </div>
    );
};

export default JourneyWithUs;
