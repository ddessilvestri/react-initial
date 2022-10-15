import logo from './logo.svg';
import './App.css';

const products = [
  {
    id:1,
    name:'Product 1',
    price: 100,
    decription: 'Description 1'
  },
  {
    id:2,
    name:'Product 2',
    price: 150,
    decription: 'Description 2'
  },
  {
    id:3,
    name:'Product 3',
    price: 60,
    decription: 'Description 3'
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
        <button onClick={onHandleClick} className='button-primary'>
            Click me</button>
          <div className='products'>
            {products.map((product)=>(
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.decription}</p>
              </div>

            ))}
          </div>
      </header>
    </div>
  );
}

export default App;
