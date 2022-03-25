import React from "react";
import './Display.css'

function tela(props) {
 return (
   <div className="display">
      {props.value}
   </div>
 ) 
}

export default tela