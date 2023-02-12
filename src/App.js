import React, { useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import Todo from "./components/Todo"

function App() {
  const [todos, setTodos] = useState(['Use reusable code', 'Apply SOLID Principles']) 

  return (
    <div>
      <div>
        <h3>Todo App</h3>
        <form>
          <input type="text" placeholder="Add Todo" />
          <button><AiOutlinePlusCircle size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p>You have x-number todos</p>
      </div>
    </div>
  );
}

export default App;
