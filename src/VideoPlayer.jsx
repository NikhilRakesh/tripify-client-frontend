import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, isCenter, video }) => {
   
    return (
        <div className={`relative w-full h-full max-w-md mx-auto aspect-video overflow-hidden rounded-lg shadow-lg bg-black ${isCenter ? ' border-4 border-black shadow-lg' : ''}`}>
            <ReactPlayer
                url={url}
                playing
                loop
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                controls={false}
                muted
            />
        </div>
    );
};

export default VideoPlayer;
