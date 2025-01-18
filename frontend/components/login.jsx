import { BrowserRouter , useNavigate , NavLink } from "react-router-dom";


export function Login() {
    const navigate = useNavigate();
  
    function redirectUser() {
      navigate("/")
    }
  
    return <>
    
        <NavLink to="/" Home Page/>
        <NavLink to="/signup"Create New Account/>
        <h1>This Login Page</h1>
        <button onClick={redirectUser}>Go to Home Page</button>
    </>
  }
