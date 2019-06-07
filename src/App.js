import React from 'react';
import {connect} from "react-redux";

import './App.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends React.Component {
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
        <Header players={this.props.players} />
  
        {/*Player List*/}
        { this.props.players.map(player => (
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


const mapStateToProps = (state) => ({
    players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);
