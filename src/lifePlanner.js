import React from 'react';
import ExpandedContainer from './components/expanded'
import { getContainer, setContainer } from './store/plannerSlice'
import store from './store/store';

class LifePlanner extends React.Component {

  constructor() {
    super();
    this.state = { container: {} }
  }

  componentDidMount() {
    fetch("/lp/top-layer", { mode: 'cors' }).then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then((data) => {
        store.dispatch(setContainer({ name: "Root Container", children: data.data.containers }));
        this.setState({ container: getContainer(store.getState()) })
      });
    }
    ).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    let c = this.state.container;
    if (c.name) {
      return <ExpandedContainer {...c} />
    }
    return <h1>Loading</h1>;

  }

}
export default LifePlanner;