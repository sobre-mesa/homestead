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


export default function SectionCard({ name, image, description, children }, ) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
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
