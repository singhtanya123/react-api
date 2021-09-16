


const AddTaskForm = () => {
  //const [addtask,setAddTask]= useState([])
  
  const onSubmit=(e)=>{
    e.preventDefault();    
    
   const addtask={
      "name": e.target[0].value,
      "email": e.target[1].value,
      "body": e.target[2].value
    }
    JSON.stringify(addtask)
    console.log(addtask)
    // useEffect(() => {
    //   const recipeUrl = 'https://jsonplaceholder.typicode.com/todos';
    //   const postBody = {
    //       type: "hot",
    //       limit: 10
    //   };
    //   const requestMetadata = {
    //       method: 'POST',
    //       headers: {
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(addtask)
    //   };
  
    //   fetch(recipeUrl, requestMetadata)
    //       .then(res => res.json())
    //       .then(addtask => {
    //           this.setAddTask({ addtask });
    //       });
      
    // }, [])
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
        <input type="text" name="name" placeholder="Enter your name" className="font margin-bottom"></input>
        </div>
        <div>
        <input type="text" name="email" placeholder="Enter your email" className="font margin-bottom"></input>
        </div>
        <div>
        <input
          type="text"
          name="task"
          placeholder="Enter your task"
          className="font margin-bottom"
        ></input>
        </div>
        <div>        
        </div>
        <input type="submit" value="Save Task" className="font margin-bottom secondary-background-color"/>
      </form>
    </div>
  );
};

export default AddTaskForm;
