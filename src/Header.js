import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import ShowTaskData from "./ShowTaskData";

function Header() {
  const [data, setData] = useState([
    {
      name: "Name 1",
      id: "num-1",
    },
    {
      name: "Name 2",
      id: "num-2",
    },
  ]);

  const getData = () => {
    const postBody = {
      type: "hot",
      limit: 10,
    };
    fetch("https://jsonplaceholder.typicode.com/comments", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify(postBody),
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
      <AddTask
        data={data}
        setData={
          setData
        } /* color={show ? "red": "green" } onClick={onClick} title={show ? "Close":"Add Task" }*/
      />
      <ShowTaskData data={data} setData={setData} />
    </div>
  );
}

export default Header;
