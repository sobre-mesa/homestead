import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: { height: 250 },
});


export default function SectionCard(props) {
  const classes = useStyles();
  let { id, name, image, description, children, updateContainer} = props;
  let handleClick = () => {
    fetch(`/lp/id/${id}`, { mode: 'cors' }).then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then((data) => {
        updateContainer({...data.data.container, children: data.data.children });
      })
    }
    ).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
  }
  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        {image &&
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {(children && children.length > 0) &&
        <CardActions>
          <Button size="small" color="primary">
            Expand (Contains {children.length} items)
          </Button>
        </CardActions>
      }
    </Card>
  );
}
