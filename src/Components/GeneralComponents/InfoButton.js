import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


//Style for the modal
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  }
});

//How the modal is displayed on the screen with information
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>

        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

//Content styling
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

//Styling for responsive actions of the modal
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

//This function recieves information that was sent to it such as:
//Open Button Text, Modal Title, and two sections of modal content
//Following the process of the Material UI modal it opens a dialog box 
function InfoButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.modalHeader}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.modalContent1}
          </Typography>
          <Typography gutterBottom>
            {props.modalContent2}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InfoButton
