import React from "react";
import { useState, useEffect } from "react";
import { Comment } from "../comment/comment";
import "./comments.css"

export const Comments = () => {
  const [comments, setComments] = useState([])


  const getComments = async () => {
    const response = await fetch(`http://localhost:3001/comments`)
    const data = await response.json()
    setComments(data)
    console.log(comments)
}

  useEffect(() => {
    getComments()
  }, [])



return (
  <div className="comment-user">
    {comments.map(comment => <Comment user={comment.user} text={comment.text} key = {comment.id} />) }
  </div>
)
}