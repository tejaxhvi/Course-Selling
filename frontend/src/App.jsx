import { useState , useEffect} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

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
    <div style={{display: "flex"}}>
    <h1 style={{ color : 'red' , marginLeft : "150px" , fontSize : "50px"}}>Course Selling Website</h1>
    <button>Sign-up</button>
    <button>Login</button>
    </div>
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

  return <>
  
  </>
}

export default App
