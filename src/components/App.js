import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
  <div>
	<Header/>
  <img src={logo} className="App-logo" alt="logo" />
  <main>
	    <Home/>
  </main>
  <Navbar/>
</div>
  );
}
/*className={css.container}*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br></br>
          Testing adding text.
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
}*/

export default App;
