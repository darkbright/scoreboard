import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  console.log(props);
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(props.index, -1)}> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(props.index, 1)}> + </button>
    </div>  
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;