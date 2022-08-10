import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddRecipe from './components/AddRecipe';
import ShowAllRecipe from './components/ShowAllRecipe';
import { RootState } from './redux/store';
import {setRemoveAllRecipe} from './redux/features/recipieSlice'
function App() {
  const dispatch = useDispatch()
  const [showAddRecipe,setShowAddRecipe] = useState(false)
  const [showAllRecipe,setShowAllRecipe] = useState(false)
  const allRecipies = useSelector((state : RootState) =>state.recpies.allRecipies)
  console.log(allRecipies)
  function toShowAddRecipe(){
    setShowAllRecipe(false)
    setShowAddRecipe(true)
  }
  function toShowAllRecipe(){
    setShowAddRecipe(false)
    setShowAllRecipe(true)
  }
  function toRemoveAllRecipe(){
    dispatch(setRemoveAllRecipe())
    setShowAddRecipe(true)
    setShowAllRecipe(false)

  }
  
  return (
   <div className='row' style={{width:"100%"}}>
    <div className='col-md-2' id="left-div">
    <h1 className='mt-3 mb-5' style={{color:"white"}}>Recipe Box</h1>
    <button onClick={toShowAddRecipe} style={{marginLeft:"40px" , width:"170px"}} className='btn btn-light mb-5'>Add  New Recipe</button>
    <button onClick={toShowAllRecipe} style={{marginLeft:"40px", width:"170px"}} className='btn btn-light mb-5'>Show All Recipes </button>
    <button onClick={toRemoveAllRecipe} style={{marginLeft:"40px", width:"170px"}} className='btn btn-light mb-5'>Remove All Recipes</button>
    <hr />
    <h4 className='mb-3' style={{color:"white"}}>List of Recipes</h4>
    {allRecipies &&  allRecipies.map((x:any)=> {
    return <button style={{marginLeft:"40px", width:"170px"}} className='btn btn-light mb-2'>{x.title}</button>
  })}
    </div>
    <div  className='col-md-10'>
    <div className='row'>
    <div className='col-md-12' id="right-div">
    </div>
    <div className='row'>
      {showAddRecipe ? <AddRecipe /> : null}
      {showAllRecipe ? <ShowAllRecipe /> : null}
    </div>
    </div>
    </div>
    <div>
    </div>
   </div>
  );
}

export default App;
