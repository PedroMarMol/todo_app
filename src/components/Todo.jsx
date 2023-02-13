import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liCompleted: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textCompleted: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
}

const Todo = ({ todo, toggleStatus, deleteTodo }) => {
  return (
    <li className={todo.status ? style.liCompleted : style.li}>
        <div className={style.row}>
            <input onChange={() => toggleStatus(todo)} type="checkbox" checked={todo.status ? 'checked' : ''} />
            <p onClick={() => toggleStatus(todo)} className={todo.status ? style.textCompleted : style.text}>
              {todo.text}
            </p>
        </div>
        <button onClick={() => deleteTodo(todo.id)}><FaRegTrashAlt /></button>
    </li>
  )
}

export default Todo;