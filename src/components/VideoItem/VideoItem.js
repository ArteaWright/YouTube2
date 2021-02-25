import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videos, onSelect}) => {
    return (
       <div>
         <div>
           <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
            <img style={{marginRight: '20px'}} alt="thumbnail" src={videos.snippet.thumbnails.medium.url} onClick={()=> onSelect({videos})}/>
            <h2>{videos.snippet.title}</h2>
            <h3>{videos.snippet.channelTitle}</h3>
           </div>
       </div>

       </div>
    );
}

export default VideoItem;