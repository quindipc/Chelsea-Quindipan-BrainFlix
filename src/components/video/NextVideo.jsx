import "./NextVideo.scss";

// Components
import NextVideoItem from "./NextVideoItem";

export default function NextVideo({
  videos,
  getVideoDetails,
  selectedVideoDetails,
}) {
  return (
    <>
      <section className="nextvideo">
        <hr className="nextvideo__divider" />

        {/* Filter out the videos from the clicked one */}
        <h3 className="nextvideo__title">Next videos</h3>
        {videos
          .filter(({ id }) => id !== selectedVideoDetails?.id)
          .map(({ id, image, title, channel, video }) => (
            <NextVideoItem
              key={id}
              id={id}
              image={image}
              title={title}
              channel={channel}
              video={video}
              getVideoDetails={getVideoDetails}
            />
          ))}
      </section>
    </>
  );
}
