import React from "react";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import "./admin-line.css"

export const AdmineLine = ({id, title, image, genres, price, video, description, onClick }) => {
  
  useEffect(() => {
    getGames()
  }, [])

  const [games, setGames] = useState([])

  const getGames = async () => {
    const response = await fetch(`http://localhost:3001/GAMES`)
    const data = await response.json()
    setGames(data)
  }

        return (
        <div className="admine-line" key={id}>
          <div className="admine-line__cart">
            <div className="admine-line__graph">{id} Игра: {title}</div>
            <div className="admine-line__graph-scroll">Ссылка на картинку: {image}</div>
            <div className="admine-line__graph">Жанры: {genres}</div>
            <div className="admine-line__graph">Цена: {price}$</div>
            <div className="admine-line__graph-scroll">Ссылка на видео: {video}</div>
            <div className="admine-line__graph-scroll">Описание игры: {description}</div>
          </div>
          <div className="admine-line__cart-button">
            <Button size="m" onClick={onClick} id={id}> {id} Удалить</Button>
          </div>
          
        </div>
      )
    }
