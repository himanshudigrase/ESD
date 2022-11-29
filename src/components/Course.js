import React from 'react'

const Course = ({ course, modifyCourse ,deleteCourse}) => {
  return (
    <tr>
      <td>{course.courseCode}</td>
      <td>{course.name}</td>
      <td>{course.description}</td>
      <td>{course.credit}</td>
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
      </td>
    </tr>
  )
}

export default Course