import logo from './logo.svg';
import './App.css';

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

function App() {
  const onHandleClick = ()=>{
    console.log("click");
  };

  // const newFind = () =>{
  //   Array.prototype.newFind = function(callback, args) {
  //     if(!callback || typeof callback !== 'function') throw TypeError();
  //     const size = this.length;
  //     const that = args || this;
  //     for(let i = 0; i < size; i++){
  //       try {
  //         if(!!callback.apply(that, [this[i], this])){
  //           return this[i];
  //         }
  //       } catch(e){
  //         return undefined;
  //       }
  //     }
  //     return undefined;
  //   }
    
  // }

//  const varvslet = ()=>{
//    var a = 2;
//    var a = 3;
//    console.log("a: ",a);

//    let b = 2;

//    console.log("b  (1) -->", b);
//    for (let b = 0; b < 5; b++){
//     console.log("b (2) -->:",b)
//    }
   
//    console.log("b  (1) -->", b);
//  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world !!
        </p>
        <button onClick={onHandleClick} className='button-primary'>
            Click me</button>
          <div className='products'>
            {products.map((product)=>(
              <div key={product.id}>
                <h3>{product.name}</h3>
                <img  className='product-image' src={product.imageUrl} alt={product.name}/>
                <p>{product.decription}</p>
              </div>

            ))}
          </div>
      </header>
    </div>
  );
}

export default App;
