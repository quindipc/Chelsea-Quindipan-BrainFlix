import "./NextVideoItem.scss";
import videos from "../../../data/videos.json";

export default function NextVideoItem({ videoData }) {
  return (
    <div className="nextvideoitem">
      <video poster={videoData.image} className="nextvideoitem__video"></video>
      <h3 className="nextvideoitem__title">{videoData.title}</h3>
      <p className="nextvideoitem__channel">{videoData.channel}</p>
    </div>
  );
}
