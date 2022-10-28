import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Button2 from './components/Button2';
const productsArray = [
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


function App() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState('');

  const onHandleClick = () => {
    let current = new Date();
    let currentDate= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} `;
    let currentTime =  `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  
    setCounter(previousCounter => previousCounter+1);
    setDate(`${currentDate} ${currentTime} `);
    makeRequestToBuyANewPhone();
    
  }
  const getCurrentDatetime = ()=>{

    let current = new Date();
    let currentDate= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} `;
    let currentTime =  `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  
    return (
      `${currentDate} ${currentTime} `
      );
  }

  useEffect(() => {
    setTitle('Hello!');
  }, [])
  
  useEffect(() => {
    if (counter  > 2)
      setTitle('Hello World: ' + counter);
  }, [counter])
  
  useEffect(() => {
    const getProducts = ()=>{
      setTimeout(()=>{
        setProducts(productsArray);
      },2000)
    }
  }, [])
  
  const makeRequestToBuyANewPhone = ()=>{
    const pr = new Promise ((resolve)=>
      setTimeout(() => {
        
        resolve(`Response correct: ${getCurrentDatetime()}`);
        //reject('false');
      }, 3000)
    
    );

    pr.then(
      result=> console.log(result),
      error => console.log(error)
    
    );
  } 
  return (
    <div className="App">
      <header className="App-header">
        <Button2/>
        <img src={logo} className="App-logo" alt="logo" />       
        <p>{title}</p>
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
