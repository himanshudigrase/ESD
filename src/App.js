import { useState, useEffect } from 'react'

import loginService from './services/login'
 import courseService from './services/courses'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Courses from './components/Courses'
import ModifyForm from './components/ModifyCourse'

const App = () => {
  // user state will store the logged in user object, if no login has been done yet then it will be null
  const [ user, setUser ] = useState(null)

  // Will store the courses of the logged in user
  const [ courses, setCourses ] = useState([])

  const [modifyForm, setModifyForm] = useState([])

  // These states are used to control the notifications that show up at the top of the screen for events like 
  // login, signup, watchlist creation, etc.
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  // Create a notification at the top of the screen with given message for 10 seconds 
  // Notifications are of two types, "error" and "success"
  // The appearance of these two notifications can be adjusted via the index.css file
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  // Function that handles login of users
  const handleLogin = async (credentials) => {
    try {
      const courseObject = await loginService.login(credentials);
      console.log("here")
      setUser(courseObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(courseObject))
      
      notificationHandler(`Logged in successfully as ${courseObject.firstName}`, 'success')
      setCourses([])
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  const handleModify = async (credentials) => {
    try {
      const courseObject = await courseService.modifyCourse(credentials);
      console.log("Modifying course here")
      //setUser(courseObject)
      //window.localStorage.setItem('loggedInUser', JSON.stringify(courseObject))
      
      notificationHandler(`Course ${courseObject.name} modified successfully`, 'success')
     // setCourses([])
    }
    catch (exception) {
      notificationHandler(`Unable to modify course`, 'error')
    }
  }


  // Function that modifies a course using the courseObject that is passed to the function
  const modifyCourse = async (courseObject) => {
    try {
      setModifyForm(null)
      console.log("mod "+modifyForm)
    
      notificationHandler(`Successfully modified the "${courseObject.name}" course`, 'success')
    }
    catch (exception) {
      notificationHandler(`Failed to pay the "${courseObject.name}" course successfully`, 'error')
    }
  }
  const deleteCourse = async (courseObject) => {
    try {
      // Call payBill() at the backend 
     // console.log(courseObject)
      await courseService.deleteCourse(courseObject)
     
      // On successful completion of the above method, iterate through all the courses and only retain those courses
      // which don't have ID equal to the courseObject's ID, i.e. the ID of the course that's just been deleted
      setCourses(courses.filter(course => course.courseID !== courseObject.courseID))

      notificationHandler(`Successfully deleted the "${courseObject.name}" course`, 'success')
    }
    catch (exception) {
      notificationHandler(`Failed to delete the "${courseObject.description}" course successfully`, 'error')
    }
  }

  const showPrereq = async(courseObject) =>{
    try{
      const response = await  courseService.getPreReqCourse(courseObject)
      console.log(response)
    }catch{
      notificationHandler(`No prerequisites for "${courseObject.name}" course`);
    }
  }

  
  useEffect(() => {
      async function fetchData() {
        if (user) {
          const courses = await courseService.getUserCourses(user)
          setCourses(courses)
        }
      }
      fetchData()
  }, [user])

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])


  return (
    <div>
      {/* Header of the page */}
      <div className='text-center page-header p-2 regular-text-shadow regular-shadow'>
          <div className='display-4 font-weight-bold'>
            Academia - ERP
          </div>
      </div>
      
      {/* Notification component that will render only when the notification state is not null */}
      <Notification notification={notification} type={notificationType} />
      
      {
        /* Show Login form when no login has happened */
        user === null && 
        <LoginForm startLogin={handleLogin}/>
      }

      {
        /* Show NavBar when login has happened */
        user !== null && 
        <NavBar user={user} setUser={setUser}/>
      } 

      {
        /* Show Courses of the User when login has happened */
        user !== null &&
        <Courses
          courses={courses}
          modifyCourse={modifyCourse}
          deleteCourse = {deleteCourse}
          showPrereq = {showPrereq}
        />
      }
      {
        user !== null && modifyForm === null && 
        <ModifyForm sendModify = {handleModify}></ModifyForm>
      }


    </div>
  )
}

export default App;
