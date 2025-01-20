import { Routes , Route , useNavigate} from 'react-router-dom'

import { Signup } from '../components/signup'
import { Login } from '../components/login'

import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
    <div style={{display: "flex",gap:"40vw",width:'full',height:"15vh",justifyContent: "space-between"}}>
        <h1 style={{ color : 'red' , margin : "30px" , fontSize : "40px",cursor : "pointer"}} onClick={()=> navigate('/')}>Course Selling </h1>
        <div style={{margin:"50px",display: "flex",gap:"30px",}}>
            <button style={{height : "40px" , width : "120px", }} onClick={()=> navigate('/signup')} > Sign-up</button>
            <button style={{height : "40px" , width : "120px", }}  onClick={()=> navigate('/login')} >Login</button>
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
