import React from 'react';
import Game from './components/Game';
import Info from './components/Info';
import './styles/App.css';

const App = props => {
  return (
    <div className="App">
      <Game />
      <Info />
    </div>
  );
}

export default App;
