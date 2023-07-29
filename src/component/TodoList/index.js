import React, { useState } from "react";

const TodoList = () => {
  const [activity, setactivity] = useState("");
  const [listdata, setdata] = useState([]);
  function addActivity() {
    setdata((listdata) => {
      const updatelist = [...listdata, activity];
      console.log(updatelist);
      setactivity("");
      return updatelist;
    });
  }
  function remove_list(i) {
    const updatelistdata = listdata.filter((elem, id) => {
      return i!== id;
    });
    setdata(updatelistdata);
  }
  return (
    <>
      <div className="main">
        <div className="todolist">
          <div>
            <img src="../Images/Line 1.png" alt="Line" />
          </div>
          <div>
            <img src="../Images/TO-DO NOW.png" alt="TODO" />
          </div>
          <div>
            <img src="../Images/Line 1.png" alt="Line2" />
          </div>
        </div>
        <div className="divider">
          <img src="../Images/Divider.png" alt="Divider" />
        </div>
        <div className="taskassign">
          <input
            type="text"
            value={activity}
            onChange={(e) => setactivity(e.target.value)}
          />
        </div>
        <button className="add_task" onClick={addActivity}>
          <i>Add Task</i>
        </button>
        <div className="line3">
          <img src="../Images/Line 3.png" alt="line3" />
        </div>
        <div className="list">
          <ul>
            {listdata !== [] &&
              listdata.map((data, i) => {
                return (
                  
                    <div className="listdata" key={Math.random()}>
                      <li>
                        {data}
                        
                      </li>
                      <button onClick={() => remove_list(i)}>
                          <img src="../Images/delete.png" alt="delete" />
                        </button>
                    </div>
            
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
