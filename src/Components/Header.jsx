import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({inDashboard}) {
  return (
<Navbar className="position-fixed top-0 w-100" style={{backgroundColor:'#99ffbb',zIndex: 1}}>
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
            
          <Navbar.Brand>
          <i class="fa-solid fa-diagram-project fa-bounce" style={{color: "##99ccff"}}></i> {' '}
           Project Fair
          </Navbar.Brand>
          </Link>
          {
            inDashboard&&
            <div className='ms-auto btn btn-success'>
              Log Out{' '}
              <i class="fa-solid fa-right-long"></i>
            </div>
          }
        </Container>
      </Navbar> 
 )
  }

export default Header