import React, { useState } from "react";
import PropTypes from "prop-types";
import AddTaskForm from "./AddTaskForm";

const AddTask = ({
  data,
  setData,
  // color, title, onClick
}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        style={{ backgroundColor: show ? "red" : "green" }}
        className='margin-right right padding primary-color'
      >
        {show ? "Close" : "Add Task"}
      </button>
      {show && <AddTaskForm data={data} setData={setData} />}
    </div>
  );
};

AddTask.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

AddTask.defaultProps = {
  color: "red",
  title: "Add Task",
};

export default AddTask;
