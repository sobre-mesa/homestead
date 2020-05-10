import React, {useState} from 'react';
import ExpandedContainer from './components/expanded'

const LifePlanner = () => {
  let [container, setContainer] = useState();

  fetch("/lp", { mode: 'cors' }).then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function (data) {
        console.log(data.data.containers)
        setContainer({name: "Root Container", chldren: data.data.containers})
        console.log(container)
      });
    }
  ).catch(function (err) {
    console.log('Fetch Error :-S', err);
  });
  return <ExpandedContainer {...container} />
}
export default LifePlanner;