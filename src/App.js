import logo from './logo.svg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;
