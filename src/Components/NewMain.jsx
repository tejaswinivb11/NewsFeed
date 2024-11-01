import { useState } from "react"
import { NavBar } from "./NavBar"
import Newsboard from "./Newsboard"
import 'bootstrap/dist/css/bootstrap.min.css';


function NewMain() {
  const [category,setCategory]= useState("general");
  return(
    <div style={{background:"gray"}}>
        <NavBar setCategory={setCategory}/>
        <Newsboard category={category}/>
    </div>
  )
}

export default NewMain
