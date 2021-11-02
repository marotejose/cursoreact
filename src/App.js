import logo from './logo.svg';
import './App.css';

function App() {

  var nombre = "Jose";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo, soy {nombre} Maiorini<br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2
        </a>
      </header>
    </div>
  );
}

export default App;
