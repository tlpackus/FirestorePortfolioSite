import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, projects, skills, bio, id } = action;
  switch(action.type) {
  case c.ADD_PORTFOLIO:
    return {...state,
        [id]: {
        name,
        projects,
        skills, 
        bio,
        id
      }
    } 
  case c.DELETE_PORTFOLIO:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}