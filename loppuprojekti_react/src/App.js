import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from './Navi';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="Navi">
              <Navi/>
          </nav>
        <header className="App-header">
          <h1 className="App-title">Training app</h1>
        </header>
        <p className="App-intro">
            Tämä on treeniappi, johon voit syöttää omia treenitietoja, <br/> ja pääset vertailemaan omia treenituloksia!
        </p>
      </div>
    );
  }
}

export default App;
