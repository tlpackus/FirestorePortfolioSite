import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPortfolioForm(props){

  function handleNewPortfolioFormSubmission(event) {
    event.preventDefault();
    props.onNewPortfolioCreation({name: event.target.name.value, skills: event.target.skills.value, projects: event.target.projects.value, bio: event.target.bio.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPortfolioFormSubmission}
        buttonText="Submit Portfolio" />
    </React.Fragment>
  );
}

NewPortfolioForm.propTypes = {
  onNewPortfolioCreation: PropTypes.func
};

export default NewPortfolioForm;