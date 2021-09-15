import * as c from './../actions/ActionTypes';
export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const addTicket = (ticket) => {
  const {names, location, issue, id } = ticket;
  return {
    type: c.ADD_TICKET,
    names,
    location,
    issue,
    id
  }
}