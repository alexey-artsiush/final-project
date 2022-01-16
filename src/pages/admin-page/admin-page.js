import React from "react";
import { useState, useEffect } from 'react';
import { AdmineLine } from "../../components/admin-line";
import axios from "axios";
import "../../components/button/button.css"
import "../../components/admin-line/admin-line.css"

export const AdminPage = () => {

  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [genres, setGenres] = useState([])
  const [price, setPrice] = useState("")
  const [video, setVideo] = useState("")
  const [error, setError] = useState("")
  const [user, setUser]= useState({})

  const onSubmit = async () =>{ 
    try {
      const response = await axios.post('http://localhost:3001/GAMES', {
        title,
        image,
        genres,
        price, 
        video,
        description,
      })
      setUser(response.data)
    } catch (err) {
      setError(err.response.data)
    }}

    useEffect(() => {
      
      
    }, [])
  return (
  <div className="admin-page">
    <AdmineLine  />
    <div className="admine-line__container">
      <input
        type="text"
        onChange={(event) =>setTitle(event.target.value)}
        placeholder="Игра"
        value={title}
        className="admine-line__graph"
      />
      <input
        type="text"
        onChange={(event) =>setImage(event.target.value)}
        placeholder="Картинка"
        value={image}
        className="admine-line__graph"
      />
      <input
        type="text"
        onChange={(event) =>setGenres(event.target.value)}
        placeholder="Жанр"
        value={genres}
        className="admine-line__graph"
      />
      <input
        type="text"
        onChange={(event) =>setPrice(event.target.value)}
        placeholder="Цена"
        value={price}
        className="admine-line__graph"
      />
      <input
        type="text"
        onChange={(event) =>setVideo(event.target.value)}
        placeholder="Видео"
        value={video}
        className="admine-line__graph"
      />
      <input
        type="text"
        onChange={(event) =>setDescription(event.target.value)}
        placeholder="Описание"
        value={description}
        className="admine-line__graph"
      />
    </div>
    <button className="btn--medium" onClick={onSubmit}>Добавить игру</button>
    
  </div>
  )
}