const ToDos = ({todos}) => {
return <div>
  {todos.map(function(todos,index){
    return (<div key={index}>
      <h1>{todos.title}</h1>
      <h1>{todos.description}</h1>
      <button>{todos.completed==true?"Completed":"Mark as Complted"}</button>
      </div>
    );
  })}
</div>
};

export default ToDos;
