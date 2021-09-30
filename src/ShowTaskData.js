import React from "react";
function ShowTaskData({ data, setData }) {
  const handleDelete = (index) => {
    setData(data.filter((c, i) => i !== index));
  };

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={item.id} style={{ display: "flex" }}>
            <div>{item.name}</div>
            <div>
              <button type='button' onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShowTaskData;
