import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Stats from './Stats';
import Stopwatch from './Stopwatch';
import {updateTitle} from "../redux/actions";

const Header = ({players, title, changeTitle}) => {
  return (
    <header>
      <Stats players={players} />
      <h1 onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Default Title',
  players: []
}

const mapStateToProps = (state) => ({
  title: state.playerReducer.title
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('dispatch test'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);