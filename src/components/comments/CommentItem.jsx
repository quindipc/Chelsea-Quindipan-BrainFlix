import React from "react";
import "./CommentItem.scss";
import Timestamp from "../video/timestamp/Timestamp";

export default function CommentItem({ comment }) {
  return (  
      <li className="commentitem__item">
        <div className="commentitem__content">
        <hr className="commentitem__divider"/>
          <div className="commentitem__container">
            <div className="commentitem__avatar" alt="BrainFlix Avatar" />
            <p className="commentitem__name">{comment.name}</p>
            <Timestamp
              className="commtitem__date"
              timestamp={comment.timestamp}
            />
            <p className="commentitem__comment">{comment.comment}</p>
          </div>
        </div>
      </li> 
  );
}
