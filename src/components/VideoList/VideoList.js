import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onSelect }) => {
    const listOfVideos = videos.map((videos, id)=> <VideoItem key={id} videos={videos} onSelect={onSelect}/>)
    return (
        <div>
            {listOfVideos}
        </div>
    );
}

export default VideoList;