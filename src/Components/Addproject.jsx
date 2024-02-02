import React,{useState,useEffect} from 'react'
import { Modal,Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify'
import { addProjectApi } from '../services/allApi';
import 'react-toastify/dist/ReactToastify.css';


function Addproject() {
    const [show, setShow] = useState(false);
    const [token,setToken] = useState("")
    const [projectDeatails,setProjectDeatails]=useState({
      title:"",overview:"",languages:"",github:"",demo:"", image:"",userId:""
    })
    const [preview,setPreview]=useState("")

    useEffect(()=>{
      const existingUser=JSON.parse(localStorage.getItem("currentUser"))
      setProjectDeatails({...projectDeatails,userId:existingUser?._id})
      if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    },[])

    useEffect(()=>{
      if(projectDeatails.image){
        setPreview(URL.createObjectURL(projectDeatails.image))
      }
    },[projectDeatails.image])

//console.log("projedctdetails")
     const handleAddProject= async()=>{
      console.log("handle",projectDeatails.title,projectDeatails.image);
      if(!projectDeatails.title || !projectDeatails.overview || !projectDeatails.languages || !projectDeatails.github || !projectDeatails.demo || !projectDeatails.userId || !projectDeatails.image){
        console.log("invalid");
        toast.warning("Enter valid details")
      }
      else{
        const projectData=new FormData()
        projectData.append("title",projectDeatails.title)
        projectData.append("overview",projectDeatails.overview)
        projectData.append("languages",projectDeatails.languages)
        projectData.append("github",projectDeatails.github)
        projectData.append("demo",projectDeatails.demo)
        projectData.append("userId",projectDeatails.userId)
        projectData.append("project_image",projectDeatails.image)
          console.log(projectData)
          const reqHeader={
          "Content-Type":"multipart/form-data","multipart/form-data":`Bearer ${token} `
          }
          console.log(reqHeader);
          const res =await addProjectApi(projectData,reqHeader)
          console.log(res);
          if(res.status===200){
            // setProjectDeatails({
            //   title:"",overview:"",languges:"",github:"",demo:"",image:"",userId:""
            // })
            toast.success("Project Added Successfully!!")
          }
          else{
            toast.error("Project Adding Faild!!")
          }

      }

     }

//console.log("projedctdetails")

  const handleClose = () => {
      setProjectDeatails({
        title:"",overview:"",languges:"",github:"",demo:"",image:"",userId:""
     })
     setPreview("")
     setShow(false);
    }
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
                        <input type='file' id='project' style={{display:'none'}} onChange={(e)=>setProjectDeatails({...projectDeatails,image:e.target.files[0]})}></input>
                        <img src="https://th.bing.com/th/id/OIP.JIo_erHjGUXp0-Z86gJAqAHaHa?w=220&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </label>
                </div>
                <div className='col-lg-6'>
                    <input type="text" placeholder='Project Title'  className='from-control mb-2 rounded' onChange={(e)=>setProjectDeatails({...projectDeatails,title:e.target.value})}/>
                    <input type="text" placeholder='Project OverView'  className='from-control mb-2 rounded' onChange={(e)=>setProjectDeatails({...projectDeatails,OverView:e.target.value})}/>
                    <input type="text" placeholder='Languages Used'  className='from-control mb-2 rounded' onChange={(e)=>setProjectDeatails({...projectDeatails,languages:e.target.value})}/>
                    <input type="text" placeholder='Github Url'  className='from-control mb-2 rounded' onChange={(e)=>setProjectDeatails({...projectDeatails,github:e.target.value})}/>
                </div>
                    <input type="text" placeholder='Demo Url'  className='from-control mb-2 rounded' onChange={(e)=>setProjectDeatails({...projectDeatails,demo:e.target.value})}/>

             </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddProject}>svae</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject