import { useNavigate } from 'react-router-dom';
import { useEffect , useState , useRef } from 'react';
import axios from 'axios'

export function Signup() {
    const username = useRef(null)
    const password = useRef(null)
    const email = useRef(null)
    const [response , setresponse] = useState(null)

  const navigate = useNavigate();

  function completed() {
      console.log(username , password, email) ;
      // Your JSON data
      const jsonData = { username : username.current.value , password : password.current.value , email : email.current.value };

      axios.post('http://localhost:3000/api/user/signup',jsonData)
      .then((response)=> {
          setresponse(response.data.message)
         //console.log(response)
         })
      .catch(error => console.error('Axios error:', error))
    
  }

    return <>
    <h1 style={{textAlign:"center",fontSize:"70px"}}>Sign-Up </h1>
    <div style={{display:"grid",justifyContent: 'center', alignItems: 'center',height:"20vh"}}>
        <div  style={{fontSize:"25px"}}>Username :</div>
        <div id="email" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input ref={username} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div> <br/>

          <div  style={{fontSize:"25px"}}>Email :</div>
        <div id="email" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input ref={email} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div>  

          <div  style={{fontSize:"25px"}}>Password :</div>
        <div id="pass" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input ref={password} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div>  
          
       <button style={{margin:"50px",height:"30px"}}onClick={() => navigate("/login")}>Already a User</button>

       <button onClick={completed}style={{backgroundColor:"#334950",margin:"70px",height:"40px",width:"150px",border:"none",borderRadius:"5px"}}>Sign-UP</button>
     </div>
     <span style={{ padding: '20px', fontFamily: 'Arial',width:"30px" }}>
      {response && (
        <div style={{ marginTop: '40px' }}>
          <h2>Response Data:</h2>
          <pre style={{ background: '#000000', padding: '10px', borderRadius: '5px' , fontColor : "black"}}>
            {JSON.stringify(response, null, 2)} 
          </pre>
        </div>
      )}
    </span>
    </>
  }
