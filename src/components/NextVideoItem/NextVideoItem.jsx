import "./NextVideoItem.scss";

export default function NextVideoItem({ video, getVideoDetails }) {
  const { id, image, title, channel } = video;

  return (
    // Change to the next video when clicked and display it
    <div className="nextvideoitem" onClick={() => getVideoDetails(id)}>
      <div className="nextvideoitem__container">
      <video poster={image} className="nextvideoitem__video"></video>
      </div>
      <div className="nextvideoitem__info">
        <h3 className="nextvideoitem__title">{title}</h3>
        <p className="nextvideoitem__channel">{channel}</p>
      </div>
    </div>
  );
}
