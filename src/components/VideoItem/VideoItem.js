import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videos, onSelect }) => {
  console.log('videos :: ', videos)
  return (
    <div className="listouterOuter">
      <div className="listOuter">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img style={{ marginRight: '20px' }} alt="thumbnail" src={videos.img_url} onClick={() => onSelect({ videos })} />
            <div>
              <h2>{videos.title}</h2>
              <h3>{videos.user}</h3>
              {/* <h4>{videos.snippet.description}</h4> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VideoItem;