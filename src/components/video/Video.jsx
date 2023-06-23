import React from "react";
import "./Video.scss";

// Components
import VideoInfo from "./VideoInfo";

export default function Video({
  image,
  video,
  title,
  description,
  channel,
  views,
  timestamp,
  likes,
}) {
  return (
    <>
      <div className="video__container">
        <video controls poster={image} className="video__video">
          <source src={video} type="video/mp4" />{" "}
        </video>
      </div>
      <div className="videodetails__container">
        <h1 className="videodetails__title">{title}</h1>
        <VideoInfo
          likes={likes}
          views={views}
          timestamp={timestamp}
          channel={channel}
        />
        <p className="videodetails__description">{description}</p>
      </div>
    </>
  );
}
