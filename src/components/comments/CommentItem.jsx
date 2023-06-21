import React, { useState, useEffect } from "react";
import comments from "../../data/video-details.json";
import "./CommentItem.scss";

export default function CommentItem() {
  const [commentsData, setCommentData] = useState({});

  // Fix this to display the comments
  useEffect(() => {
    setCommentData(comments[0]);
  }, []);

  return (
    <>
      <ul className="commentitem__container">
        <li className="commentitem__item">
          <div className="commentitem__content">
            <div className="commentitem__avater-container">
              <div
                className="commentitem__avatar"
                alt="BrainFlix Avatar"
              />
              {/* this is not working -- need to target correct array item*/}
              {/* <p className="commentitem__name">{commentsData.name}</p>
              <p className="commentitem__date">{commentsData.timestamp}</p>
              <p className="commentitem__comment">{commentsData.comment}</p> */}
              <p className="commentitem__name">PLACEHOLDER NAME</p>
              <p className="commentitem__date">fake date</p>
              <p className="commentitem__comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto id deleniti natus maxime neque dicta porro nobis
                temporibus? Beatae, aspernatur.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
