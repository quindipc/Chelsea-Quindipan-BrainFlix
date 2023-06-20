import "./Video.scss";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

export default function Video() {
  return (
    <>
      {/* This can be taken from the video JSON file */}
      {/* Do I need to map though the array??  */}
      {videos.image.map()}
      <video className="videocontent__video"></video>
      <img className="videocontent__image" src="#" alt="" />
      <h1 className="videocontent__title">BMX Rampage: 2021 Highlights</h1>
      {/* need to add the video alt as the title */}
      <hr className="videocontent__divider" />



      
      {/* Maybe I can put this into another component??*/}
      {/* This can be taken from the video details JSON file  */}
      <h2 className="videocontent__channel">By Red Brow</h2>
      <p className="videocontent__likes">Likes</p>
      <p className="videocontent__views">Views</p>
      {/* Need to convert timestamp to readable format -- reuse from bandsite */}
      <p className="videocontent__timestamp">Date</p>
      <hr className="videocontent__divider" />
      <p className="videocontent__description">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam
        atque, magni unde exercitationem dolor.
      </p>

    </>
  );
}
