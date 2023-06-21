import React, { useState, useEffect } from "react";
import "./Timestamp.scss";
import details from "../../../data/video-details.json";

export default function Timestamp() {
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    setDetailsData(details[0]);
  }, []);

  const date = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/Toronto",
    };
      
    
    return (
        <>
      <p className="videoinfo__info">{detailsData.timestamp}</p>
    </>
  );
}
    // Get the current date in the format of MM/DD/YYYY
// function getCurrentDate() {
//     const currentDate = new Date();
//     const month = currentDate.getMonth() + 1;
//     const day = currentDate.getDate();
//     const year = currentDate.getFullYear();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const seconds = currentDate.getSeconds();

    // Timestamps ago
    // if (hours < 60) {
    //     return `${day}/${month}/${year} - Posted ${seconds} seconds ago`;
    // } else if (minutes < 60) {
    //     return `${day}/${month}/${year} - Posted ${minutes} minutes ago`;
    // } else {
    //     return `${day}/${month}/${year} - Posted ${hours} hours ago`;
    // }
// }
