import React from "react";
import "./Video.scss";

export default function Video({ selected }) {
  const { image, video } = selected;
  const BASE_URL = "http://localhost:8000/";
  const imageUrl = `${BASE_URL}${image}`;

  return (
      <div className="video">
        <video
          controls
          poster={imageUrl}
          className="video__mp4"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
  );
}
