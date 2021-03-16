import React from 'react';
import './Videos.css';

const Videos = ({ videos }) => {
    if (!videos) return <div></div>

    // console.log(videos, videos.id, videos.id.videoId);
    console.log(videos, videos.id, videos.id.videoId);





    return (
        <React.Fragment>
            <div className="Video">
                <iframe frameBorder="0" height="100%" width="100%" src={videos.video_url} />
                <h4>{videos.title} - {videos.user}</h4>
                {/* <h3>{videos.snippet.channelTitle}</h3> */}
                {/* <h2>{videos.snippet.description}</h2> */}
            </div>
        </React.Fragment>
    );
}

export default Videos;

