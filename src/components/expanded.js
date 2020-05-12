import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import SectionCard from './imageCard';

import store from '../store/store';
import { getContainer, setContainer } from '../store/plannerSlice'

const gridStyle = {
  width: '65%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 25
};
const paperStyle = {
  marginTop: 50,
  paddingTop: 50,
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  }
}));


const ExpandedContainer = ({ name, children, updateContainer }) => {
  let classes = useStyles();
  const getCardFromItem = x => {
    return (
      <Grid key={x.id} item xs={6}>
        <SectionCard {...x} updateContainer={updateContainer} />
      </Grid>);
  }
  let cards = children && children.map(getCardFromItem);

  return (
    <>
      <Paper elevation={15} style={paperStyle}>
        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>{name}</Typography>
        <Divider variant="middle" className={classes.divider} />
        <Grid container spacing={6} style={gridStyle}>
          {cards}
        </Grid>
      </Paper>
    </>
  );
}

export default ExpandedContainer;