import React from 'react';
// import {} from './lifePlannerSlice';
import SectionCard from './components/card';

const LifePlanner = () => {
  return (
    <div className="page__life-planner">
      <SectionCard {...{title: "Test"}} />
    </div>
  )
}
export default LifePlanner;