import React from "react";
import "./CommentItem.scss";

// Components
import Timestamp from "../video/timestamp/Timestamp";

export default function CommentItem({ comment }) {
  return (
    <li className="commentitem__item">
      <hr className="commentitem__divider" />
      <div className="commentitem__container">
          <div className="commentitem__avatar" alt="BrainFlix Avatar" />
        <div className="commentitem__content">
          <div className="commentitem__info">
            <p className="commentitem__name">{comment.name}</p>
            <p className="commentitem__date">
              <Timestamp timestamp={comment.timestamp} />
            </p>
          </div>
          <p className="commentitem__comment">{comment.comment}</p>
        </div>
      </div>
    </li>
  );
}
