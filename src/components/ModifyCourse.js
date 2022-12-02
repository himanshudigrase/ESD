import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./CSS/modifyCourse.css"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
/*
  This component renders the Login Form with all its functionalities
  sendModify is the method that uses the axios service to submit login credentials to the backend
*/
const ModifyForm = ({ sendModify }) => {
  // States for tracking Form Input which are the email address and password
  const [ courseID, setCourseID ] = useState('')
  const [ courseCode, setCourseCode ] = useState('')
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ credits, setCredits ] = useState('')
  const [ term, setTerm ] = useState('')
  const [ year, setYear ] = useState('')
  const [ capacity, setCapacity ] = useState('')
 // const [preRequisiteList, setPreRequisiteList] = useState('')
  
  // onSubmit event handler of this Form
  const handleModify = (event) => {
    // Preventing default submission of the Form to the action attribute URL
    event.preventDefault()

    const credentials = {
      courseID,courseCode,name,description,credits,term,year,capacity//,preRequisiteList
    }

    // Calling sendModify with the provided credentials that will make a call to the backend
    sendModify(credentials)

    // Reset the Form state, i.e. the text that's on the username and password text boxes to empty strings
    setCourseID('')
    setCourseCode('')
    setName('')
    setDescription('')
    setCredits('')
    setTerm('')
    setYear('')
    setCapacity('')
   // setPreRequisiteList('')
  }

  // Typically keep id attributes on your HTML elements so that they can be styled using CSS
  return (
    <div class="form-container">
      <Form onSubmit={handleModify} id='login-Form'>
      <Label value = "Modify Form">Modify Form</Label>
        <Input 
          type='number'
          placeholder='CourseCode'
          // Note that the text that's displayed on the textbox (value attribute) is controlled by the email state
          value={courseCode}
          // onChange event handler
          // When you type something on the textbox, the onChange event handler will be triggered
          // This event handler as written below, updates the email state with what's being typed by the user
          // Because a state has been updated, the Form component will be re-rendered and you can see the updated Input
          // on the screen, obviously this happens so fast that you cannot see it but this is the entire procedure
          onChange={event => setCourseCode(event.target.value)}
          id='courseCode'
          //required
        />
        <Input 
          type='number'
          placeholder='CourseID'
          // Note that the text that's displayed on the textbox (value attribute) is controlled by the email state
          value={courseID}
          // onChange event handler
          // When you type something on the textbox, the onChange event handler will be triggered
          // This event handler as written below, updates the email state with what's being typed by the user
          // Because a state has been updated, the Form component will be re-rendered and you can see the updated Input
          // on the screen, obviously this happens so fast that you cannot see it but this is the entire procedure
          onChange={event => setCourseID(event.target.value)}
          id='courseID'
          //required
        />
          
        {/* Same as the above username Input, except this one has the type password */}
        <Input
          type='text'
          placeholder='Name'
          value={name}
          onChange={event => setName(event.target.value)}
          id='name'
          //required
        />
        <Input
          type='text'
          placeholder='Description'
          value={description}
          onChange={event => setDescription(event.target.value)}
          id='description'
          //required
        />
        <Input
          type = 'number'
          placeholder='Credits'
          value={credits}
          onChange={event => setCredits(event.target.value)}
          id='credits'
          //required
        />
        <Input
          type = 'number'
          placeholder='Term'
          value={term}
          onChange={event => setTerm(event.target.value)}
          id='term'
          //required
        />
        <Input
          type = 'number'
          placeholder='Year'
          value={year}
          onChange={event => setYear(event.target.value)}
          id='year'
          //required
        />
        <Input
          type = 'number'
          placeholder='Capacity'
          value={capacity}
          onChange={event => setCapacity(event.target.value)}
          id='capacity'
          //required
        />
        {/* <Input multiple
          type='number'
          name='preRequisiteList[]'
          placeholder='prerequisite'
          value={preRequisiteList}
          onChange = {event => setPreRequisiteList(event.target.value)}
          id= 'prerequisite'     
        /> */}

        {/* Submit button for the Form */}
        <button type='submit' id='login-submit'>Modify Course</button>
      </Form>
    </div>
  )

  // Styled Form
  // return (
  //   <div className='Form-container'>
  //     <div className='Form-box regular-shadow'>

  //       <div className='header-Form'>
  //         <h4 className='text-primary text-center'>
  //           <i className='fa fa-user-circle' style={{fontSize:'110px', color: 'lightblue'}}></i>
  //         </h4>
  //         <div className='image'></div>
  //       </div>

  //       <div className='body-Form'>
  //         <Form onSubmit={handleModify} id='login-Form'>

  //           <div className='Input-group mb-3'>
  //             <div className='Input-group-prepend'>
  //               <span className='Input-group-text'><i className='fa fa-user'></i></span>
  //             </div>
  //             <Input 
  //               type='text'
  //               className='Form-control'
  //               placeholder='Email Address'
  //               value={email}
  //               onChange={event => setEmail(event.target.value)}
  //               id='email'
  //               required
  //             />
  //           </div>

  //           <div className='Input-group mb-3'>
  //             <div className='Input-group-prepend'>
  //               <span className='Input-group-text'><i className='fa fa-lock'></i></span>
  //             </div>
  //             <Input
  //               type='password'
  //               className='Form-control'
  //               placeholder='Password'
  //               value={password}
  //               onChange={event => setPassword(event.target.value)}
  //               id='password'
  //               required
  //             />
  //           </div>

  //           <button type='submit' className='btn btn-primary btn-block' id='login-submit'>LOGIN</button>
  //         </Form>
  //       </div>
  //     </div>
  //   </div>   
  // )
}

export default ModifyForm