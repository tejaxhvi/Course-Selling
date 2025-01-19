import { useNavigate } from 'react-router-dom';

export function Signup() {

  const navigate = useNavigate();

    return <>
    <h1>This Sign-Up Page</h1>
    <button onClick={() => navigate("/login")}>Already a User</button>
    </>

  }
