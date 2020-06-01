import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function ContactInfo(){
  return(
    <div>
      <Chip avatar={<MailIcon/>} label="andrew.vincent@rutgers.edu"/>
      <Chip avatar={<MailIcon/>} label="thereal.andrewvincent@gmail.com"/>
      <br/><br/>
      <Chip avatar={<PhoneIphoneIcon/>} label="(510)-598-6749"/><br/><br/>
      <Chip avatar={<LinkedInIcon/>} label="LinkedIn" onClick={()=>{window.open('https://www.linkedin.com/in/andrew-vincent-099772116/','_blank')}}/><br/><br/>
    </div>
  )
}

export default ContactInfo
