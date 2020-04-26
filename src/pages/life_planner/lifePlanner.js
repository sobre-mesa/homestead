import React from 'react';
import Sections from './dev/factory';
import SectionCard from './components/imageCard';

let containment = [["Area", "Areas"],["Subject", "Subjects"], ["Item", "Items"]];
let typeSingular = depth => {
  let x = containment[depth];
  return x ? x[0] : null;
}

let typePlural = depth => {
  let x = containment[depth];
  return x ? x[1] : null;
}

let contains = depth => {
  let x = containment[depth + 1];
  return x ? x[1] : null;
};

const LifePlanner = () => {
  return (
    <>
      {Sections.map(x => {
        return (<SectionCard {...x} type={typeSingular(x.depth)} contains={contains(x.depth)}/>)}
      )}
    </>
  );
}

export default LifePlanner;