import { createSlice } from '@reduxjs/toolkit'
import { recipe,RecipeArrayModel } from '../../interfaces/recipe.interface';

const initialState:RecipeArrayModel = {
    allRecipies:[],
    //particular_recipe:{}
}




const recipieSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state:any,action)=> {
        state.allRecipies.push(action.payload)
      },
      setRemoveAllRecipe:(state)=>{
        state.allRecipies=[]
      },
     updateRecipe:(state,action) =>{
      // // state.allRecipies.filter(x=>x.id !== action.payload.id)
      // // console.log(newArr)
      // // state.allRecipies.push()
      // //  if(state.allRecipies.filter(x=>x.id === action.payload.id))
      //   state.allRecipies.push(action.payload.id ?) 
    state.allRecipies.map(x=>{
      if(x.id === action.payload.id){
      x.title = action.payload.title
      x.ingredients = action.payload.ingredients
    }})
    }
  }
});

export const {addRecipe , setRemoveAllRecipe,updateRecipe} = recipieSlice.actions

export default recipieSlice.reducer