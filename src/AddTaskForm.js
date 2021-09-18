
import { useState } from "react";
const AddTaskForm = () => {
  const [addtask,setAddTask]= useState([])

  const onSubmit = (e) => {
    e.preventDefault();

     const addtask = {
      name: e.target[0].value,
      email: e.target[1].value,
      body: e.target[2].value,
    };
    JSON.stringify(addtask);
    console.log(addtask);        
  
    const url = "https://jsonplaceholder.typicode.com/comments";
    const postBody = {
        type: "hot",
        limit: 10
    };
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    fetch(url, requestMetadata)
        .then(res => res.json())
        .then(adddetails => {
            setAddTask({ adddetails });
        });
        setAddTask ({
          name: '',
          email: '',
          body: '',
        });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="font margin-bottom"            
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="font margin-bottom"
            
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="task"
            placeholder="Enter your task"
            className="font margin-bottom"
            
          ></input>
        </div>
        <div></div>
        <input
          type="submit"
          value="Save Task"
          className="font margin-bottom secondary-background-color"
          
        />
      </form>
    </div>
  );
};

export default AddTaskForm;
