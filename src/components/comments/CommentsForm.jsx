import "./CommentsForm.scss";
import brainflixAvatar from "../../assets/images/avatar/Mohan-muruge.jpg";

export default function CommentsForm({totalComments, input, handleInputChange, handleNewComment}) {

  return (
    <section className="commentform">
      <h2 className="commentform__number">{totalComments} Comments</h2>
      <form className="commentform__form"  onSubmit={handleNewComment}>
        <div className="commentform__avatar-container">
          <img
            className="commentform__avatar"
            src={brainflixAvatar}
            alt="BrainFlix Avatar"
          />
        </div>
        <div className="commentform__input-container">
          <label className="commentform__label" htmlFor="comment">
            Join the conversation
          </label>
          <input
            className="commentform__textarea"
            name="comment"
            id="comment"
            placeholder="Add a new comment"
            value={input}
            onChange={handleInputChange}
            autoFocus
          ></input>
          <button className="commentform__comment" type="submit" value="button">
            Comment
          </button>
        </div>
        <div className="commentform__container-tablet">
        <button className="commentform__comment-tablet" type="submit" value="button">
            Comment
          </button>
        </div>
      </form>
    </section>
  );
}
