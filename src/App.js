import logo from './logo.svg';
import './App.css';

const products = [
  {
    id:1,
    name:'Product 1',
    price: 100,
    decription: 'Product 1 Description'
  },
  {
    id:2,
    name:'Product 2',
    price: 150,
    decription: 'Product 2 Description'
  },
  {
    id:3,
    name:'Product 3',
    price: 60,
    decription: 'Product 3 Description'
  },
]

function App() {
  const onHandleClick = ()=>{
    console.log("click");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world !!
        </p>
        <button 
          onClick={onHandleClick}
          className='button-primary'
          >
            Click me</button>

            {products.map((product)=>(
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.decription}</p>
              </div>

            ))}
      </header>
    </div>
  );
}

export default App;
