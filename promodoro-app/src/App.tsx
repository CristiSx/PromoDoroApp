
import {RouterProvider} from "react-router-dom";
import {Allroutes} from "./routes/Allroutes";
import './App.css'

function App() {



  return (
    <>
      <RouterProvider router={Allroutes} />
    </>
  )
}

export default App
