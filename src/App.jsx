import List from "./Pages/List"
import Details from "./Pages/Details"
import './App.css'
import {BrowserRouter , Routes , Route , NavLink} from 'react-router-dom'
function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <nav className="nav-container">
          <NavLink to="/"></NavLink> &nbsp;
          <NavLink to="/Details"></NavLink>
          </nav>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/Details/:movieId" element={<Details/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
