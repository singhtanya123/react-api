import React, {/* useState */}  from "react";
//import AddTaskForm from "./AddTaskForm";
import AddTask from "./AddTask";
import ShowTaskData from "./ShowTaskData";

function Header() {
  /*
  let form;
  //const [color, setColor] = useState("green");  //to change color acc to button toggle
  //const [show, setShow] = useState(false);
  // const [title, setTitle] = useState("Add Task");  //to change title acc to button toggle

  const onClick = (e) => {
    setShow(!show);
   // setColor(show ? "green" : "red");   //setting color acc to button toggle
   // setTitle(show ? "Add Task" : "Close");  //setting title acc to button toggle
  };
  if (show) {
    // will only if show form is true otherwise hide.
    form = <AddTaskForm />;  
  }
  */
  return (
    <div>
      <AddTask /* color={show ? "red": "green" } onClick={onClick} title={show ? "Close":"Add Task" }*/ />
      {/* AddTask for adding button  and form = AddTaskform to get the task on tasks detail 
      {form}*/}
      <ShowTaskData />
    </div>
  );
}

export default Header;
