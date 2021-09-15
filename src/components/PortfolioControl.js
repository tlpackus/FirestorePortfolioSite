import React from 'react';
import NewPortfolioForm from './NewPortfolioForm';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import EditPortfolioForm from './EditPortfolioForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class PortfolioControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPortfolio: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPortfolio != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPortfolio: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPortfolioToList = (newPortfolio) => {
    const { dispatch } = this.props;
    const action = a.addPortfolio(newPortfolio);
    dispatch(action);
    this.setState({ formVisibleOnPage: false });

  }

  handleChangingSelectedPortfolio = (id) => {
    const selectedPortfolio = this.props.masterPortfolioList[id];
    this.setState({ selectedPortfolio: selectedPortfolio });
  }

  handleDeletingPortfolio = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePortfolio(id);

    dispatch(action);
    this.setState({ selectedPortfolio: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingPortfolioInList = (portfolioToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPortfolio(portfolioToEdit)
    dispatch(action);
    this.setState({
      editing: false,
      selectedPortfolio: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditPortfolioForm portfolio={this.state.selectedPortfolio} onEditPortfolio={this.handleEditingPortfolioInList} />
      buttonText = "Return to Portfolio List";
    } else if (this.state.selectedPortfolio != null) {
      currentlyVisibleState =
        <PortfolioDetail
          portfolio={this.state.selectedPortfolio}
          onClickingDelete={this.handleDeletingPortfolio}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Portfolio List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPortfolioForm onNewPortfolioCreation={this.handleAddingNewPortfolioToList} />;
      buttonText = "Return to Portfolio List";
    } else {
      currentlyVisibleState = <PortfolioList portfolioList={this.props.masterPortfolioList} onPortfolioSelection={this.handleChangingSelectedPortfolio} />;
      buttonText = "Add Portfolio";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

PortfolioControl.propTypes = {
  masterPortfolioList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPortfolioList: state
  }
}

PortfolioControl = connect(mapStateToProps)(PortfolioControl);

export default PortfolioControl;