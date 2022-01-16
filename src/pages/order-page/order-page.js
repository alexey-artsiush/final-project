import React from "react";
import { useSelector } from "react-redux";
import {calcTotalPrice} from '../../components/utils'
import { OrderItem } from "../../components/order-item";
import './order-page.css'

export const OrderPage = () => {
  const items = useSelector(state=>state.cart.itemsInCart)

  const endingWord = () =>{  
    let result
    const option = ["товар", "товара", "товаров"]
    let count = items.length % 100
    if (count >= 5 && count  <=20) {
    result = option[2]
  } else {
    count = count % 10;
    if (count == 1) {
        result = option[0];
    } else if (count >= 2 && count <= 4) {
        result = option[1];
    } else {
        result = option[2];
    }}
  return result
  }

  if(items.length<1) {
    return <h1>Ваша корзина пуста</h1>
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map(game => <OrderItem game ={game} key ={game.id} />)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total">
          <span>
            {items.length} {endingWord()} на сумму {calcTotalPrice(items)} $
          </span>
        </div>
      </div>
    </div>
  )
}