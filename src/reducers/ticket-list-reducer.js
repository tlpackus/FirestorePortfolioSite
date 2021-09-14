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
    // return Object.assign({}, state, {
    // });
    default:
      return state;
  }
}