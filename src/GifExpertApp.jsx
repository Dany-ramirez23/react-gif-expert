import { useState } from "react";
import { AddCategory,GifGrid } from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory=(newCategory)=>{
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  
  
  return (
    <>
    {/* Título */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory 
    // setCategories={setCategories}
      onNewCategory={value=>onAddCategory(value)}
      currentCategories={categories}
    />

    {/* Listado de gif */}
    
  
    {categories.map(category=>( 
      
      <GifGrid key={category} category={category}/>
    ))}
   
    
        {/* Gif item */}
    </>
  )
}
