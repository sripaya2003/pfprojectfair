import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div>
      <Header inDashboard={true}/>
      <Row style={{margineTop:'100px' }} className='p-5 mt-5'>
        <Col sm={12} md={8}>
          <h1>Welcome<span className='text-warning'>User</span></h1>
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