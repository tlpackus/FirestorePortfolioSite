import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='User Name' />
        {/* <input
          type='text'
          name='projects'
          placeholder='Projects' />
        <input
          type='text'
          name='skills'
          placeholder='Skills' /> */}
        <textarea
          name='bio'
          placeholder='Bio' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;