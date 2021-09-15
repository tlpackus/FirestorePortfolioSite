import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';


describe('help queue actions', () => {
  it('deletePortfolio should create DELETE_PORTFOLIO action', () => {
    expect(actions.deletePortfolio(1)).toEqual({
      type: c.DELETE_PORTFOLIO,
      id: 1
    });
  });
  it('addPortfolio should create ADD_Portfolio action', () => {
    expect(actions.addPortfolio({name: 'Jo', projects: 'noSQL database', skills: 'JavaScript', bio: 'cool', id: 1})).toEqual({
      type: c.ADD_PORTFOLIO,
      name: 'Jo',
      projects: 'noSQL database',
      skills: 'JavaScript', 
      bio: 'cool',
      id: 1
    });
  });
});