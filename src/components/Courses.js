import React from 'react'
import Course from './Course'

const Courses = ({ courses, modifyCourse ,deleteCourse,showPrereq}) => {  
  
  
  // If there's no Courses for the student, then render nothing. Can instead render a message like "No Courses Remaining"
  if (courses === [])
    return null

  return (
    <div className='m-5 p-2 rounded regular-shadow' id="courses">
      <h2 className='ml-2'>Your Courses</h2>
      <table cellPadding={10}>
        <tr>
          <th>Course ID</th>
        <th>Course Code</th>
          <th>Course Name</th>
          <th>Course Description</th>
          <th>Course Credits</th>
          <th>Course Term</th>
          <th>Course Year</th>
          <th>Course Capacity</th>
        </tr>
        { 
          courses.map(b =>
            <Course
              course={b}
              key={b.courseID}
              modifyCourse={modifyCourse}
              deleteCourse = {deleteCourse}
              showPrereq = {showPrereq}
            /> 
          )
        }
      </table>
    </div>
  )
}

export default Courses