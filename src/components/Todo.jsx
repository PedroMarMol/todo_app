import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ todo }) => {
  return (
    <li>
        <div>
            <input type="checkbox" />
            <p>{todo.text}</p>
        </div>
        <button><FaRegTrashAlt /></button>
    </li>
  )
}

export default Todo;