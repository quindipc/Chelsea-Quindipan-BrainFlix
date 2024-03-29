import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Comments.scss";

// Components
import CommentItem from "../CommentItem/CommentItem";
import CommentsForm from "../CommentsForm/CommentsForm";

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

    setSelectedVideoDetails((previousState) => ({
      ...previousState,
      comments: [...previousState.comments, { name: "Chelsea Quindipan", comment: input, id: uuidv4() }]
    }));

    // Clears input state after appending comment
    setInput("");
  };

  return (
    <>
      <CommentsForm totalComments={comments?.length} input={input} handleInputChange={handleInputChange} handleNewComment={handleNewComment} />
      <section className="comments">
        <ul className="comments__container">
          {comments?.length > 0 && comments?.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />
          })}
        </ul>
      </section>
    </>
  );
}