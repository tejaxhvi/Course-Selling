import {  useNavigate  } from "react-router-dom";


export function Login() {
  
    const navigate = useNavigate();
  
    return <>
        <h1>This Login Page</h1>
        <button onClick={() => navigate("/")}>Go to Home Page</button>
    </>
  }
