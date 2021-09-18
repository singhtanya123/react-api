import React, { useState, useEffect } from "react";
function ShowTaskData() {
  const [data, setData] = useState([]);
  const getData = () => {
    const postBody = {
      type: "hot",
      limit: 10
  };
    fetch("https://jsonplaceholder.typicode.com/comments", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify(postBody)
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
  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item) => <p key={item.id}>{item.name}</p>)}
    </div>
  );
}

export default ShowTaskData;
