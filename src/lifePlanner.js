import React from 'react';
import ExpandedContainer from './components/expanded'
import { getContainer, setContainer } from './store/plannerSlice'
import { useDispatch, connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    openContainer: getContainer(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setContainer: c => {
      dispatch(setContainer(c))
    }
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
        this.props.setContainer({ name: "Root Container", children: data.data.containers });
      })
    }
    ).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    if (this.props.openContainer.name) {
      return <ExpandedContainer {...this.props.openContainer} updateContainer={this.props.setContainer} />
    }
    return <h1>Loading</h1>;

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LifePlanner);