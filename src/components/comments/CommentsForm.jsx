// import React, { useState, useEffect } from "react";
import details from "../../data/video-details.json";
import "./CommentsForm.scss";
import brainflixAvatar from "../../assets/images/avatar/Mohan-muruge.jpg";

export default function CommentsForm() {
  const commentsCount = details[0].comments.length;

  return (
    <section className="commentform">
      <h2 className="commentform__number">{commentsCount} comments</h2>
      <form className="commentform__form">
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
          <textarea
            className="commentform__textarea"
            name="comment"
            id="comment"
            cols="10"
            rows="3"
            placeholder="Add a new comment"
          ></textarea>
          <button className="commentform__button" type="submit" value="submit">
            Comment
          </button>
        </div>
      </form>
    </section>
  );
}
