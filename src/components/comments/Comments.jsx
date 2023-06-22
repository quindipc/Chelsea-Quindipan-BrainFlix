import "./Comments.scss";
import CommentItem from "./CommentItem";
import comments from "../../data/video-details.json";

export default function Comments() {
  return (
    <section className="commentsection">
      {comments[0].comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </section>
  );
}