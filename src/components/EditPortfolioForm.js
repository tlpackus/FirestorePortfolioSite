import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPortfolioForm (props) {
  const { portfolio } = props;

  function handleEditPortfolioFormSubmission(event) {
    event.preventDefault();
    props.onEditPortfolio({name: event.target.name.value, projects: event.target.projects.value, skills: event.target.skills.value, bio: event.target.bio.value, id: portfolio.id});
  }

  return (
    <React.Fragment>
      <h2>Current Values</h2>
      name: {portfolio.name}
      <br />
      bio: {portfolio.bio}
      <br />
      <h2>New Values</h2>
      <br />
      <ReusableForm 
        formSubmissionHandler={handleEditPortfolioFormSubmission}
        buttonText="Update Portfolio" />
    </React.Fragment>
  );
}

EditPortfolioForm.propTypes = {
  onEditPortfolio: PropTypes.func
};

export default EditPortfolioForm;