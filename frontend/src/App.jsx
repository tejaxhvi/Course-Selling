import { useState , useEffect} from 'react'
import { BrowserRouter , Routes , Route , NavLink} from 'react-router-dom'

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
    <h1 style={{color : 'red'}}>Course Selling Website</h1>
    
      <BrowserRouter>
      <NavLink to="/signup">Sign-up</NavLink> 
      <NavLink to="/login">Login</NavLink>
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
