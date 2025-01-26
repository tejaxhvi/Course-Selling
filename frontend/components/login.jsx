import {  useNavigate  } from "react-router-dom";
import {useState , useRef } from 'react'
import  axios  from "axios"
export function Login() {
   const username = useRef(null)
   const password = useRef(null)
    const [response , setresponse ] = useState(null)

    const navigate = useNavigate();

    function completed() {
      console.log(username , password) ;
      const jsonData = { 
        username : username.current.value ,
         password : password.current.value 
      };

      axios.post('http://localhost:3000/api/user/login',jsonData)
      .then((response)=> {
        setresponse(response.data.token)
        })
      .catch(error => console.error('Axios error:', error))
    
  }
     
  
    return <>
        <h1 style={{textAlign:"center",fontSize:"50px"}}>Login</h1>
    <div style={{display:"grid",justifyContent: 'center', alignItems: 'center',height:"20vh"}}>
        <div style={{fontSize:"25px"}}>Username :</div>
        <div id="email" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input ref={username} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div> <br/>

          <div q style={{fontSize:"25px"}}>Password :</div>
        <div id="pass" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input ref={password}  style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div>  
          
      <button onClick={completed} style={{backgroundColor:"#334950",margin:"70px",height:"40px",width:"150px",border:"none",borderRadius:"5px"}}>Login</button>
     </div>

     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {response && (
        <div style={{ marginTop: '130px' }}>
          <h2>Response Data:</h2>
          <pre style={{ background: '#000000', padding: '10px', borderRadius: '5px' , fontColor : "black"}}>
            {JSON.stringify(response, null, 2)} 
          </pre>
        </div>
      )}
    </div>

    </>
  }

