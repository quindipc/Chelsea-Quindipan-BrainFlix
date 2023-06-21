import React, { useState, useEffect } from "react";
import "./NextVideoItem.scss";
import videos from "../../../data/videos.json";
// import VideoDetails from "./VideoDetails";

export default function NextVideoItem() {
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
      setVideoData(videos[1]);
    }, []);

  return (
    <>
 <div className="nextvideoitem">
        <video
          poster={videoData.image}
                  className="nextvideoitem__video"> </video>
              <h3 className="nextvideoitem__title">{videoData.title}</h3>
              <p className="nextvideoitem__title">{videoData.channel}</p>
        </div>
    </>
  );
}
