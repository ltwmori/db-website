
import { Route, Routes } from "react-router-dom";
import { ROUTES } from './data/Links';


const App = () => {


  return (
    <div>
    {/* <Main/> */}
    <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Routes>
    </div>
  )
}

export default App
