import { BrowserRouter , Routes , Route , NavLink } from "react-router-dom";


export function Signup() {
    return <>
    <NavLink to="/" Home Page/>
    <NavLink to="/login" Already a User/>
    <h1>This Sign-Up Page</h1>
    </>

  }

  export default Signup