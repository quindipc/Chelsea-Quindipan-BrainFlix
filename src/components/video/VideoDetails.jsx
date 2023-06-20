import React, { useState, useEffect } from 'react';
import "./VideoDetails.scss";
// import videos from "../../data/videos.json";
import details from "../../data/video-details.json";

export default function VideoDetails() {
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    setDetailsData(details[0]);
  }, []);

  return (
    <>
      <hr className="videocontent__divider" />
      <h2 className="videocontent__channel">{detailsData.channel}</h2>
      <p className="videocontent__likes">{detailsData.likes}</p>
      <p className="videocontent__views">{detailsData.views}</p>
      <p className="videocontent__timestamp">{detailsData.timestamp}</p>    {/* Need to convert timestamp to readable format -- reuse from bandsite */}
      <hr className="videocontent__divider" />
      <p className="videocontent__description">
      {detailsData.description}
      </p>

    </>
  );
}
