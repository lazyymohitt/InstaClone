import React from "react";
import "../style/feed.scss";
import "remixicon/fonts/remixicon.css";

const Posts = ({ user, post }) => {
  return (
    <div className="post">
      <div className="top-side">
        <div className="pfp">
          <img src={user.profileImage} alt="nopic" />
        </div>
        <p>{user.username}</p>
      </div>
      <div className="image">
        <img src={post.imageUrl} alt="" />
      </div>
      <div className="bottom">
        <div className="icons">
          <div className="left-icons">
            <i class="ri-heart-3-line"></i>
            <i class="ri-chat-3-line"></i>
            <i class="ri-send-ins-line"></i>
          </div>
          <div className="right-icons">
            <i class="ri-bookmark-line"></i>
          </div>
        </div>
        <div className="captions">
          <p>{post.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
