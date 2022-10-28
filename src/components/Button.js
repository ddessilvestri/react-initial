import React from 'react';

export const Button = ({onClick,type,text})=>{
    return(
      <button onClick={onClick}  className={`button-primary ${type}`}>{text}</button>
    )
}

export default Button;