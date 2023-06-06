import React from "react";

function CategoryFilter({categories, setCatSelected, catSelected}) {
 
  const handleCategorySelection = (category) => {
      setCatSelected(category)
 }   
 
 return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
          <button className={catSelected === category ? "selected": null } key={category} onClick={() => handleCategorySelection(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
