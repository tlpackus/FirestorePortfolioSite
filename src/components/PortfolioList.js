import React from "react";
import PropTypes from "prop-types";
import Portfolio from "./Portfolio";

function PortfolioList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.portfolioList).map((portfolio) =>
        <Portfolio
          whenPortfolioClicked={props.onPortfolioSelection}
          name={portfolio.name}
          projects={portfolio.projects}
          skills={portfolio.skills}
          bio={portfolio.bio}
          id={portfolio.id}
          key={portfolio.id} />
      )}
    </React.Fragment>
  );
}

PortfolioList.propTypes = {
  portfolioList: PropTypes.object,
  onPortfolioSelection: PropTypes.func
};

export default PortfolioList;