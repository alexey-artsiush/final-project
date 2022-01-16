import React from "react";
import { Link } from "react-router-dom";
import {CartBlock} from '../cart-block'
import './header.css'


export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Магазин игр (почти Steam)
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  )
}