import React, { useState, useEffect } from "react";
import "./VideoInfo.scss";
import details from "../../data/video-details.json";
import views from "../../assets/images/icons/views.svg";
import likes from "../../assets/images/icons/likes.svg";
import Timestamp from "./timestamp/Timestamp";

export default function VideoInfo() {
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    setDetailsData(details[0]);
  }, []);

  return (
    <>
      <hr className="videoinfo__divider videoinfo__divider--tablet" />
      <div className="videoinfo">
        <div className="videoinfo__container videoinfo__container--left">
          <h2 className="videoinfo__info videoinfo__info-channel">
            By {detailsData.channel}
          </h2>
          {/* Add timestamp to readable format */}
          {/* <p className="videoinfo__info">{detailsData.timestamp}</p> */}
          <Timestamp/>
        </div>

        <div className="videoinfo__container videoinfo__container--right">
          <div className="videoinfo__engagement">
            <img className="videoinfo__icon" src={views} alt="views icon" />
            <p className="videoinfo__info">{detailsData.views}</p>
          </div>
          <div className="videoinfo__engagement">
            <img className="videoinfo__icon" src={likes} alt="likes icon" />
            <p className="videoinfo__info">{detailsData.likes}</p>
          </div>
        </div>
      </div>
      <hr className="videoinfo__divider" />
    </>
  );
}