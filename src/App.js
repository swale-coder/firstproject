import logo from './logo.svg';
import './App.css';

function Header (){
  return(
 
  <header>
    <img src="public\logo512.png "/>
    <p>welcome to my react  </p>
    <p> This is my first page </p>
  </header>);
}


function Hello (){
  return(
    <div>
      Hello, I am swale siddiqui!
    </div>
  )
}






function App() {
  return (
    <div className="App">
     <Header/>
     <Hello/> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
