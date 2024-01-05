import React,{useState} from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import projectImg from '../Assets/screenshot.jpg'
import { Modal,Button } from 'react-bootstrap'


function ProjectCards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Card  onClick={handleShow}style={{ width: '18rem' }} className='rounded border-shadow'>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
    <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row>
            <Col sm={12} md={6}>
             <img src={projectImg} alt="img"  className='img-fluid'/>
            </Col>

            <Col sm={12} md={6}> 
          <h5>project title</h5>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  as opposed to using 'Content here, content here', making it look like readable English</p>
          <p> <span className='fw-bold'> Lnaguages Used :</span>HTML, CSS,JS</p>
          <div>
            <a  target='_blank' className='btn me-2' href="">
            <i class="fa-brands fa-github fa-2x"></i>
            </a>
            <a  target='_blank' className='btn 'href="">
            <i class="fa-solid fa-link fa-2x"></i>
            </a>
          </div>
            </Col>
         </Row>  
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  )
}

export default ProjectCards