
import { useEffect, useState } from 'react'
import './App.css'
import CreateToDo from './components/CreateToDo'
import ToDos from './components/ToDos'

function App() {
  const[todos,setTodos] = useState([]); 

  // fetch("http://localhost:3000/todos")
  // .then(async function(response){
  //    const data = await response.json();
  //    setTodos(data);
  //    console.log(data);
  // })

  const fetchData= async ()=>{
    const response= await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data.todos);
  }

  useEffect(()=>{
      fetchData();
  },[]);

  return (
    <div>
      <CreateToDo/>
      <ToDos todos={todos}/>
    </div>
    )
}

export default App
