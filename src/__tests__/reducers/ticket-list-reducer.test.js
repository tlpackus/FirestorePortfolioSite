import portfolioListReducer from '../../reducers/portfolio-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('portfolioListReducer', () => {

  const currentState = {
    1: {
      name: 'Jay',
      projects: 'database',
      skills: 'C#',
      bio: "went to coding school",
      id: 1
    },
    2: {
      name: 'Kinda Smart Guy',
      projects: "E-commerce ",
      skills: 'React',
      bio: 'Self taught',
      id: 2
    }
  }

  let action;
  const portfolioData = {
    name: 'Jay',
    projects: 'database',
    skills: 'C#',
    bio: "went to coding school",
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(portfolioListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new portfolio data to masterPortfolioList', () => {
    const { names, location, issue, id } = portfolioData;
    action = {
      type: c.ADD_PORTFOLIO,
      names,
      location,
      issue,
      id
    }

    expect(portfolioListReducer({}, action)).toEqual({
      [id]: {
        names,
        location,
        issue,
        id
      }
    });
  });
  test('Should successfully delete a portfolio', () => {
    action = {
      type: c.DELETE_PORTFOLIO,
      id: 1
    };
    expect(portfolioListReducer(currentState, action)).toEqual({
      2: {
        name: 'Kinda Smart Guy',
        projects: "E-commerce ",
        skills: 'React',
        bio: 'Self taught',
        id: 2 }
    });
  });
});