import { useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from 'axios'

export function Signup() {
     const [username, setusername ] = useState('');
      const [password , setpassword ] = useState('')
      const [email , setemail ] = useState('')

  const navigate = useNavigate();

  function completed() {
      console.log(username , password, email) ;
      // Your JSON data
const jsonData = { username : username , password : password , email : email };

// Set up options for the fetch request
const options = {
  method: 'POST',
  body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
};

// Make the fetch request with the provided options
fetch('http://localhost:3001/api/user/signup', options)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
    
    
  }

    return <>
    <h1 style={{textAlign:"center",fontSize:"50px"}}>Sign-Up </h1>
    <div style={{display:"grid",justifyContent: 'center', alignItems: 'center',height:"20vh"}}>
        <div  style={{fontSize:"25px"}}>Username :</div>
        <div id="email" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input onChange={(e)=> setusername(e.target.value)} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div> <br/>

          <div  style={{fontSize:"25px"}}>Email :</div>
        <div id="email" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input onChange={(e)=> setemail(e.target.value)} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div>  

          <div  style={{fontSize:"25px"}}>Password :</div>
        <div id="pass" style={{height:"35px",width:"250px",backgroundColor:"#334155",borderColor:"white",borderRadius:"5px"}} >
          <input onChange={(e)=> setpassword(e.target.value)} style={{outline:"none",border:"none",margin:"7px",backgroundColor:"#334155",fontSize:"15px"}}type="text" /></div>  
          
       <button style={{margin:"50px",height:"30px"}}onClick={() => navigate("/login")}>Already a User</button>

       <button onClick={completed}style={{backgroundColor:"#334950",margin:"70px",height:"40px",width:"150px",border:"none",borderRadius:"5px"}}>Sign-UP</button>


     </div>

    </>
  }
