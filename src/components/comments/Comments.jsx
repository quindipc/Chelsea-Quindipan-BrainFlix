import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Comments.scss";
import CommentItem from "./CommentItem";
import CommentsForm from "./CommentsForm";

export default function Comments({ comments, setSelectedVideoDetails  }) {
  // New Comment state
  const [input, setInput] = useState("");

  // Handles the comment input
  const handleInputChange = (e) => { 
    setInput(e.target.value);
  };

  // Handles creating a new comment
  const handleNewComment = (e) => {
    e.preventDefault();
    if (input === "" || input?.trim()?.length === 0) return;

    // TODO: Handle other comment properties
    // TODO: Generare a uuid for new comment
    setSelectedVideoDetails((previousState) => ({
      ...previousState,
      comments: [...previousState.comments, { comment: input, id: uuidv4() }]
    }));

    // Clear input state after appending comment
    setInput("");
  };

  return (
    <>
      <CommentsForm totalComments={comments?.length} input={input} handleInputChange={handleInputChange} handleNewComment={handleNewComment} />
      <section className="commentsection">
        <ul className="commentitem__container">
          {comments?.length > 0 && comments?.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />
          })}
        </ul>
      </section>
    </>
  );
}