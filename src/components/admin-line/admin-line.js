import React from "react";
import { useEffect, useState } from "react";
import "./admin-line.css"

export const AdmineLine = ({}) => {
  const [GAMES, setGAMES] = useState([])
  const [line, setLine] = useState({})

  useEffect(() => {
    getGAMES()
  }, [])

  const getGAMES = async () => {
    const response = await fetch(`http://localhost:3001/GAMES`)
    const data = await response.json()
    setGAMES(data)
  }
  const deleteLine = () => {
    setLine("")
  }
  
  return (
    <div>
      {GAMES.map((item) => {
        return (
        <div className="admine-line" key={item.id}>
          <div className="admine-line__graph-id">{item.id}</div>
          <div className="admine-line__container">
            <div className="admine-line__graph">Игра: {item.title}</div>
            <div className="admine-line__graph">Ссылка на картинку: {item.image}</div>
            <div className="admine-line__graph">Жанры: {item.genres}</div>
            <div className="admine-line__graph">Цена: {item.price}$</div>
            <div className="admine-line__graph">Ссылка на видео: {item.video}</div>
            <div className="admine-line__graph">Описание игры: {item.description}</div>
          </div>
          <div className="admine-line__container-button">
            <button className="admine-line__button" onClick={deleteLine}>Удалить</button>
            <button className="admine-line__button" onClick={()=>null}>Редактировать</button>
          </div>
          
        </div>
      )
    })}
  </div>
  )}