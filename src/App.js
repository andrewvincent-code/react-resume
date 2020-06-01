import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Paper,Button} from "@material-ui/core";
import WorkExperience from "./Components/WorkExperience"
import General from "./Components/General"
import Courses from "./Components/Courses"
import Projects from "./Components/Projects"
import Volunteering from "./Components/Volunteering"
import Header from "./Header"

//Style for Expansion Panel
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

//Expansion Panel animation/interaction function
export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

    <Header/>

      <Paper style={{ position:"absolute", left:"1%", top:"20%", backgroundColor:"lightgray"}}>

      {/*Created an Expansion Panel to show the different sections of my resume*/
      /*This is the About Me Panel*/}
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header">
            <Typography className={classes.heading}>About me</Typography>
            <Typography className={classes.secondaryHeading}>
              Contact information, Education, Skills
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <General/> {/*Calling a component that holds all the content of General Information*/}
          </ExpansionPanelDetails>
        </ExpansionPanel>

          {/*This is the Work Experience Panel*/}
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography className={classes.heading}>Work Experience</Typography>
              <Typography className={classes.secondaryHeading}>Professional Work Experience</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <WorkExperience/>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          {/*This is the Coursework panel*/}
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header">
              <Typography className={classes.heading}>Coursework</Typography>
              <Typography className={classes.secondaryHeading}>University Coursework, Outside Coursework</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Courses/>
            </ExpansionPanelDetails>
          </ExpansionPanel>


          {/*This is the Projects panel*/}
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header">
              <Typography className={classes.heading}>Projects</Typography>
              <Typography className={classes.secondaryHeading}>
              Programming projects where I've implemented my skills
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Projects/>
            </ExpansionPanelDetails>
          </ExpansionPanel>


          {/*This is the Volunteering Panel*/}
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header">
              <Typography className={classes.heading}>Volunteer Work</Typography>
              <Typography className={classes.secondaryHeading}>Places I have volunteered</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Volunteering/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      </Paper>
    </div>
  );
}
