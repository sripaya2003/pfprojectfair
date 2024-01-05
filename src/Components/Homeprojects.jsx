import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCards from './ProjectCards'

function Homeprojects() {
  return (
    <div>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <ProjectCards/>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <ProjectCards/>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <ProjectCards/>
            </Col>
            
        </Row>
    </div>
  )
}

export default Homeprojects