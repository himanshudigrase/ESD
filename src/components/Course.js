import React from 'react'
import ModifyForm from './ModifyCourse'
import Modify from './ModifyCourse'
const Course = ({ course, modifyCourse ,deleteCourse,showPrereq}) => {
  return (
    <tr>
      <td>{course.courseID}</td>
      <td>{course.courseCode}</td>
      <td>{course.name}</td>
      <td>{course.description}</td>
      <td>{course.credits}</td>
      <td>{course.term}</td>
      <td>{course.year}</td>
      <td>{course.capacity}</td>
      <td>
        <button onClick={() => modifyCourse(course)}>
          Modify Course
        </button>
        <button onClick={() => deleteCourse(course)}>
          Delete Course
        </button>
        <button onClick = {()=>showPrereq(course)}> 
        Show Prerequisites
        </button>
      </td>
    </tr>
  )
}

export default Course