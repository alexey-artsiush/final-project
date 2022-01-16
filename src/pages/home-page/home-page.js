import React from 'react';
import { useState, useEffect } from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';


export const HomePage = () => {
  const [GAMES, setGAMES] = useState([])
  useEffect(() => {
    getGAMES()
  }, [])

  const getGAMES = async () => {
    const response = await fetch('http://localhost:3001/GAMES')
    const data = await response.json()
    setGAMES(data)
  }
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
