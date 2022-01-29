import React from "react";
import { useState, useEffect } from 'react';
import "./input.css"

export const Input = ({ placeholder, onChange, value }) => {
  

return (
  <>
    <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="admine-line__graph"
      />
  </>
)
}