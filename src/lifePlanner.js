import React from 'react';
import ExpandedContainer from './components/expanded'
import { currentContainer, containerSelected, currentBreadCrumbs, breadCrumbSelected } from './store/plannerSlice'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    openContainer: currentContainer(state),
    currentBreadCrumbs: currentBreadCrumbs(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    containerSelected: c => {
      dispatch(containerSelected(c))
    },
    breadCrumbSelected: c => {
      dispatch(breadCrumbSelected(c))
    },
  }
}

class LifePlanner extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch("/lp/top-layer", { mode: 'cors' }).then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then((data) => {
        this.props.containerSelected({ name: "Home", children: data.data.children });
      })
    }
    ).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    if (this.props.openContainer.name) {
      return <ExpandedContainer {...this.props.openContainer}
        updateContainer={this.props.containerSelected}
        breadcrumbs={this.props.currentBreadCrumbs}
        updateBreadCrumbs={this.props.breadCrumbSelected}/>
    }
    return <h1>Loading</h1>;

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LifePlanner);