import React from 'react';
import './Videos.css';

const Videos = ({ videos }) => {
    if (!videos) return <div></div>

    // console.log(videos, videos.id, videos.id.videoId);
    console.log(videos);


    const videoId = videos.id.videoId;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;



    return (
        <React.Fragment>
            <div className="Video">
                <iframe frameBorder="0" height="100%" width="100%" src={videoSrc} />
                <h4>{videos.snippet.title} - {videos.snippet.channelTitle}</h4>
                <h3>{videos.snippet.channelTitle}</h3>
                <h2>{videos.snippet.description}</h2>
            </div>
        </React.Fragment>
    );
}

export default Videos;

