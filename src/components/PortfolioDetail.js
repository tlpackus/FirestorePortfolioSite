import React from "react";
import PropTypes from "prop-types";

function PortfolioDetail(props){
  const { portfolio, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Portfolio Detail</h1>
      <h3>{portfolio.name}</h3>
      <p>{portfolio.projects}</p>
      <p><em>{portfolio.skills}</em></p>
      <p>{portfolio.bio}</p>
      <button onClick={ props.onClickingEdit }>Update Portfolio</button>
      <button onClick={()=> onClickingDelete(portfolio.id) }>Close Portfolio</button>
      <hr/>
    </React.Fragment>
  );
}

PortfolioDetail.propTypes = {
  portfolio: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PortfolioDetail;