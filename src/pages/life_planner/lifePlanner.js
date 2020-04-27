import React from 'react';
import ExpandedContainer from './components/expanded'
import RootContainer from './dev/factory';

const LifePlanner = () => {
return <ExpandedContainer {...RootContainer}/>
}
export default LifePlanner;