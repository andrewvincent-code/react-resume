import React from "react"
import Typography from '@material-ui/core/Typography';
import ContactInfo from "./GeneralComponents/ContactInfo"
import EducationCard from "./GeneralComponents/EducationCard"
import Skills from "./GeneralComponents/Skills"


function General(){
  return(
    <div>
      <Typography variant="h6">
      Contact Me<br/><hr style={{width:"100%"}}/>
      </Typography>
      <ContactInfo/>

      <Typography variant="h6">
      Education<br/><hr style={{width:"100%"}}/>
      </Typography>
      <EducationCard/>
      <br/>

      <Typography variant="h6">
      Skills<br/><hr style={{width:"100%"}}/>
      </Typography>
      <Skills/>
    </div>
  )
}


export default General
