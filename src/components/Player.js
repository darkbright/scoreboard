import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }

  render() {
    console.log(this.props.name, ' rendered');
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
        </span>
        <span className="player-name">
          {this.props.name}
        </span>
        <Counter score={this.props.score} index={this.props.id} changeScore={this.props.changeScore} />
      </div>
    );  
  }
}

export default Player;