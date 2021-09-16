import React from "react";
import PropTypes from "prop-types";

function Skill(props){
  return (
    <React.Fragment>
      {props.name}
      <br />
    </React.Fragment>
  )
}

Skill.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
}

export default Skill;