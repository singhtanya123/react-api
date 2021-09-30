import PropTypes from "prop-types";
import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const AddTask = ({data,setData}) => {
  let form;
  const [show, setShow] = useState(false);
  const onClick=(e)=>{
    setShow(!show)
  }
  if (show) {
    // will only if show form is true otherwise hide.
    form = <AddTaskForm data={data} setData={setData}/>; 
  }
  return (
    <div>
    <button
      onClick={onClick}
      style={{ backgroundColor: show ? "red": "green"  }}
      className="margin-bottom margin-right right padding primary-color"
    >
      {show ? "Close":"Add Task" }
    </button>
     {form}
     </div>
  );
};
AddTask.defaultProps = {
  color: "red",
  title: "Add Task",
};

AddTask.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default AddTask;
