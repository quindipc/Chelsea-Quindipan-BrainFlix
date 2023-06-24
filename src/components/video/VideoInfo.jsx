import "./VideoInfo.scss";

// Assests
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

// Components
import Timestamp from "./timestamp/Timestamp";

export default function VideoInfo({ activity }) {
  
  const { channel, timestamp, views, likes } = activity;

  return (
    <>
      <hr className="videoinfo__divider videoinfo__divider--tablet" />
      <div className="videoinfo">
        <div className="videoinfo__container videoinfo__container--left">
          <h2 className="videoinfo__info videoinfo__info-channel">
            By {channel}
          </h2>
          <p className="videoinfo__date">
            <Timestamp timestamp={timestamp} />
          </p>
        </div>
        <div className="videoinfo__container videoinfo__container--right">
          <div className="videoinfo__engagement">
            <img className="videoinfo__icon" src={viewsIcon} alt="views icon" />
            <p className="videoinfo__info">{views}</p>
          </div>
          <div className="videoinfo__engagement">
            <img className="videoinfo__icon" src={likesIcon} alt="likes icon" />
            <p className="videoinfo__info">{likes}</p>
          </div>
        </div>
      </div>
      <hr className="videoinfo__divider" />
    </>
  );
}
