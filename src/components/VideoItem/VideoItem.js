import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videos, onSelect}) => {
    return (
      <div className="listouterOuter">
       <div className="listOuter">
         <div>
           <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
            <img style={{marginRight: '20px'}} alt="thumbnail" src={videos.snippet.thumbnails.medium.url} onClick={()=> onSelect({videos})}/>
            <div>
            <h2>{videos.snippet.title}</h2>
            <h3>{videos.snippet.channelTitle}</h3>
            <h4>{videos.snippet.description}</h4>
            </div>
           </div>
       </div>

       </div>
       </div>
    );
}

export default VideoItem;