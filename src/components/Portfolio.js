import React from "react";
import PropTypes from "prop-types";

function Portfolio(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPortfolioClicked(props.id)}>
        <h3>{props.name}'s Professional Profile</h3>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Portfolio.propTypes = {
  name: PropTypes.string,
  projects: PropTypes.string,
  skills: PropTypes.array,
  bio: PropTypes.string,
  id: PropTypes.string,
  whenPortfolioClicked: PropTypes.func
};

export default Portfolio;