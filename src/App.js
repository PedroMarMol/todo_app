import React, { useState, useEffect } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import Todo from "./components/Todo"
import { db } from './firebase'
import { 
  query, 
  collection, 
  onSnapshot, 
  doc, 
  updateDoc, 
  addDoc, 
  deleteDoc, } from 'firebase/firestore'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
}

function App() {
  let defaultStatus = false;
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addTodo = async (event) => {
    event.preventDefault(event)
    if(newItem === '') { // change error handler
      alert('Enter valid string')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: newItem,
        status: defaultStatus
    })
    setNewItem('')
  };
  
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  // Read item from Firebase
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

  // Update item from Firebase
  const toggleStatus = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      status: !todo.status
    })
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>
          Todo App
        </h3>
        <form 
          onSubmit={addTodo} 
          className={style.form}
        >
          <input
            value={newItem} 
            className={style.input}
            onChange={(event) => setNewItem(event.target.value)} 
            type="text" 
            placeholder="Add Todo" 
          />
          <button className={style.button}>
            <AiOutlinePlusCircle size={30}/>
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo 
              key={index} 
              todo={todo} 
              toggleStatus={toggleStatus} 
              deleteTodo={deleteTodo} 
            />
          ))}
        </ul>
        {todos.length < 1 ? 
          null : 
          <p className={style.count}>
            {`You have ${todos.length} todos`}
          </p>
        }
      </div>
    </div>
  );
}

export default App;
