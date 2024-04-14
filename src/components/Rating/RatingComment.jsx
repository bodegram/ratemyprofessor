import React from "react";
import "./RatingComment.css";
import { FaCalendarDay } from "react-icons/fa6";

export default function RatingComment() {
  return (
    <div className="comment">
      <div className="comment-rating-overall">
        <div className="comment-rating-overall-header">Overall</div>
        <div className="comment-rating-overall-point">3.2</div>
      </div>
      <div className="comment-main">
        <div className="comment-date"><FaCalendarDay/> Jul 20th, 2023</div>
        <div className="comment-text">
          There’s a lot of opportunities for people in this school if you search
          for it.
        </div>
      </div>
    </div>
  );
}
