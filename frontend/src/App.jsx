import { useState , useEffect} from 'react'
import { BrowserRouter , Routes , Route ,useNavigate} from 'react-router-dom'

import { Signup } from '../components/signup'
import { Login } from '../components/login'

import axios from 'axios'
import './App.css'

function App() {
  const [course, setCourse] = useState([])

  // useEffect(()=>{
  //   axios.get('http://localhost:3001/api/courses')
  //   .then((response)=>{
  //     setCourse(response.data.Courses)
  //     console.log(response.data.Courses);
      
  //   })
  // },[])
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

function Landing() {
  const navigate = useNavigate();
  return <>
  <div style={{display: "flex",gap:"40vw",width:'full'}}>
    <h1 style={{ color : 'red' , marginLeft : "150px" , fontSize : "50px"}}>Course Selling Website</h1>
    <div style={{margin:"40px",display: "flex",gap:"30px"}}>
    <button style={{height : "40px" , width : "120px", }} onClick={()=> navigate('/signup')} > Sign-up</button>
    <button style={{height : "40px" , width : "120px", }}  onClick={()=> navigate('/signup')} >Login</button>
    </div>
    </div>
  
  </>
}

export default App
