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
          .map((video) => (

            // TODO: Deconstruct this 
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
