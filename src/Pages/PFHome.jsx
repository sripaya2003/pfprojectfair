import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import desigenerImg from '../Assets/dev5.jpeg'
import Homeprojects from '../Components/Homeprojects'
import { Link } from 'react-router-dom'

function PFHome() {
  const [isLogged,setIsLogged]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem("currentuser")){
      setIsLogged(true)
    }
    else{
      setIsLogged(false)
    }
  },[])
  return (
    <>
    <div className='container-fluid rounded' style={{width:'100%', height:'100vh', backgroundColor:'#99ffbb'}}>
         <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
             <h1 style={{fontSize:'40px'}} className='text-secondary'>
             <i class="fa-solid fa-diagram-project fa-bounce" style={{color: "##99ccff"}}></i>
             Project Fair
             </h1>
             <p className='mt-3' style={{textAlign:'justify'}}> One stop destination for software development projects any user can add and  can also every other projects tso what are you wating for!! </p>
            {
              isLogged?
              <Link to={'/Dashboard'} className='btn btn-warnning'>Manage your Projrcts <i class="fa-solid fa-right-long"></i></Link>
              :
              <Link to={'/Login'} className='btn btn-success'>Start to explore <i class="fa-solid fa-right-long"></i></Link>

            }
            </Col>
            <Col sm={12} md={6}>
              <img src={desigenerImg} className='img-fluid' alt= ""/>
            </Col>
         </Row>

    </div>
    <div className='my-5'>
      <h3 style={{textAlign:'center'}}>Projects...</h3>
     <marquee behavior="" direction="">
          <Homeprojects/>
          </marquee>
          </div>
          <div>
          <Link to={'/Projects'}> See more</Link>

          </div>
         

    </>
  )
}

export default PFHome