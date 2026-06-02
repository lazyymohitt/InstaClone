import React from "react";
import "../style/feed.scss";
import "remixicon/fonts/remixicon.css";

const Posts = ({ user, post }) => {
  return (
    <div className="post">
      <div className="top-side">
        <div className="pfp">
          <img src={user?.profileImage || "https://ik.imagekit.io/mzzgm94tv/User_Posts/9c3a99f116bf2418f73da560ab81e9aa.jpg"} alt="nopic" />
        </div>
        <p>{user?.username || "anonymous"}</p>
      </div>
      <div className="image">
        <img src={post?.imageUrl || ""} alt="" />
      </div>
      <div className="bottom">
        <div className="icons">
          <div className="left-icons">
            <i className={`ri-heart-3-line ${post?.isLiked ? "like" : ""}`}></i>
            <i className="ri-chat-3-line"></i>
            <i className="ri-send-ins-line"></i>
          </div>
          <div className="right-icons">
            <i className="ri-bookmark-line"></i>
          </div>
        </div>
        <div className="captions">
          <p>{post?.caption || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
