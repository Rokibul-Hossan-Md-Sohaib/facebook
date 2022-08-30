import React, { useState } from "react";
import "./Post.css";

import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import { Facebookdata } from "../../../data";
const Post = () => {
  const [data, setData] = useState(Facebookdata);
  const filter = data.posts.map((mapp) => mapp.likes);

  const [count, setCount] = useState(filter[0]);

  const [isInput, setIsInput] = useState([]);
  const [name, setName] = useState("Nayem");
  const [news, setNews] = useState();

  const handelSubmit = () => {
    setNews(isInput);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
 
  return (
    <div className="show">
      {data.posts.map((item) => (
        <div key={item.users.name} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={item.users.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {item.users.name}
              {/* <div className="date">{post.time}</div> */}
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{item.users.text}</div>
            <div className="show__body-img">
              <img src={item.users.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions flex">
              <FaRegThumbsUp onClick={handleClick}/> <span className="reactions-text">{count}</span>
        
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
          <div className="flex box-border h-20 w-50 p-4 border-4">
            {item.comments.map((sub) => (
              <>
                <div className="show__header-img">
                  <img src={sub.user.profile_picture} alt="user" />
                </div>
                <div className="show__header-name">
                  {sub.user.name}
                  {/* <div className="date">{post.time}</div> */}
                </div>
                <div className="show__header-name">
                  {sub.text}
                  {/* <div className="date">{post.time}</div> */}
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
      <div className="flex box-border h-20 w-50 p-4 border-4">
        {news && (
          <>
            <div className="show__header-img">
              <img src="/images/salman.jpg" alt="user" />
            </div>
            <div className="show__header-name">
              {name}
        
            </div>
            <div className="show__header-name">
              {news}
          
            </div>
          </>
        )}
      </div>
      <div class="flex">
        <div className="show__header-img">
          <img src="/images/pic1.jpg" alt="user" />
        </div>
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e) => setIsInput(e.target.value)}
        />
        <button onClick={handelSubmit}>Post</button>
      </div>
    </div>
  );
};

export default Post;
