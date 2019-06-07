import { UPDATE_TITLE, ADD_PLAYER, CHANGE_SCORE } from "./actionTypes";

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title
  }
}

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}

export const changeScore = (id, delta) => {
  return {
    type: CHANGE_SCORE,
    id,
    delta
  }
}