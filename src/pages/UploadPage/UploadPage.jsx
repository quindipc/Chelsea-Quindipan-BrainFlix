import Header from "../../components/header/Header";
// import thumbnail from "../../assets/images/thumbnail"

export default function UploadPage() {
    return (
        <>
            {/* TODO: Ensure that the upload button in the Header is linked to this page */}
            <Header />  
            <h1 className="upload__title">Upload Video</h1>
            <h2 className="upload__subheader">Video Thumbnail</h2>
            {/* <img className="upload__thumbnail"src={thumbnail} alt="bike thumbnail" /> */}
            <form action="submit">

                {/* TODO:Add error handling for the inputs  */}
                <label  className="upload__subheader" htmlFor="">Title Your Video</label>
                <input className="upload__input" type="text" />
                <label  className="upload__subheader" htmlFor="">Add a video description</label>
                <input className="upload__input" type="text" />

                {/* TODO: Add an event handler that handles the submission */}
                <button onSubmit="">Publish</button>

                {/* TODO: Pressing this button should cancel and return to home page */}
                <button onClick="">Cancel</button>
            </form>
        </>

        
    );
}