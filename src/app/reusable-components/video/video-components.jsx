// video components

'use client';
import React, { useState } from 'react';

// 1

const VideoItem = (props) => {
  return (
    <div className="video-item">
      <img src={props.thumbnail} alt={props.vidTitle} />
      <h3>{props.title}</h3>
      <p>{props.views} views</p>
    </div>
  );
};

// 2

const VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          thumbnail={video.thumbnail}
          vidTitle={video.vidTitle}
          title={video.title}
          views={video.views}
        />
      ))}
    </div>
  );
};

// 3

const VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <iframe
        title={props.title}
        width="560"
        height="315"
        src={props.embedUrl}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

// 4

const VideoPage = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(props.videos);

  const handleVideoSelect = (props) => {
    setSelectedVideo(props.video);
  };

  return (
    <div className="video-page">
      <VideoList videos={props.videos} onVideoSelect={handleVideoSelect} />
      <VideoPlayer video={selectedVideo} />
    </div>
  );
};

// 5

// Sample video data
const Videos = (props) => {
  // Add more video objects

  return (
    <div className="app">
      <VideoPage videos={props.videos} />
    </div>
  );
};

/* {
id: 1,
title: 'Video Title 1',
description: 'This is the first video description.',
thumbnail: 'thumbnail-url-1',
views: 1000,
embedUrl: 'https://www.youtube.com/embed/video-id-1'
}, */

// 6

const VideoSearch = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (props) => {
    props.onSearch(searchQuery);
  };

  return (
    <div className="video-search">
      <input
        type="text"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// 7

const VideoComments = (props) => {
  return (
    <div className="video-comments">
      <h3>Comments</h3>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

// 8

const VideoInfo = (props) => {
  return (
    <div className="video-info">
      <p>Published on: {props.uploadDate}</p>
      <p>Likes: {props.likes}</p>
      {/* Add more video info */}
    </div>
  );
};

// 9

const VideoSidebar = (props) => {
  return (
    <div className="video-sidebar">
      <h3>Related Videos</h3>
      <ul>
        {props.relatedVideos.map((video) => (
          <li key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export {
  VideoItem,
  VideoList,
  VideoPlayer,
  VideoPage,
  Videos,
  VideoSearch,
  VideoComments,
  VideoInfo,
  VideoSidebar,
};
