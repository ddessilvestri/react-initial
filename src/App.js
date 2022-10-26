import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';

const products = [
  {
    id:1,
    name:'Product 1',
    price: 100,
    decription: 'Description 1',   
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbN4hEMNReLTBOTFa8iKdx7JSM2EJ5ZPdfJCzu0CGY_H7UDX33I8GXQil_gkw0FqmHUMY&usqp=CAU'
  },
  {
    id:2,
    name:'Product 2',
    price: 150,
    decription: 'Description 2',  
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfPm1qtVRH2dz-EMrRc3l7r8kf-mVcQfXinzXrh992OgCQD1xmpN19C0kbgYJ2YwbxY&usqp=CAU'
  },
  {
    id:3,
    name:'Product 3',
    price: 60,
    decription: 'Description 3',   
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Do-eg663j3L9FuvvV8--uvnknGCUVoBE1tmLLOnST65uTF4Z_StK7dTZ2pXe0wLLReY&usqp=CAU'
  },
]

class ButtonClass extends React.Component{
  //No es necesario al parecer
  // constructor(props){
  //   super(props);
  // };

  render(){
    return(
      <button onClick={this.props.onClick}  className={`button-primary ${this.props.type}`}>{this.props.text}</button>
    )
  }
}

function App() {

  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState('');

  const onHandleClick = () => {
    let current = new Date();
    let currentDate= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} `;
    let currentTime =  `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  
    setCounter(previousCounter => previousCounter+1);
    setDate(`${currentDate} ${currentTime} `);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <p>
          You clicked {counter} times
        </p>
        <p>
          {date}
        </p>
        <Button onClick={onHandleClick} text='Click me' type='filled' />         
      </header>
    </div>
  );
}

export default App;
