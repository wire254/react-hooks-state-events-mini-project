import React from "react";
import Task from "./Task";
import {v4 as uuid} from "uuid";

function TaskList({tasks, setTask}) {
  
  const tasksToDisplay = tasks.map ((task) => {
      task.id=uuid()
      return task
 })
 
 function deleteTask (newTaskArray) {
      setTask(newTaskArray)
 }
 
 return (
   <div className="tasks">
      {tasksToDisplay.map((task)=> (
       <Task key={task.id} id={task.id} category={task.category} text={task.text} onDeleteTask={deleteTask} tasks={tasks} setTask={setTask}/>
     ))} 
   </div>
 );
}

export default TaskList;
