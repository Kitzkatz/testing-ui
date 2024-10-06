/* 20 social media components
 */
'use client';
import React from 'react';
//import "./social-media-components.css"

// 1

const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <h2>{props.username}</h2>
      <p>{props.bio}</p>
      <div className="user-stats">
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
      </div>
    </div>
  );
};

// 2

const Post = (props) => {
  return (
    <div className="post">
      <p>{props.content}</p>
      <div className="post-details">
        <p>By {props.author}</p>
        <p>Likes: {props.likes}</p>
        <p>Comments: {props.comments}</p>
      </div>
    </div>
  );
};

// 3

//import Post from './Post';

const PostList = (props) => {
  return (
    <div className="post-list">
      {props.posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

// 4

const FriendSuggestions = (props) => {
  return (
    <div className="friend-suggestions">
      <h3>Friend Suggestions</h3>
      <ul>
        {props.suggestions.map((user) => (
          <li key={user.id}>
            <img src={user.avatarUrl} alt={user.username} />
            <p>{user.username}</p>
            <button>Add Friend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 5

const CommentBox = (props) => {
  const [comment, setComment] = React.useState('');

  const handleSubmit = (props) => {
    props.onSubmit(comment);
    setComment('');
  };

  return (
    <div className="comment-box">
      <textarea
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleSubmit}>Post Comment</button>
    </div>
  );
};

// 6

const UserCard = (props) => {
  return (
    <div className="user-card">
      <img src={props.avatarUrl} alt={props.username} />
      <h3>{props.username}</h3>
      <p>{props.bio}</p>
      <button>Add Friend</button>
    </div>
  );
};

// 7

const NotificationBadge = (props) => {
  return (
    <div className="notification-badge">
      <i className="fas fa-bell"></i>
      <span>{props.count}</span>
    </div>
  );
};

// 8

const MessageList = (props) => {
  return (
    <div className="message-list">
      {props.messages.map((message) => (
        <div className="message" key={message.id}>
          <p>{message.content}</p>
          <p>From: {message.sender}</p>
        </div>
      ))}
    </div>
  );
};

// 9

const ActivityFeed = (props) => {
  return (
    <div className="activity-feed">
      <h3>Activity Feed</h3>
      <ul>
        {props.activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.action}</p>
            <p>{activity.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 10

const OnlineFriends = (props) => {
  return (
    <div className="online-friends">
      <h3>Online Friends</h3>
      <ul>
        {props.friends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.avatarUrl} alt={friend.username} />
            <p>{friend.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 11

const ProfileMenu = (props) => {
  return (
    <div className="profile-menu">
      <p>Welcome, {props.username}!</p>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <button onClick={props.onLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

// 12

const PhotoUpload = (props) => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      props.onUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div className="photo-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Photo</button>
    </div>
  );
};

// 13

const HashtagFeed = (props) => {
  return (
    <div className="hashtag-feed">
      <h2>#{props.hashtag}</h2>
      <div className="post-list">
        {props.posts.map((post) => (
          <div className="hashtag-post" key={post.id}>
            <p>{post.content}</p>
            <p>By {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 14

const OnlineStatus = (props) => {
  return (
    <div className="online-status">
      {props.isOnline ? (
        <span className="online">Online</span>
      ) : (
        <span className="offline">Offline</span>
      )}
    </div>
  );
};

// 15

const TrendingTopics = (props) => {
  return (
    <div className="trending-topics">
      <h3>Trending Topics</h3>
      <ul>
        {props.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

// 16

const ProfileStats = (props) => {
  return (
    <div className="profile-stats">
      <div className="stat">
        <p>{props.postsCount}</p>
        <p>Posts</p>
      </div>
      <div className="stat">
        <p>{props.followersCount}</p>
        <p>Followers</p>
      </div>
      <div className="stat">
        <p>{props.followingCount}</p>
        <p>Following</p>
      </div>
    </div>
  );
};

// 17

const ChatWindow = (props) => {
  const [message, setMessage] = React.useState('');

  const handleMessageSend = () => {
    if (message.trim()) {
      props.onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-window">
      <div className="message-list">
        {props.messages.map((message, index) => (
          <div className="message" key={index}>
            <p>{message.content}</p>
            <p>{message.sender}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

// 18

const Album = (props) => {
  return (
    <div className="album">
      <h3>Photo Album</h3>
      <div className="photo-list">
        {props.photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.imageUrl}
            alt={`Photo by ${photo.owner}`}
          />
        ))}
      </div>
    </div>
  );
};

// 19

const EventCard = (props) => {
  return (
    <div className="event-card">
      <h3>{props.eventName}</h3>
      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>
      <button>RSVP</button>
    </div>
  );
};

// 20

const UserVerification = (props) => {
  return (
    <div className="user-verification">
      {props.isVerified ? <p>Verified Account</p> : <p>Not Verified</p>}
    </div>
  );
};

export {
  UserProfile,
  Post,
  PostList,
  FriendSuggestions,
  CommentBox,
  UserCard,
  NotificationBadge,
  MessageList,
  ActivityFeed,
  OnlineFriends,
  ProfileMenu,
  PhotoUpload,
  HashtagFeed,
  OnlineStatus,
  TrendingTopics,
  ProfileStats,
  ChatWindow,
  Album,
  EventCard,
  UserVerification,
};
