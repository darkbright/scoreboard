import React from 'react';
import './App.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      }, 0);
      
      return {
        players: [
          ...prevState.players,
          {id: maxId + 1, name, score: 0}
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      })
      return {players: [...prevState.players]}
    })
  }
  
  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
  
        {/*Player List*/}
        { this.state.players.map(player => (
          <Player name={player.name} key={player.id} id={player.id}           
          score={player.score}          
          removePlayer={this.handleRemovePlayer}
          changeScore={this.handleChangeScore} />
          )) 
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>

    );  
  }
}

export default App;
