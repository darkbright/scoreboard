import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {changeScore} from "../redux/actions";

const Counter = ({changeScore, score, id}) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" 
        onClick={() => changeScore(id, -1)}> - 
      </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" 
        onClick={() => changeScore(id, 1)}> + 
      </button>
    </div>  
  );
}

Counter.propTypes = {
  changeScore: PropTypes.func,
  score: PropTypes.number,
  id: PropTypes.number,
}

const mapActionToProps = (dispatch) => {
  return {
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
  }
}

export default connect(null, mapActionToProps)(Counter);