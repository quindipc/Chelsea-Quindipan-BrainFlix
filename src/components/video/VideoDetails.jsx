import React, { useState, useEffect } from "react";
import "./VideoDetails.scss";
import details from "../../data/video-details.json";
import VideoInfo from "./VideoInfo";

export default function VideoDetails() {
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    setDetailsData(details[0]);
  }, []);

  return (
      <div className="videodetails">
      <h1 className="videodetails__title">{detailsData.title}</h1>
      <VideoInfo/>
      <p className="videodetails__description">{detailsData.description}</p>
      </div>
  );
}
