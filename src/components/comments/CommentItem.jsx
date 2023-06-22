import React, { useState, useEffect } from "react";
import "./CommentItem.scss";
import details from "../../data/video-details.json";
import Timestamp from "../video/timestamp/Timestamp";

export default function CommentItem({ comment }) {
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    setDetailsData(details[0]);
  }, []);

  return (
    <ul className="commentitem__container">
      <li className="commentitem__item">
        <div className="commentitem__content">
        <hr class="commentitem__divider"/>
          <div className="commentitem__container">
            <div className="commentitem__avatar" alt="BrainFlix Avatar" />
            <p className="commentitem__name">{comment.name}</p>
            <Timestamp
              className="commtitem__date"
              timestamp={detailsData.timestamp}
            />
            <p className="commentitem__comment">{comment.comment}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
