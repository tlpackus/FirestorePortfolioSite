import React from "react";
import PropTypes from "prop-types";
import SkillList from "./SkillList"
// import { v4 } from 'uuid';

function PortfolioDetail(props){
  const { portfolio, onClickingDelete } = props;
  const manualSkillList = [{name:"coding", id:"1"}, {name:"typing", id:"2"}]

  function handleAddingNewSkillToPortfolioSkillList(event) {
    event.preventDefault();
    // const { skills } = portfolio
    // const newSkills = skills.push({name: name.event.target.value, id: v4()})
    // portfolio.skills = newSkills
    props.onClickingAddSkill({name: portfolio.name, bio: portfolio.bio, skills: event.target.skills.value, id: portfolio.id})
  }
  
  return (
    <React.Fragment>
      <h1>Portfolio Detail</h1>
      <h3>Name: {portfolio.name}</h3>
      {/* <p>{portfolio.projects}</p>
      <p><em>{portfolio.skills}</em></p> */}
      <p>Bio: {portfolio.bio}</p>
      <h3>Skills:</h3>
      <SkillList skillList = {manualSkillList} />
      <form onSubmit={handleAddingNewSkillToPortfolioSkillList}>
        <input
          type='text'
          name='skills'
          placeholder='New Skill To Add' />
        <button type='submit'>Add Skill</button>
      </form>
      <button onClick={ props.onClickingEdit }>Edit Portfolio Details</button>
      <button onClick={()=> onClickingDelete(portfolio.id) }>Close Portfolio</button>
      <hr/>
    </React.Fragment>
  );
}

PortfolioDetail.propTypes = {
  portfolio: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingAddSkill: PropTypes.func
};

export default PortfolioDetail;