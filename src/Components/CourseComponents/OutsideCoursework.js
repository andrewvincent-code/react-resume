import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function OutsideCoursework() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        variant="outlined"
        size="small"
        icon={<ComputerIcon/>}
        label="Getting Started with Data Science"
        color="secondary"
      />

      <Chip
        variant="outlined"
        size="small"
        icon={<ComputerIcon/>}
        label="Data Science in Action- Building a Predictive Churn Model"
        color="secondary"
      />

      <Chip
        variant="outlined"
        size="small"
        icon={<ComputerIcon/>}
        label="Compilers"
        color="secondary"
      />

    </div>
  );
}

export default OutsideCoursework
