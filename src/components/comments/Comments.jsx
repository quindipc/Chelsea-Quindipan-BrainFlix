// import React, { useState, useEffect } from "react";
// import details from "../../data/video-details.json";
import "./Comments.scss";
import CommentItem from "./CommentItem";

export default function Comments() {
    // const [detailsData, setDetailsData] = useState({});

    // useEffect(() => {
    //   setDetailsData(details[0]);
    // }, []);

  return (
      <>
          <section className="commentsection">
          <CommentItem />
          </section>
      </>
  );
}
