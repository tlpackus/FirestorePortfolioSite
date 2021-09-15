import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch(action.type) {
  case c.ADD_TICKET:
    return {...state,
        [id]: {
        names,
        location,
        issue,
        id
      }
    } 
  case c.DELETE_TICKET:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}