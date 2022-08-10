import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipe } from "../interfaces/recipe.interface";
import { addRecipe } from "../redux/features/recipieSlice";
import { getUniqueId } from "./utiliti";
function AddRecipe() {
    console.log(getUniqueId())
    const [titleInput , setTitleInput] = useState<string>()
    const [ingredientsInput,setIngredientsInput] = useState<string>()
    const dispatch = useDispatch()

    function submitRecipe(){
        if(!titleInput) return
        if(!ingredientsInput) return
        // allRecipies.push({
        //     id:1,
        //     title:titleInput,
        //     ingredients:ingredientsInput
        // })
    // console.log(allRecipies)
    dispatch(addRecipe({id:getUniqueId(),title:titleInput,ingredients:ingredientsInput}))
    setTitleInput('')
    setIngredientsInput('')
    }
    
    const onTitleChange = (input:React.FormEvent<HTMLInputElement>) =>{
        setTitleInput(input.currentTarget.value)
        console.log(titleInput)
    }
    const onIngredientsChange = (input:React.FormEvent<HTMLTextAreaElement>) => {
        setIngredientsInput(input.currentTarget.value)
        console.log(ingredientsInput)
    }
    
    return (
    <div className="container mt-5" style={{width:"800px",marginLeft:"30px"}}>
        <div className="mb-3">
  <h2>Add a New Recipe</h2>
  <input value={titleInput} onChange={onTitleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Titile of the Recipe" /> 
</div>
<div className="mb-3">
  <textarea value={ingredientsInput} onChange={onIngredientsChange} className="form-control" id="exampleFormControlTextarea1"rows={6} placeholder="Ingredients"/>
</div>
<button className="btn btn-primary" style={{float:"right",marginLeft:10}} onClick={submitRecipe}>Submit Recipe</button>
<button className="btn btn-danger" style={{float:"right"}}>Cancel Recipe</button>
    </div>
)
}
export default AddRecipe