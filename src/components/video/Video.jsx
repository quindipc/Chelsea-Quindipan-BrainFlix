import React from "react";
import "./Video.scss";

export default function Video({ selected }) {
  const { image, video } = selected;

  return (
      <div className="video">
        <video
          controls
          poster={image}
          className="video__mp4"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
  );
}
