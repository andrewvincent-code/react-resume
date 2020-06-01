import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoButton from './InfoButton'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Electrical and Computer Engineering (B.S.)
        </Typography>
        <Typography variant="h5" component="h2">
          Rutgers University
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          New Brunswick, NJ
        </Typography>
      </CardContent>
      <CardActions>
        <InfoButton
          title="View Awards"
          modalHeader="Awards won at Rutgers University"
          modalContent1="Dean's List Fall 2017"
          modalContent2="Distinguished Scholar Award"
        />
      </CardActions>

    </Card>

  );
}
