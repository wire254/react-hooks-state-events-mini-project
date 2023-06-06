import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("")    
  const [category, setCategory] = useState("")
  
    const catsToDisplay = categories.filter ((cat) => {
        if(cat !== "All"){   
             return cat
        }
    })
  
    const handleSubmit = (event) =>  {
      event.preventDefault()
      let newTask={text:details, category:category}
      onTaskFormSubmit(newTask)
    }
  
    return (
      <form className="new-task-form" onSubmit={handleSubmit} >
        <label>
          Details
          <input type="text" onChange={event => setDetails(event.target.value)} name="text" value={details} />
        </label>
        <label>
          Category
          <select name="category" onChange={event => setCategory(event.target.value)} value={category}>
            <option></option>
            {catsToDisplay.map((cat) => (
              <option key={cat}>{cat}</option>
              ))}
            </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    );
  }

export default NewTaskForm;
