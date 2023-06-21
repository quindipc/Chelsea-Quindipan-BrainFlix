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
                className="commentform__avatar--placeholder"
                alt="BrainFlix Avatar"
              />
              {/* this is not working -- need to target correct array item*/}
              <p className="commentitem__name">{commentsData.name}</p>
              <p className="commentitem__date">{commentsData.timestamp}</p>
              <p className="commentitem__comment">{commentsData.comment}</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
