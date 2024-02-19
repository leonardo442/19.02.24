import logo from './logo.svg';
import './App.css';
import {exibirHorario} from './components/Horario';
import { fazerLogin } from './components/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id="lnk"
        >
          Learning React
        </a>
         <br />
        <input type="text" id="txtLogin" />
        <br />
        <input type="text" id="txtSenha" />
        <br />
        <button
          onClick={ fazerLogin}
        >fazerLogin</button>
        <br />
        <button
        onClick={exibirHorario}
        >ver Horario</button>
      </header>
    </div>
  );
}

export default App;
