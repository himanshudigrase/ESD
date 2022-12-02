import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
/*
  This component renders the Login Form with all its functionalities
  sendModify is the method that uses the axios service to submit login credentials to the backend
*/
const ModifyForm = ({ sendModify }) => {
  // States for tracking form input which are the email address and password
  const [ courseID, setCourseID ] = useState('')
  const [ courseCode, setCourseCode ] = useState('')
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ credits, setCredits ] = useState('')
  const [ term, setTerm ] = useState('')
  const [ year, setYear ] = useState('')
  const [ capacity, setCapacity ] = useState('')
  const [preRequisiteList, setPreRequisiteList] = useState('')

  // onSubmit event handler of this form
  const handleModify = (event) => {
    // Preventing default submission of the form to the action attribute URL
    event.preventDefault()

    const credentials = {
      courseID,courseCode,name,description,credits,term,year,capacity//,preRequisiteList
    }

    // Calling sendModify with the provided credentials that will make a call to the backend
    sendModify(credentials)

    // Reset the form state, i.e. the text that's on the username and password text boxes to empty strings
    setCourseID('')
    setCourseCode('')
    setName('')
    setDescription('')
    setCredits('')
    setTerm('')
    setYear('')
    setCapacity('')
    setPreRequisiteList('')
  }

  // Typically keep id attributes on your HTML elements so that they can be styled using CSS
  return (
    <form onSubmit={handleModify} id='login-form'>
     <h5 value = "Modify Form"/>
      <input 
        type='number'
        placeholder='CourseCode'
        // Note that the text that's displayed on the textbox (value attribute) is controlled by the email state
        value={courseCode}
        // onChange event handler
        // When you type something on the textbox, the onChange event handler will be triggered
        // This event handler as written below, updates the email state with what's being typed by the user
        // Because a state has been updated, the form component will be re-rendered and you can see the updated input
        // on the screen, obviously this happens so fast that you cannot see it but this is the entire procedure
        onChange={event => setCourseCode(event.target.value)}
        id='courseCode'
        //required
      />
      <input 
        type='number'
        placeholder='CourseID'
        // Note that the text that's displayed on the textbox (value attribute) is controlled by the email state
        value={courseID}
        // onChange event handler
        // When you type something on the textbox, the onChange event handler will be triggered
        // This event handler as written below, updates the email state with what's being typed by the user
        // Because a state has been updated, the form component will be re-rendered and you can see the updated input
        // on the screen, obviously this happens so fast that you cannot see it but this is the entire procedure
        onChange={event => setCourseID(event.target.value)}
        id='courseID'
        //required
      />
        
      {/* Same as the above username input, except this one has the type password */}
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={event => setName(event.target.value)}
        id='name'
        //required
      />
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={event => setDescription(event.target.value)}
        id='description'
        //required
      />
      <input
        type = 'number'
        placeholder='Credits'
        value={credits}
        onChange={event => setCredits(event.target.value)}
        id='credits'
        //required
      />
       <input
        type = 'number'
        placeholder='Term'
        value={term}
        onChange={event => setTerm(event.target.value)}
        id='term'
        //required
      />
       <input
        type = 'number'
        placeholder='Year'
        value={year}
        onChange={event => setYear(event.target.value)}
        id='year'
        //required
      />
       <input
        type = 'number'
        placeholder='Capacity'
        value={capacity}
        onChange={event => setCapacity(event.target.value)}
        id='capacity'
        //required
      />
      <input multiple
        type='number'
        name='preRequisiteList[]'
        placeholder='prerequisite'
        value={preRequisiteList}
        onChange = {event => setPreRequisiteList(event.target.value)}
        id= 'prerequisite'     
      />

      {/* Submit button for the form */}
      <button type='submit' id='login-submit'>LOGIN</button>
    </form>
  )

  // Styled Form
  // return (
  //   <div className='form-container'>
  //     <div className='form-box regular-shadow'>

  //       <div className='header-form'>
  //         <h4 className='text-primary text-center'>
  //           <i className='fa fa-user-circle' style={{fontSize:'110px', color: 'lightblue'}}></i>
  //         </h4>
  //         <div className='image'></div>
  //       </div>

  //       <div className='body-form'>
  //         <form onSubmit={handleModify} id='login-form'>

  //           <div className='input-group mb-3'>
  //             <div className='input-group-prepend'>
  //               <span className='input-group-text'><i className='fa fa-user'></i></span>
  //             </div>
  //             <input 
  //               type='text'
  //               className='form-control'
  //               placeholder='Email Address'
  //               value={email}
  //               onChange={event => setEmail(event.target.value)}
  //               id='email'
  //               required
  //             />
  //           </div>

  //           <div className='input-group mb-3'>
  //             <div className='input-group-prepend'>
  //               <span className='input-group-text'><i className='fa fa-lock'></i></span>
  //             </div>
  //             <input
  //               type='password'
  //               className='form-control'
  //               placeholder='Password'
  //               value={password}
  //               onChange={event => setPassword(event.target.value)}
  //               id='password'
  //               required
  //             />
  //           </div>

  //           <button type='submit' className='btn btn-primary btn-block' id='login-submit'>LOGIN</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>   
  // )
}

export default ModifyForm