import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import axios from 'axios'
import "./login-page.css"

export const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const history = useHistory()

  const login = async () =>{ 
    try {
      const response = await axios.post('http://localhost:3001/login',
      {
        "email": `${email}`,
        "password": `${password}`
      }) 
      setEmail(response.data)
      setPassword("")
      setEmail("")
      setError("Добро пожаловать!")
      setTimeout(()=> history.push('/home'), 4000)
      } catch (err) {
        setError("Пользователь не найден")
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        login()       
      } else if (email !== /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ && !error && password.length > 6) {
        setError("Введите e-mail правильного формата")
      }}
  
    const registration = async () =>{ 
      if (email !== /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ && !error && password.length > 6) {
        setError("e-mail должен иметь вид example@example.com и пароль должен быть более 5 знаков")
      } else {
        try {
          const response = await axios.post('http://localhost:3001/register',
          {
            "email": `${email}`,
            "password": `${password}`
          })
          setEmail(response.data)
          setPassword("")
          setEmail("")
          setError("Вы успешно зарегестрированы")
        } catch (err) {
          setError(err.response.data)
        }
      }}  


    
  return (
    <div className="login-page">
        <Input placeholder="e-mail" onChange={(event) => setEmail(event.target.value)}  value={email} />
        <Input placeholder="Пароль" type="password" onChange={(event) => setPassword(event.target.value)}  value={password} />
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