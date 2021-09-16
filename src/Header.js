import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import AddTask from "./AddTask";
import ShowTaskData from "./ShowTaskData";

function Header() {
  let form;
  const [color, setColor] = useState("green");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Add Task");

  const onClick = (e) => {
    setShow(!show);
    setColor(show ? "green" : "red");
    setTitle(show ? "Add Task" : "Close");
  };
  if (show) {
    form = <AddTaskForm />;
  }
  return (
    <div>
      <AddTask color={color} onClick={onClick} title={title} />
      {/* AddTask for adding button  and form = AddTaskform to get the task on tasks detail */}
      {form}
      <ShowTaskData />
    </div>
  );
}

export default Header;
