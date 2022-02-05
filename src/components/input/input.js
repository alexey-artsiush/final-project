import React from "react";
import { useState, useEffect } from 'react';
import "./input.css"

export const Input = ({ placeholder, onChange, value, type="text" }) => {
  
return (
  <>
    <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="input"
      />
  </>
)
}