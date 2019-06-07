import {combineReducers, createStore} from "redux";

const playerInitialState = {
  title: 'My Scoreboard',
}

const playerReducer = (state = playerInitialState, action) => {
  return state;
}

const rootReducer = combineReducers({playerReducer});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  console.log(store);