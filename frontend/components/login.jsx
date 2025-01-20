import {  useNavigate  } from "react-router-dom";
import {useState} from 'react'
import  axios  from "axios"
export function Login() {
    const [username, setusername ] = useState("");
    const [password , setpassword ] = useState("")

    const navigate = useNavigate();

    function completed() {

      useEffect(() => {
         axios.post("/api/user/login",{
          username : username,
          password : password
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })   
      }, [])
      
     
  
    return <>
        <h1 style={{textAlign:"center",fontSize:"50px"}}>Login</h1>
    <div style={{display:"grid",justifyContent: 'center', alignItems: 'center',height:"20vh"}}>
        <div style={{fontSize:"25px"}}>Email :</div>
        <div id="email" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input onChange={(e)=> setusername(e.target.value)} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div> <br/>

          <div q style={{fontSize:"25px"}}>Password :</div>
        <div id="pass" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input onChange={(e)=> setpassword(e.target.value)}  style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div>  
          
      <button onClick={completed} style={{backgroundColor:"#334950",margin:"70px",height:"40px",width:"150px",border:"none",borderRadius:"5px"}}>Login</button>
     </div>

    </>
  }
}
