import React from 'react';
import {connect} from "react-redux";

import './App.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends React.Component {
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
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
        <AddPlayerForm />
      </div>

    );  
  }
}


const mapStateToProps = (state) => ({
    players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);
