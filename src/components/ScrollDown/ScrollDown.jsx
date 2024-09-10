import "../ScrollDown/ScrollDown.css";
import { FaArrowDown } from "react-icons/fa6";

import React from 'react'

export const ScrollDown = () => {
  return (
    <div className="scrollDown">
        <p>Scroll down <span><FaArrowDown /></span></p>
    </div>
  )
}
