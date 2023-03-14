import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { style } from '../utils/styles'

const ListItem = ({ item, toggleStatus, deleteItem }) => {
  return (
    <li className={item.status ? style.liCompleted : style.li}>
        <div className={style.row}>
            <input 
              onChange={() => toggleStatus(item)} 
              type="checkbox" 
              checked={item.status ? 'checked' : ''}
            />
            <p 
              onClick={() => toggleStatus(item)} 
              className={item.status ? style.textCompleted : style.text}
            >
              {item.text}
            </p>
        </div>
        <button onClick={() => deleteItem(item.id)}>
          <FaRegTrashAlt />
        </button>
    </li>
  )
}

export default ListItem;