import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import axios from 'axios'
import "./login-page.css"

export const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [user, setUser]= useState({})

  const history = useHistory()

  const login = async () =>{ 
    // if (email !== /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ && !error && password.length > 6) { 
      try {
        const response = await axios.post('http://localhost:3001/login',
        {
          "email": `${email}`,
          "password": `${password}`
        })
       
        setEmail(response.data)
        history.push('/home')
      } catch (err) {
        setError(err.response.data)
      }}
    // }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        login()       
      }}
  
    const registration = async () =>{ 
      try {
        const response = await axios.post('http://localhost:3001/register',
        {
          "email": `${email}`,
          "password": `${password}`
        })
        setEmail(response.data)
      } catch (err) {
        setError(err.response.data)
      }}  

    const onChangePassword =(event) => {
      setPassword(event.target.value)
    }
    
  return (
    <div className="login-page">
        <Input placeholder="Логин" onChange={(event) => setEmail(event.target.value)}  value={email} />
        <Input placeholder="Пароль" type="password" onChange={onChangePassword}  value={password} />
          <div className="login-page__buttons">
          <Button size="m" onClick={login} onKeyDown={handleKeyDown}>Войти</Button>
          <Button size="m" type='create' onClick={registration}>Зарегистрироваться</Button>
          </div>
        <div>
        {error}
        </div>
    </div>
  )
}