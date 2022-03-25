import React from 'react'
import './Button.css'

function botao (props) {
   let classes = 'button '
   classes += props.operation ? 'operation' : ''
   classes += props.double ? 'double' : ''
   classes += props.triple ? 'triple' : ''
 return (
    <button 
      onClick={e => props.click && props.click(e.target.innerHTML)}
      className={classes}>
      {props.label}
      </button>
 )
}
export default botao;

// export default props => {
//       <button className='button'>{props.label}</button>
//   }