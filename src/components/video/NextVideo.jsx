import "./NextVideo.scss";
import NextVideoItem from "./NextVideoItem";

export default function NextVideo({ videos, getVideoDetails, selectedVideoDetails }) {
  return (
    <>
      <section className="nextvideo__section">
        <h3 className="nextvideo__title">Next videos</h3>
        {videos.filter(({id}) => id !== selectedVideoDetails?.id).map((video) => (
          <NextVideoItem
            id={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
            video={video.video}
            getVideoDetails={getVideoDetails}
          />
        ))}
      </section>
    </>
  );
}
