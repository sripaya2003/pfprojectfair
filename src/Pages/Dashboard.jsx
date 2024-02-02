import React ,{useState,useEffect}from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'

function Dashboard() {
  const [userName,setUserName]=useState("")
  useEffect(()=>{
    setUserName(JSON.parse(localStorage.getItem("currentUser"))?.userName)

  },[])
  // console.log(userName)
  return (
    <div>
      <Header inDashboard={true}/>
      <Row style={{margineTop:'100px' }} className='p-5 mt-5'>
        <Col sm={12} md={8}>
          <h1>Welcome<span className='text-warning'>{userName}</span></h1>
         <Myprojects/>
        </Col>
        <Col sm={12} md={4}>
          <Profile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard