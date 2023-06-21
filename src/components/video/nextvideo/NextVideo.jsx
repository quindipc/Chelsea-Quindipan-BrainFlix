import React, { useState, useEffect } from "react";
import "./NextVideo.scss";
import NextVideoItem from "./NextVideoItem";
// import videos from "../../data/videos.json";
// import VideoDetails from "./VideoDetails";

export default function NextVideo() {
  //   const [videoData, setVideoData] = useState({});

  //   useEffect(() => {
  //     setVideoData(videos[0]);
  //   }, []);

  return (
    <>
          <section className="nextvideo__section">
              <h3 className="nextvideo__title">Next videos</h3>
              <NextVideoItem/>
      </section>
    </>
  );
}
