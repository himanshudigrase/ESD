import axios from 'axios'

// The API endpoint where bills are located
const coursesUrl = `http://localhost:8080/api/course`

// Gets all bills which belong to a user
const getUserCourses = async (student) => {
  // Get bills of the given user, using query parameter, ?user={user.studentId}
  const response = await axios.get(`${coursesUrl}?studentId=${student.employeeID}`)
  console.log("Bill details from api")
  console.log(response.data) // response is in array, hence we can't access directly
  // The .data field would now contain the bills of the users
  return response.data
}

// Pays the bill which is specified, after paying, the record of the bill is deleted
// So this translates to a delete request from axios to the bill API endpoint at the backend
const modifyCourse = async (bill) => {
  const response = await axios.delete(`${coursesUrl}/${bill.billId}`)
  return response.data
}
const deleteCourse = async (bill) => {
  const response = await axios.delete(`${coursesUrl}/${bill.billId}`)
  return response.data
}
const exportObject = { getUserCourses, modifyCourse ,deleteCourse}

export default exportObject