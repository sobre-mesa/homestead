import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { currentContainer, containerSelected, currentBreadCrumbs, breadCrumbSelected, modalIsOpen, toggleModal,modalType } from './store/plannerSlice'
import { makeStyles } from '@material-ui/core/styles';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import EditOrNew from './components/editOrNew'
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BreadCrumbs from './components/breadCrumbs'
import SectionCard from './components/imageCard';



const gridStyle = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
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
    paddingBottom: 12,
  }
}));

const mapStateToProps = state => {
  return {
    openContainer: currentContainer(state),
    modalIsOpen: modalIsOpen(state),
    modalType: modalType(state),
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
    toggleModal: c => {
      dispatch(toggleModal(c))
    },
  }
}

const ExpandedContainer = (props) => {
  let {openContainer, containerSelected, currentBreadCrumbs, breadCrumbSelected, toggleModal, modalIsOpen, modalType } = props;
  let classes = useStyles();
  let {id, name, notes, children} = openContainer;
  const getCardFromItem = x => {
    return (
      <Grid key={x.id} item xs={4}>
        <SectionCard {...x} updateContainer={containerSelected} />
      </Grid>);
  }
  let cards = children && children.map(getCardFromItem);
  useEffect(()=>{
      fetch("/lp/top-layer", { mode: 'cors' }).then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((data) => {
          containerSelected({ name: "Home", children: data.data.children });
        })
      }
      ).catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }, []);

  let Buttons = () => {
    return (
      <div style={{ display: "grid", gridTemplateColumns: 20, width: '100%', alignContent: "bottom" }}>
        <div style={{ marginTop: 24, marginBottom: 24,  gridColumn: 20}}>
          <Button variant="contained" color="primary" onClick={() => toggleModal("new")} style={{ marginRight: 12 }}><AddCircleIcon style={{paddingRight: 8}}/>Child</Button>
          {id && 
            <Button variant="contained" color="secondary" onClick={() => toggleModal("edit")}><EditIcon/></Button> }
        </div>
      </div>
    )
  }

let Notes = () => {
  return notes ? ( 
    <div className={classes.notes}>
      <Typography variant="span" color="textPrimary" gutterBottom >
        {notes}
      </Typography>
    </div> ) : null;
}
  return props.openContainer.name ? (
    <>
      <Paper elevation={15} style={paperStyle}>
        <Typography variant="h2" color="textPrimary" gutterBottom className={classes.title}>
          {name}
        </Typography>
        <BreadCrumbs
          breadcrumbs={currentBreadCrumbs}
          breadCrumbSelected={breadCrumbSelected}
          updateContainer={containerSelected} />
        <Divider
         variant="middle"
         className={classes.divider} />
        <Buttons/>
        <Notes/>
        <Grid 
        container 
        spacing={6} 
        style={gridStyle}>
          {cards}
        </Grid>
      </Paper>
      <EditOrNew 
        isEdit={modalType==="edit"} 
        id={id} 
        modalIsOpen={modalIsOpen} 
        toggleModal={toggleModal} />
    </>
  ) : <h1>LOADING</h1>
}

export default  connect(mapStateToProps, mapDispatchToProps)(ExpandedContainer);