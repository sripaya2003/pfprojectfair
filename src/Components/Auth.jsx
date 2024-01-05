import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function Auth({register}) {
    const registerForm = register ? true:false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
            <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center'>
            <i class="fa-solid fa-arrow-left"></i>
            Back to Home
            </Link>
            <div className='bg-success p-5 rounded'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <div className='d-flex align-items-center flex-column'>
                            <div className='d-flex mt-2 text-light'>
                            <i class="fa-solid fa-diagram-project fa-bounce" style={{color: "##99ccff"}}></i> {' '}
                            <span className='h1 fw-bolder'> Project Fair</span>

                            </div>
                            <h4 className='text-light'>

                                {
                                    registerForm ? 'Sign up For Project Fair': 'sign in For Project Fair'
                                }
                            </h4>
                            <form  className='w-100'>
                            {
                                registerForm &&
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Username:</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Your Name" />
                               </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>E-Mail::</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Your Email" />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Password:</Form.Label>
                                  <Form.Control type="password" placeholder="Enter Your Password" />
                               </Form.Group>
                            {
                                registerForm?
                                <div>
                                    <button  type='Submit' className='btn btn-primary'>Sign Up</button>
                                    <Link to={'/Login'} className='ms-3'> Alredy a User? Sign Up</Link>
                                </div>:
                                <div>
                                <button  type='Submit' className='btn btn-primary'>Sign In</button>
                                <Link to={'/Register'} className='ms-3'> New User Sign...</Link>
                            </div>
                            }

                        </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Auth