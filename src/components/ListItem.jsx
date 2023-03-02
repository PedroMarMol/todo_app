import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liCompleted: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textCompleted: `ml-2 cursor-pointer line-through`,
}

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