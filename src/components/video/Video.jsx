import React from "react";
import "./Video.scss";

// Components
import VideoInfo from "./VideoInfo";

export default function Video({ selected }) {
  const { image, video, title, description, channel, views, timestamp, likes } =
    selected;

  return (
    <>  
      <div className="video__container">
        <video controls poster={image} className="video__video">
          <source src={video} type="video/mp4" />{" "}
        </video>
      </div>
      <div className="videodetails__container">
        <h1 className="videodetails__title">{title}</h1>
        <VideoInfo activity={selected} />
        <p className="videodetails__description">{description}</p>
      </div>
    </>
  );
}
