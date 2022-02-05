import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Comment } from "../comment/comment";
import { Button } from "../button";
import { Input } from "../input";
import { getCommentsSucces, getCommentStart, getCommentFailure } from "../../redux/comments/reducer";
import "./comments.css"

export const Comments = () => {
  const [comments, setComments] = useState([])
  const[user, setUser] = useState("")
  const[text, setText] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    try{
      dispatch(getCommentStart())
      const response = await fetch(`http://localhost:3001/comments`)
      const data = await response.json()
      dispatch(getCommentsSucces(data))
      setComments(data)
    } catch(err) {
      dispatch(getCommentFailure(err))
  }}

  const onSubmit = async () =>{ 
    try {
      const response = await axios.post('http://localhost:3001/comments', {
        user, 
        text,
        date: new Date().toLocaleString()
      })
      onReset()
      dispatch(getComments())
    } catch (err) {
      console.log(err)
    }}
  
    const onReset = () => {
      setUser("")
      setText("")
    }

return (
  <div className="comment-user">
    <h3>Комментарии:</h3>
    {comments.map(comment => <Comment user={comment.user} text={comment.text} date={comment.date} key={comment.id} />) }
    <div className="game-page__comments-form"> <h4>Оставьте свой комментарий:</h4>
      <Input placeholder={"Имя"} onChange={event => setUser(event.target.value)} value={user} />
      <Input placeholder={"Комментарий"} onChange={event => setText(event.target.value)} value={text} />
      <Button size="s" onClick={onSubmit}>Отправить</Button>
    </div>
  </div>
)
}