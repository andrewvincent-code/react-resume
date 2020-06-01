import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"white", color:"black", height:"15%", textAlign:"center"}}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Andrew Vincent
          </Typography>

          {/*Github Link Chip */}
          <Chip variant="outlined" size="medium" avatar={<GitHubIcon/>} label="GitHub"
          onClick={()=>{window.open("https://github.com/andrewvincent-code"), "_blank"}}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
