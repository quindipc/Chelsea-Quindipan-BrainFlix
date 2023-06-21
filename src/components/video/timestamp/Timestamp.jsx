import React, { useState, useEffect } from "react";
import details from "../../../data/video-details.json";
import dateFormat, { masks } from "dateformat";


export default function Timestamp() {
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    setDetailsData(details[0]);
  }, []);

  const formatTimestamp = Date();


  console.log(dateFormat(formatTimestamp, "paddedShortDate"));
  
return (
        <>
      <p className="videoinfo__info">{detailsData.timestamp}</p> 
    </>
  );
}