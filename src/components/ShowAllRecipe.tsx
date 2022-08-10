import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipe } from "../interfaces/recipe.interface";
import { RootState } from "../redux/store";
import { updateRecipe } from "../redux/features/recipieSlice";

function ShowAllRecipe() {
    const dispatch = useDispatch()
    const allRecipies = useSelector((state: RootState) => state.recpies.allRecipies)
    const [recipes , setRecipes] = useState<recipe[]>([])
    const [showEdit , setShowEdit] = useState<boolean>(false)
    const [title , setTitle] = useState<string>()
    const [ingredients,setIngredients] = useState<string>()
    const [id , setId] = useState<number>()
function editRecipe(id:number , title:string , ingredients:string){
    console.log("edit recipe is calling",id)
    setId(id)
    setTitle(title)
    setIngredients(ingredients)
    setShowEdit(true)
}

const onTitleChange = (input:React.FormEvent<HTMLInputElement>) => {
    setTitle(input.currentTarget.value)
    console.log(title)
}
const onIngredientChange = (input:React.FormEvent<HTMLTextAreaElement>) => {
    setIngredients(input.currentTarget.value)
    console.log(ingredients)
}
function updateRecipeFunction(){
    dispatch(updateRecipe({id:id,title,ingredients}))
    setShowEdit(false)
}
    return (
        <div className="row">
    {!showEdit ? 
            allRecipies.map((x:recipe)=>
            <div key={x.id} className="card col-md-3 mb-3 mt-3" style={{marginRight:"20px",marginLeft:"15px"}}>
                <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    
                    <textarea disabled={true} style={{height : "130px"}} value={x.ingredients} ></textarea>
                    
                </div>
                    <button onClick={()=>editRecipe(x.id , x.title , x.ingredients)} className="btn btn-primary" style={{marginLeft:"183px",width:"100px"}}>Edit</button>
            </div>
            )
            : 
            <div className="container mt-5" style={{width:"800px",marginLeft:"30px"}}>
            <div className="mb-3">
      <h2>Update Recipe</h2>
      <input type="text" value={title} onChange={onTitleChange} className="form-control" id="exampleFormControlInput1" placeholder="Titile of the Recipe" /> 
    </div>
    <div className="mb-3">
      <textarea value={ingredients} onChange={onIngredientChange} className="form-control" id="exampleFormControlTextarea1"rows={6} placeholder="Ingredients"/>
    </div>
    <button onClick={updateRecipeFunction} className="btn btn-primary" style={{float:"right",marginLeft:10}}>Update Recipe</button>
    <button onClick={()=>setShowEdit(false)} className="btn btn-danger" style={{float:"right"}}>Cancel Recipe</button>
        </div>
            }
        </div>
    )
}

export default ShowAllRecipe