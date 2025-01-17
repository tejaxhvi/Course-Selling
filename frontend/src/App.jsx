import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [course, setCourse] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/api/courses')
    .then((response)=>{
      setCourse(response.data.Courses)
      console.log(response.data.Courses);
      
    })
  },[])
  return (
    
    <>
      <h1>Course-Selling Website</h1>
      {
        
        course.map((course , index)=>{
          <div key={course.id}>
            <h1>{course.title}</h1>
            <h2>{course.description}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
