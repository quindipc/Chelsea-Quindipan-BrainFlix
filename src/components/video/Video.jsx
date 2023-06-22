import React, { useState, useEffect } from 'react';
import "./Video.scss";
import videos from "../../data/videos.json";
import VideoDetails from "./videodetails/VideoDetails";

export default function Video() {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    setVideoData(videos[0]);
  }, []);

  return (
      <>
        <div className="video__container">
        <video controls
          poster={videoData.image}
          className="video__video"><source src={videoData.video} /> </video>
        </div>
        <VideoDetails/>
      </>
    );
}
