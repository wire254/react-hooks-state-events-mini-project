import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import {v4 as uuid} from "uuid";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskData, setTaskData] = useState(TASKS)
  const [categoryData] = useState(CATEGORIES)
  const [catSelected, setCatSelected ] = useState("All")
   
  const handleAddNewTask = (newTask) => {
    setTaskData([...taskData,newTask])
  }
  
const newTaskList = taskData.filter ((task) => {
    if (catSelected === "All") return true
         return task.category === catSelected
     })
  console.log(newTaskList)
 
 return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCatSelected={setCatSelected} catSelected={catSelected}/>
      <NewTaskForm categories={categoryData} onTaskFormSubmit={handleAddNewTask} />
      <TaskList tasks={newTaskList} setTask={setTaskData} />
    </div>
  );
}

export default App;
