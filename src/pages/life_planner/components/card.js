import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 400,
    width: 500,
    backgroundColor: '#cee0d7',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  // title: {
  //   fontSize: 20,
  //   color: 'white',
  //   fontWeight: 'bolder'
  // },
  pos: {
    marginBottom: 12,
  },
});

function CardWrapper(props) {
  const classes = useStyles();
  const customClass = props.class ? props.class : '';
  return (
    <Card className={`${classes.root} ${customClass}`}>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}


function Title({ text }) {
  const classes = useStyles();
  return (<>
    <Typography
      variant="h3"
      component="h2"
      className={classes.
        title}
      color="textSecondary"
      gutterBottom>
      {text}
    </Typography>

  </>)
}

function Description({ text }) {

}

export default function SectionCard({ title }) {
  return (
    <CardWrapper>
      <Title text={title} />
    </CardWrapper>
  )
}

{/* <Typography " component="h2">
be{bull}nev{bull}o{bull}lent
</Typography>
<Typography className={classes.pos} color="textSecondary">
adjective
</Typography>
<Typography variant="body2" component="p">
well meaning and kindly.
<br />
{'"a benevolent smile"'}
</Typography> */}