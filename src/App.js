import logo from './logo.svg';
import './App.css';
import React from 'react';
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

// const Button = ({onClick,type,text})=>{
//   //className={'button-primary ' + props.type}
//   return(
//     <button onClick={onClick}  className={`button-primary ${type}`}>{text}</button>
//   )
// }

function App() {

  const onHandleClick = () => {
    console.log("click");
  }

  const onHandleAddProduct = () =>{
    console.log("add product")
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world !!
        </p>
        <Button onClick={onHandleClick} text='Click me' type='filled' />
         
          <div className='products'>
            {products.map((product)=>(
              <div key={product.id}>
                <h3>{product.name}</h3>
                <img  className='product-image' src={product.imageUrl} alt={product.name}/>
                <p>{product.decription}</p>
                <ButtonClass onClick={onHandleAddProduct} text='Add to Cart' type='borderLine'/>
              </div>

            ))}
          </div>
      </header>
    </div>
  );
}

export default App;
