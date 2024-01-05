import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap';
function Addproject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
             <div className='row'>
                <div className='col-lg-6'>
                    <label htmlFor='project' className='text-center'>
                        <input type='file' id='project' style={{display:'none'}}></input>
                        <img src="https://th.bing.com/th/id/OIP.JIo_erHjGUXp0-Z86gJAqAHaHa?w=220&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </label>
                </div>
                <div className='col-lg-6'>
                    <input type="text" placeholder='Project Title'  className='from-control mb-2 rounded'/>
                    <input type="text" placeholder='Project OverView'  className='from-control mb-2 rounded'/>
                    <input type="text" placeholder='Languages Used'  className='from-control mb-2 rounded'/>
                    <input type="text" placeholder='Github Url'  className='from-control mb-2 rounded'/>
                </div>
                    <input type="text" placeholder='Demo Url'  className='from-control mb-2 rounded'/>

             </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject