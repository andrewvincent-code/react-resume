import React from "react"
import Typography from '@material-ui/core/Typography';
import UniversityCoursework from './CourseComponents/UniversityCoursework'
import OutsideCoursework from './CourseComponents/OutsideCoursework.js'


function Courses(){
  return(
    <div>
      <Typography variant="h6">
      University Coursework<br/><hr style={{width:"100%"}}/>
      </Typography>
      <UniversityCoursework/> {/*Calling another component that holds all the chips for university courses*/}
      <br/><br/>

      <Typography variant="h6">
      Outside Coursework<br/><hr style={{width:"100%"}}/>
      </Typography>
      <OutsideCoursework/> {/*Component that holds all the chips for outside courses */}
      <br/><br/>
    </div>
  )
}

export default Courses
