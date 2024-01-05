import React from 'react'
import Addproject from './Addproject'

function Myprojects() {
  return (
    <div className='card-shadow p-3 m-2'>
      <div className='d-flex justify-content-between'>
        <h2>My projects</h2>
          <Addproject/>
      </div>
      <div  className='mt-3'>
        {/* user added project */}
       <div className='border rounded shadow m-2'>
        <div className='d-flex justify-content-between p-3'>
          <h4>Project Title</h4>
          <div>
            <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
            <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
            <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
          </div>
        </div>
       </div>
       <h4 className='text-danger'>No Projects Uploaded!!</h4>
      </div>
      
    </div>
  )
}

export default Myprojects