import React, { useState, useEffect } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import Todo from "./components/Todo"
import { db } from './firebase'
import { query, collection, onSnapshot, updateDoc, doc } from 'firebase/firestore'

function App() {
  const [todos, setTodos] = useState([]);

  // create Todo
  const addTodo = async (event) => {
    event.preventDefault(event)
  } 

  // read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((item) => {
        todosArr.push({...item.data(), id: item.id})
      });
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  // update todo from firebase
  const toggleStatus = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      status: !todo.status
    })
  }

  // delete todo

  return (
    <div>
      <div>
        <h3>Todo App</h3>
        <form onSubmit={addTodo}>
          <input type="text" placeholder="Add Todo" />
          <button><AiOutlinePlusCircle size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleStatus={toggleStatus} />
          ))}
        </ul>
        <p>You have x-number todos</p>
      </div>
    </div>
  );
}

export default App;
