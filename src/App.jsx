import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import NewMain from "./Components/NewMain";


function App() {
  return(
    <>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/NewsBoard" element={<NewMain/>}/>
    
      </Routes>
    </>
  )
}

export default App
