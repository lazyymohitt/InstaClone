import React from "react";
import "../style/feed.scss";
import 'remixicon/fonts/remixicon.css'

const Posts = () => {
  return (
    <div className="post">
      <div className="top-side">
        <div className="pfp">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="nopic"
          />
        </div>
        <p>username</p>
      </div>
      <div className="image">
        <img src="https://images.unsplash.com/photo-1628173422874-0d18ff5bfb83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
