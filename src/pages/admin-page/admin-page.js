import React from "react";
import axios from "axios";
import { AdmineLine } from "../../components/admin-line";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGamesFailure, selectGames } from "../../redux/admin/reducer";
import { useState, useEffect } from 'react';
import "./admin-page.css"
import "../../components/button/button.css"
import "../../components/admin-line/admin-line.css"

export const AdminPage = () => {
  
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [genres, setGenres] = useState([])
  const [price, setPrice] = useState("")
  const [video, setVideo] = useState("")

  const dispatch = useDispatch()
  const games = useSelector(selectGames)

  useEffect(() => {
    dispatch(getGames())
  }, [])

  const onReset = () => {
    setTitle("")
    setDescription("")
    setImage("")
    setGenres("")
    setPrice("")
    setVideo("")
  }

  const onSubmit = async () =>{ 
    try {
      const response = await axios.post('http://localhost:3001/GAMES', {
        title,
        image,
        genres: genres.split(' '),
        price: +price, 
        video,
        description,
      })
      onReset()
      dispatch(getGames())
    } catch (err) {
      dispatch(getGamesFailure())
    }}

    const deleteGame = async (event) => {
      try {
        axios.delete(`http://localhost:3001/GAMES/${event.target.id}`)
        dispatch(getGames())
      } catch (err) {
        dispatch(getGamesFailure())
      }}
     
  return (
  <div className="admin-page">
    <div className="admin-page__container">
      {games.map((item) => {
      return (
        <AdmineLine 
        key={item.id} 
        id={item.id}
        title={item.title} 
        image={item.image} 
        genres={item.genres} 
        price={item.price} 
        video={item.video} 
        description={item.description} 
        onClick={deleteGame}
        />
      )})}
    </div>

    <div className="admine-line__inputs">
      <Input placeholder={"Игра"} onChange={event => setTitle(event.target.value)} value={title} />
      <Input placeholder={"Картинка"} onChange={event => setImage(event.target.value)} value={image} />
      <Input placeholder={"Жанры"} onChange={event => setGenres(event.target.value)} value={genres} />
      <Input placeholder={"Цена"} onChange={event => setPrice(event.target.value)} value={price} />
      <Input placeholder={"Видео"} onChange={event => setVideo(event.target.value)} value={video} />
      <Input placeholder={"Описание"} onChange={event => setDescription(event.target.value)} value={description} />
    </div>
    <Button type="primary" size='m' onClick={onSubmit}>
      Добавить игру
    </Button>
  </div>
  )
}