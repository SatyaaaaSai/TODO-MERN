import { useState } from "react";
const CreateToDo = () => {
  const [task,setTask]=useState("");
  const [description,setDescription]=useState();
  return (
    <div>
      <input type="text" placeholder="Enter your task title" onChange={function(e){
        setTask(e.target.value);
      }}></input>
      <br></br>
      <input type="text" placeholder="Enter your description" onChange={function(e){
        setDescription(e.target.value);
      }}></input>
      <br></br>

      <button onClick={()=>{
        fetch("http://localhost:3000/todo", {
          method: "POST",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify({
              title: task,
              description: description,
          }),
      })
      .then(async function (response) {
          const json = await response.json();
          alert("To-DO Created Successfully");
          console.log(json);
      })
      .catch(function(error) {
          console.error('Error creating TODO:', error);
      });
      
      }}>Add a To-Do</button>
    </div>
  );
};

export default CreateToDo;
