import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import SchoolIcon from '@material-ui/icons/School';;

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

function UniversityCoursework() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Virtual Reality"
      color="primary"
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Software Engineering"
      color="primary"
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Computer Architecture and Assembly Language"
      color="primary"
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Digital Logic Design"
      color="primary"
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Programming Methodologies"
      color="primary"
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Principles of Electrical Engineering"
      color="primary"
    />

    <Chip
      variant="outlined"
      size="small"
      icon={<SchoolIcon/>}
      label="Discrete Mathematics"
      color="primary"
    />


    </div>
  );
}

export default UniversityCoursework
