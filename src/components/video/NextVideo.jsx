import "./NextVideo.scss";
import { Link } from "react-router-dom";

// Components
import NextVideoItem from "./NextVideoItem";

export default function NextVideo({ videos, getVideoDetails, selectedVideoDetails }) {
  return (
    <section className="nextvideo">
      <hr className="nextvideo__divider" />
      <h3 className="nextvideo__title">Next videos</h3>
      {videos
        .filter(({ id }) => id !== selectedVideoDetails?.id)
        .map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <NextVideoItem video={video} getVideoDetails={getVideoDetails} />
          </Link>
        ))}
    </section>
  );
}