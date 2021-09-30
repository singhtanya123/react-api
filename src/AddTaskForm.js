                    
import { useState } from "react";
const AddTaskForm = ({data,setData}) => {
  
  const [addtask,setAddTask]= useState({
      "name": "",
      "email": "",
      "body": "",
  })

  const onSubmit = async() => {
    console.log(addtask);
    //const url="https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
    const url = "http://localhost:5000/posts";
    
    setData([...data,addtask])
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addtask)
    };

    await fetch(url, requestMetadata)
        .then(res => res.json())
        .then(adddetails => {
            setAddTask({ adddetails });
        });
        
        // console.log(data)
        // console.log(setData)
        // console.log(addtask)
        
        // setAddTask({
        //   "name": '',
        //   "email": '',
        //   "body": '',
        // });

  }

  return (
    <div class="border padding margin-top">
        <div class="padding">
          <input
            type="text"  
            name="first"
            placeholder="Enter your name"
            className="font margin-bottom"  
            value={addtask.name}          
            onChange={e=>{setAddTask({...addtask,"name":e.target.value})}}
          ></input>
        </div>
        <div class="padding">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="font margin-bottom"
            value={addtask.email}         
            onChange={e=>{setAddTask({...addtask,"email":e.target.value})}}
          ></input>
        </div>
        <div class="padding">
          <input
            type="text"
            name="task"
            placeholder="Enter your task"
            className="font margin-bottom"     
            value={addtask.body}           
            onChange={e=>{setAddTask({...addtask,"body":e.target.value})}}       
          ></input>
        </div>
        <div class="padding">
        <button          
          className="font margin-bottom secondary-background-color "      
          onClick={()=>onSubmit()}  
        >Save Task</button>
        </div>
     
    </div>
  );
};

export default AddTaskForm;
