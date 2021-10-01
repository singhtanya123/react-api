import { useState } from "react";

const AddTaskForm = ({ data, setData }) => {
  const [addtask, setAddTask] = useState({
    name: "",
    email: "",
    body: "",
  });

  const resetForm = () => {
    setAddTask({
      name: "",
      email: "",
      body: "",
    });
  };

  const handleSubmit = (taskToAdd) => {
    JSON.stringify(taskToAdd);
    setData([...data, taskToAdd]);
    // const url = "https://jsonplaceholder.typicode.com/comments";
    // const postBody = {
    //   type: "hot",
    //   limit: 10,
    // };
    // const requestMetadata = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(postBody),
    // };

    // fetch(url, requestMetadata).then((res) => res.json());

    resetForm();
  };

  return (
    <div>
      <div>
        <input
          type='text'
          name='name'
          value={addtask.name}
          onChange={(e) => setAddTask({ ...addtask, name: e.target.value })}
          placeholder='Enter your name'
          className='font margin-bottom'
        />
      </div>
      <div>
        <input
          type='text'
          name='email'
          value={addtask.email}
          onChange={(e) => setAddTask({ ...addtask, email: e.target.value })}
          placeholder='Enter your email'
          className='font margin-bottom'
        />
      </div>
      <div>
        <input
          type='text'
          name='task'
          value={addtask.body}
          onChange={(e) => setAddTask({ ...addtask, body: e.target.value })}
          placeholder='Enter your task'
          className='font margin-bottom'
        />
      </div>
      <button
        type='button'
        onClick={() => handleSubmit(addtask)}
        className='font margin-bottom secondary-background-color'
      >
        Save Task
      </button>
    </div>
  );
};

export default AddTaskForm;
