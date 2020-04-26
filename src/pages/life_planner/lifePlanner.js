import React from 'react';
import Sections from './dev/factory';
import SectionCard from './components/imageCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


let containment = [["Area", "Areas"], ["Subject", "Subjects"], ["Item", "Items"]];
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

const getCardFromItem = x => {
  return (
    <Grid item xs={6}>
      <SectionCard {...x}
        type={typeSingular(x.depth)}
        contains={contains(x.depth)} />
    </Grid>)
}

const LifePlanner = () => {
  let cards = Sections.map(getCardFromItem);
  let cardPerRow = 3;
  let gridStyle = { width: '65%', marginLeft: 'auto', marginRight: 'auto' };
  console.log(cards)
  return (
    <>
      <Paper elevation={15} style={{marginTop: 50,paddingTop: 50,width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Typography variant="h2" color="textSecondary" gutterBottom>{typePlural(1)}</Typography>
        <Grid container spacing={6} style={gridStyle}>
          {cards}
        </Grid>
      </Paper>
    </>
  );
}


export default LifePlanner;