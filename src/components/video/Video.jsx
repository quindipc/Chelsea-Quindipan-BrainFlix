import React from "react";
import "./Video.scss";

// Components
import VideoInfo from "./VideoInfo";

export default function Video({ selected }) {
  const { image, video, title, description, channel, views, timestamp, likes } =
    selected;

  return (
    <>  
      <div className="video">
        <video controls poster={image} className="video__mp4">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="video__container">
      <div className="video__details">
        <h1 className="video__details-title">{title}</h1>
        <VideoInfo activity={selected} />
          <p className="video__details-description">{description}</p>
          {/* TODO: May need to put comments in here to flex for tablet & desktop mode and next video section */}
      </div>
      </div>
    </>
  );
}
