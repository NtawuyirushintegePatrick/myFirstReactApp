import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Contacts from "../src/Components/Contacts";
import Projects from "../src/Components/Projects";
import Skills from "../src/Components/Skills";
import Login from "../src/Components/Login";
import TodoApp from "../src/Components/todoApp";


function App() {
  return (
    <>
    <Login/>
    
    
      
    

    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Login" element={<Login />} />
          <Route path="todoApp" element={<TodoApp />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>
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
