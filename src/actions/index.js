import * as c from './../actions/ActionTypes';
export const deletePortfolio = id => ({
  type: c.DELETE_PORTFOLIO,
  id
});

export const addPortfolio = (portfolio) => {
  const {name, projects, skills, bio, id } = portfolio;
  return {
    type: c.ADD_PORTFOLIO,
    name,
    projects,
    skills,
    bio,
    id
  }
}