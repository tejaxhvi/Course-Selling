import { useState , useEffect} from 'react'
import { BrowserRouter , Routes , Route ,useNavigate} from 'react-router-dom'

import { Signup } from '../components/signup'
import { Login } from '../components/login'

import axios from 'axios'
import './App.css'

function App() {
  const [course, setCourse] = useState([])
  const navigate = useNavigate();


  return (
    <>
    <div style={{display: "flex",gap:"40vw",width:'full'}}>
        <h1 style={{ color : 'red' , marginLeft : "150px" , fontSize : "50px",cursor : "pointer"}} onClick={()=> navigate('/')}>Course Selling Website</h1>
        <div style={{margin:"40px",display: "flex",gap:"30px"}}>
            <button style={{height : "40px" , width : "120px", }} onClick={()=> navigate('/signup')} > Sign-up</button>
            <button style={{height : "40px" , width : "120px", }}  onClick={()=> navigate('/signup')} >Login</button>
         </div>
    </div>
      <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </>
  )
}

function Landing() {
  return <>
   
  </>
}

export default App
