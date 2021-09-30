
import EditData from "./EditData";

function ShowTaskData({data,setData}) {
  let propData;
  const url = "http://localhost:5000/posts";
  const delData = (id) => {
    console.log(id);
    const requestMetadata = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    fetch(url + "/" + id, requestMetadata)
      .then((res) => res.json())
      .then((result) => {
        setData(data.filter( x =>  x.id!=id ))
      });
  };

  
  return (
    <div class="margin-top">
      <p>Let's get started</p>
      {data &&
        data.length > 0 &&
        //code to get last 5 records
        data
          .filter((item) => item.id >= data.length - 10)
          .map((item) => (
            <p class="secondary-color" key={item.id} id="showtitle">
              <span class="primary-color margin-top">TitleName: </span>
              {item.id} {item.name}
              {/* it took me so long to understand , this button is created for delete but capturing happens so used stopPropagation to stop it. */}
              <i
                class="fas fa-trash right"
                value={item.id}
                onClick={(e) => {
                  delData(item.id);
                  e.stopPropagation();
                }}
              ></i>
              <i
                class="fas fa-edit right margin-right right"
                value={item.id}
                onClick={(e) => {
                  e.stopPropagation();                  
                  <EditData id={item.id} />;
                }}
              ></i>
            </p>
          ))}
      {propData}
    </div>
  );
}

export default ShowTaskData;
