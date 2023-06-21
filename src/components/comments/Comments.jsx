import "./Comments.scss";
import CommentItem from "./CommentItem";

export default function Comments() {

  return (
      <>
          <section className="commentsection">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          </section>
      </>
  );
}
