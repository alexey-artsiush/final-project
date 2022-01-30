import classNames from "classnames";
import React from "react";
import './button.css'

export const Button = ({onClick, type, children, id, size = 's'}) => {
  const btnClass = classNames({
    'btn':true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--create': type === 'create',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  })
  return (
    <button className={btnClass} id={id} onClick={onClick}>
      {children}
    </button>
  )
}