import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  return (
    <header>
      <Stats players={props.players} />
      <h1>{ props.title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

let mapStateToProps = (state) => {
  return {
    title: state.playerReducer.title
  }
}

export default connect(mapStateToProps)(Header);