import React from "react";
import "./comment.css"

export const Comment = ({user, text}) => {

  return (
    <div className="comment">
      <div className="comment__user">Пользователь: <span className="comment__text-main">{user}</span></div>
      <div className="comment__text">Написал: <span className="comment__text-main">{text}</span></div>
    </div>
  )
}