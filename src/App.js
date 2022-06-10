
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Contacts from "../src/Components/Contacts";
import Projects from "../src/Components/Projects";
import Skills from "../src/Components/Skills";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>

  
    // <>
    // <input type="text"/>
    // <button>add toDo</button>
    // <button>Clear completed</button>
    // <button>Delete</button>
    // <button>Filter</button>
    // <button>Clear All</button>
    // <TodoList/>
    // </>
  )
}

export default App;
