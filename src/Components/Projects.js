import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoButton from './GeneralComponents/InfoButton';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Projects(props) {
  const classes = useStyles();
  return (
  <div>

    {/*Creating different cards that hold information about the different projects*/}

    <Card className={classes.root} style={{position:"relative"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Shopping Cart Simulator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            HTML, CSS, Javascript <br/>
            April 2020<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip avatar={<GitHubIcon/>} label="Link to repository"
        onClick={()=>window.open("https://github.com/as2580/SoftwareEngineeringGroup4","_blank")}/>
      </CardActions>
    </Card>

    <Card className={classes.root} style={{position:"relative", left:"120%", top:"-37%"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Matrix Calculator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            C <br/>
            February 2019<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip avatar={<GitHubIcon/>} label="Link to repository"
        onClick={()=>window.open("https://github.com/andrewvincent-code/matrix-calculator","_blank")}/>
      </CardActions>
    </Card>

    <Card className={classes.root} style={{position:"relative", left:"240%", top:"-70%"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Creed Project Website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            HTML,CSS<br/>
            January 2017<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  </div>
  );
}

export default Projects;
