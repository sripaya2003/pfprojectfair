import React, { useEffect, useState } from 'react'
import Addproject from './Addproject'
import { userProjects } from '../services/allApi'

function Myprojects() {

  //  const reqHeader=()
    const [token,setToken]=useState("")
    const [projects,setprojects]=useState([])

    useEffect(()=>{
      if (localStorage.getItem("token")){
         setToken(localStorage.getItem("token"))
      }
    },[])
    useEffect(()=>{
      if (token){
        getProject()
      }
    },[])
    const getProject =async () => {
      const reqHeader = {
        "content-type":"application/json","Authorization":`Bearer ${token}`
      }
      const result = await userProjects(reqHeader)
      if (result.status ===200){
        setprojects(result.data)
        console.log(projects)
      }
      else{
        setprojects([])
      }
    }
   

  return (
    <div className='card-shadow p-3 m-2'>
      <div className='d-flex justify-content-between'>
        <h2>My projects</h2>
          <Addproject/>
      </div>
      <div  className='mt-3'>
        {/* user added project */}
        {
          projects ? 
          projects.map(item =>{
          <div className='border rounded shadow m-2'>
        <div className='d-flex justify-content-between p-3'>

        
       
          <h4>{item.title}</h4>
          <div>
            <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
            <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
            <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
          </div>
        </div>
       </div>
       })
       :

       <p className=' p-3 text-danger f5-4'>No Projects Uploaded!!</p>

      }
      </div>
      
    </div>
  )
}

export default Myprojects