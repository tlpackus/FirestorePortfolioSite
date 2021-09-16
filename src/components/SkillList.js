import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";

function SkillList(props) {
  return (
    <React.Fragment>
      {props.skillList.map((skill) =>
        <Skill
          name={skill.name}
          id={skill.id}
          key={skill.id} />
      )}
    </React.Fragment>
  )
}

SkillList.propTypes = {
  skillList: PropTypes.array
}

export default SkillList;