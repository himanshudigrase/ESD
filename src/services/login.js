import axios from 'axios'

// The API endpoint where login data is sent to
const loginBaseUrl = `http://localhost:8080/api/employee/login`

const login = async (credentials) => {
  // Send the login credential data to the loginBaseUrl API endpoint as an HTTP POST request
  // Note the async-await
  const response = await axios.post(loginBaseUrl, credentials)
  
  // Return .data field of the response object which would contain the logged in user object
  // And the user state would now be updated by the handleLogin() method
  console.log("1st ever api hit")
  console.log(response.data);
  return response.data
  
  // return {email:"abc@gmail.com",password: "1234",departmentId:1}
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { login }
export default exportObject