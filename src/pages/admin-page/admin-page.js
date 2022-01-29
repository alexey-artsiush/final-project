import React from "react";
import axios from "axios";
import { FaBeer } from 'react-icons/fa'
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
  // const [error, setError] = useState("")
  // const [user, setUser]= useState({})

  const dispatch = useDispatch()
  const games = useSelector(selectGames)

  useEffect(() => {
    dispatch(getGames())
  }, [])

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const onChangeImage = (event) => {
    setImage(event.target.value)
  }
  const onChangeGenres = (event) => {
    setGenres(event.target.value)
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }
  const onChangeVideo = (event) => {
    setVideo(event.target.value)
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
      dispatch(getGames())
    } catch (err) {
      dispatch(getGamesFailure())
    }}

    const deleteGame = (event) => {
      console.log(event.target.id)
      // if (id == Button.key) {
      //   console.log('grac')
        // axios.delete('http://localhost:3001/GAMES', { 
        //   params: {
        //     id: 7
        //   }
         
        // })
        // .then(
        //   response => {console.log(response)
          // dispatch(getGames())
          // })
      // }
    }
     
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
      <div className="admine-line__graph-id"> * </div>
      <Input placeholder={"Игра"} onChange={onChangeTitle} value={title} />
      <Input placeholder={"Картинка"} onChange={onChangeImage} value={image} />
      <Input placeholder={"Жанры"} onChange={onChangeGenres} value={genres} />
      <Input placeholder={"Цена"} onChange={onChangePrice} value={price} />
      <Input placeholder={"Видео"} onChange={onChangeVideo} value={video} />
      <Input placeholder={"Описание"} onChange={onChangeDescription} value={description} />
    </div>
    <Button type="primary" size='m' onClick={onSubmit}>
      Добавить игру
    </Button>
  </div>
  )
}