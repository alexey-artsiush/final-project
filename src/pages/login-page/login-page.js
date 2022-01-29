import React from "react";
import { useState, useEffect } from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import axios from 'axios'
import "./login-page.css"

export const LoginPage = () => {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [user, setUser]= useState({})

  const fullname = user._id ?`${user.name.first.first} ${user.name.last}` : ''
  //+375445166489

  useEffect(() => {
    if (password.length === 3) {
      onSubmit()
    }
  }, [password])

  useEffect(() => {
    if (phone.length === 13 && 
      !/(^\+)(375)(29|25|17|33|44)([0-9]{7})/.test(phone) &&
      !error
      ) {
      setError("Проверьте правильность номера телефона")
    }
  }, [phone, error])

  const onSubmit = async () =>{ 
    try {
      const response = await axios.post('http://localhost:3001/users', {
        phone,
        password,
      })
      setPhone(response.data)
    } catch (err) {
      setError(err.response.data)
    }}  

    const onChangePassword =(event) => {
      setPassword(event.target.value)
    }
    

  return (
    <div className="login-page">
      <p className="login-text">Авторизируйтесь</p>
        <Input placeholder="Логин" onChange={(event) => setPhone(event.target.value)}  value={phone} />
        <Input placeholder="Пароль" onChange={onChangePassword}  value={password} />
        <Button size="m" onClick={onSubmit}>Поехали!</Button>
        <div>
          Hello, {fullname}
        </div>
    </div>
  )
}