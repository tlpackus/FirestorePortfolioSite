export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch(action.type) {
  case 'ADD_TICKET':
    return {...state,
        [id]: {
        names,
        location,
        issue,
        id
      }
    } 
  case 'DELETE_TICKET':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}