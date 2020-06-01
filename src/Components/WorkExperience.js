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

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: 800,
  },
  media: {
    height: 140,
  },
});

function WorkExperience(props) {
  const classes = useStyles();
  return (
  <div>
    <Card className={classes.root} style={{height:"10%"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media-exp1.licdn.com/dms/image/C560BAQG82Q7j1CjaxQ/company-logo_200_200/0?e=1599091200&v=beta&t=npc0i_tKWkJzFjIcs5ZxVd2uHu4uxkXJLlKFLDw2wOg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Technocrat Intern
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            VDart Digital Inc. <br/>
            May 2020 - August 2020 <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Calling the modal component and passing specific props to it based on this card*/}
        <InfoButton
          title="View Details"
          modalHeader="Technocrat Intern at VDart Digital Inc"
          modalContent1="Did a remote summer internship where I learned and implemented multiple Javascript frameworks such as ReactJS and learned style frameworks such as Material UI"
          modalContent2="Will also be learning frameworks such as MeteorJS and React Native"
          />
      </CardActions>
    </Card>
    
    <br/>
    <br/>
    <br/>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://apprecs.org/ios/images/app-icons/256/85/494594693.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Assistant Lab Supervisor
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rutgers Office of Information Technology<br/>
            Jan 2019-present
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Calling the modal component and passing specific props to it based on this card*/}
        <InfoButton
          title="View Details"
          modalHeader="Assistant Lab Supervisor at Rutgers Office of Information Technology"
          modalContent1="Currently teaching classes on MacOS, holding training sessions to educate new consultants on how to perform MAC authentication bypasses, wireless surveys, and how to troubleshoot devices. "
          modalContent2="Performed various tech services for students and faculty around the university such as: device set-up on the Rutgers University secure server through MAC Authentication Bypass, wireless signal strength surveys, and basic troubleshooting of devices such as phones, laptops, and printers."
          />
      </CardActions>
    </Card>
  </div>
  );
}

export default WorkExperience;
