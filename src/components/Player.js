import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Counter from './Counter';
import {removePlayer} from "../redux/actions";

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
    const {removePlayer, id, name, score, changeScore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className="player-name">{name}</span>
        <Counter score={score} id={id} changeScore={changeScore} />
      </div>
    );  
  }
}
export default connect(null, mapDispatchToProps)(Player);