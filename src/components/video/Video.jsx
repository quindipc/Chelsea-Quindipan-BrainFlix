import React, { useState, useEffect } from 'react';
import "./Video.scss";
import videos from "../../data/videos.json";
import VideoDetails from "./VideoDetails";

export default function Video() {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    setVideoData(videos[0]);
  }, []);

  return (
      <>
        <div className="videocontent__container">
        <video controls
          poster={videoData.image}
          className="videocontent__video"><source src={videoData.video} /> </video>
        {/* <img className="videocontent__image"
          src={videoData.image} alt={videoData.title}/> */}
        <h1 className="videocontent__title">{videoData.title}</h1>
        </div>
        <VideoDetails/>
      </>
    );
}
