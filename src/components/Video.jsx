import React from "react";
import "./Video.scss";

export default function Video({ selected }) {
  const { image } = selected;

  return (
    <>
      <div className="video">
        <video
          controls
          poster={selected.image}
          className="video__mp4"
        >
          <source src={selected.video} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
