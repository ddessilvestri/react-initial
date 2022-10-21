import React from 'react';

export const Button = ({onClick,type,text})=>{
    //className={'button-primary ' + props.type}
    return(
      <button onClick={onClick}  className={`button-primary ${type}`}>{text}</button>
    )
}

export default Button;