import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import StorageIcon from '@material-ui/icons/Storage';

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

  function Skills() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
    <Chip avatar={<CodeIcon/>} label="HTML5"/>
    <Chip avatar={<CodeIcon/>} label="CSS3"/>
    <Chip avatar={<CodeIcon/>} label="Javascript"/>
    <Chip avatar={<CodeIcon/>} label="ReactJS"/>
    <Chip avatar={<CodeIcon/>} label="C/C++"/>
    <Chip avatar={<StorageIcon/>} label="SQL"/>
    </div>
  );
}

export default Skills
