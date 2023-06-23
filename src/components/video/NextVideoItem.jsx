import "./NextVideoItem.scss";

export default function NextVideoItem({id, image, title, channel, getVideoDetails}) {
  return (
    // Change to the next video
    <div key={id} className="nextvideoitem" onClick={() => getVideoDetails(id)}>
      <video poster={image} className="nextvideoitem__video"></video>
      <h3 className="nextvideoitem__title">{title}</h3>
      <p className="nextvideoitem__channel">{channel}</p>
    </div>
  );
}
