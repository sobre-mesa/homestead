import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleModal from './modal'
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import SectionCard from './imageCard';
import BreadCrumbs from './breadCrumbs'

const gridStyle = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  // marginTop: 100,
  minHeight: 500
};
const paperStyle = {
  marginTop: 50,
  padding: 50,
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  notes: {
    textAlign: 'center',
    paddingLeft: 80,
    paddingRight: 80,
    // paddingTop: 80,
    paddingBottom: 12,
  }
}));


const ExpandedContainer = ({ name, notes, children, updateContainer, breadcrumbs, updateBreadCrumbs, toggleModal, modalIsOpen, modalType }) => {
  let classes = useStyles();
  const getCardFromItem = x => {
    return (
      <Grid key={x.id} item xs={4}>
        <SectionCard {...x} updateContainer={updateContainer} />
      </Grid>);
  }
  let cards = children && children.map(getCardFromItem);

  return (
    <>
      <Paper elevation={15} style={paperStyle}>
        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>
          {name}
        </Typography>
        <BreadCrumbs
          breadcrumbs={breadcrumbs}
          updateBreadCrumbs={updateBreadCrumbs}
          updateContainer={updateContainer} />
        <Divider variant="middle" className={classes.divider} />
        <div style={{ display: "grid", gridTemplateColumns: 20, width: '100%', alignContent: "bottom" }}>
          <div style={{ marginTop: 24, marginBottom: 24,  gridColumn: 20}}>
            <Button variant="contained" color="primary" onClick={() => toggleModal("new")} style={{ marginRight: 12 }}><AddCircleIcon style={{paddingRight: 8}}/>Child</Button>
            <Button variant="contained" color="secondary" onClick={() => toggleModal("edit")}><EditIcon/></Button>
          </div>
        </div>
        {notes &&
          <div className={classes.notes}>
            <Typography variant="span" color="textPrimary" gutterBottom >
              {notes}
            </Typography>
          </div>}
        <Grid container spacing={6} style={gridStyle}>
          {cards}
        </Grid>
      </Paper>
      <SimpleModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} modalType={modalType} />
    </>
  );
}

export default ExpandedContainer;