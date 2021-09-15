export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

export const addTicket = (ticket) => {
  const {names, location, issue, id } = ticket;
  return {
    type: 'ADD_TICKET',
    names,
    location,
    issue,
    id
  }
}