import React from "react";

function Task({text, category, id, onDeleteTask, tasks}) {

  function handleClick() {
    const newTaskArray = tasks.filter ((task) => {
      if (task.id !== id) return task
    })
    onDeleteTask(newTaskArray)
 } 

return (
 <div className="task">
   <div className="label">{category}</div>
   <div className="text">{text}</div>
   <button className="delete" onClick={handleClick}>X</button>
 </div>
);
}

export default Task;
