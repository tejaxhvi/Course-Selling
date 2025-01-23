import { useRef , useState } from "react";


export function Useref() {
    const [value, setvalue] = useState(null)
    const ref = useRef(null);
    const timerId = null
  
   {/* function startclock() {
      const timerId = setInterval(() => {
        setvalue(c => c+1)
      }, 1000);
      settimer(timerId)
    }
    function stopclock() {
      clearInterval(timer)
      console.log(timer);
      
    }*/} //worst approach bcz it adds one more re-render for storing the setInterval value

    function startclock() {
         ref.current = setInterval(() => {
            setvalue(c => c+1)
        }, 1000);
    }
    function stopclock() {
        clearInterval(ref.current)
        console.log(ref.current);
        
    }
  
    return <div style={{height:"100vh",maxWidth:"fit-content",marginInline:"auto"}}>
        <h1>this Practice for useRef hook in react</h1>
        <h2>{value}</h2>
        <button onClick={startclock}>Start</button>
        <button onClick={stopclock}>Stop</button>
    </div>
  }