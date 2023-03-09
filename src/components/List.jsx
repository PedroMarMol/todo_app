import React, {useState, useEffect} from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { db } from '../firebase'
import { 
  query, 
  collection, 
  onSnapshot, 
  doc, 
  updateDoc, 
  addDoc, 
  deleteDoc, } from 'firebase/firestore'
import ListItem from "./ListItem"
import { useUserAuth } from "../context/AuthContext"
import { ImSpinner2 } from "react-icons/im"

const List = (props) => {
  const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-[#2F80ED] text-slate-100`,
  count: `text-center p-2`,
  }

  let defaultStatus = false;
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const { user, fetchingSession } = useUserAuth()
  let userId = user.uid

  // const [user, setUser] = useState('')
  // async function fetchUser() {
  //   const { user } = await useUserAuth()
  // }
  
  async function fetchData() {
    // if (fetchingSession) {
    //   return <ImSpinner2 size={30}/>
    // } else {
      const q = await query(collection(db, userId))
      onSnapshot(q, (querySnapshot) => {
        let itemsArr = []
        querySnapshot.forEach((item) => {
          itemsArr.push({...item.data(), id: item.id})
        });
        setItems(itemsArr)
      })
    // }
  }
  
  useEffect(() => {
    if (fetchingSession) {
        return <ImSpinner2 size={30}/>
    } else fetchData()
  }, [])
      
  // Add Item to Firebase
  async function addItem(event) {
    event.preventDefault(event)
    if(newItem === '') { // change error handler
      alert('Enter valid string')
      return
    }
    await addDoc(collection(db, userId), {
      text: newItem,
      status: defaultStatus
    })
    setNewItem('')
  };

  // Delete Item from Firebase
  async function deleteItem(id) {
    await deleteDoc(doc(db, userId, id))
  }



  // Update item from Firebase
  async function toggleStatus(item) {
    await updateDoc(doc(db, userId, item.id), {
      status: !item.status
    })
  }


  return (
    <div>
      <h3 className={style.heading}>
        To-Dos
      </h3>
      <form 
        onSubmit={addItem} 
        className={style.form}
      >
        <input
          value={newItem} 
          className={style.input}
          onChange={(event) => setNewItem(event.target.value)} 
          type="text" 
          placeholder="Add To-Do" 
        />
        <button className={style.button}>
          <AiOutlinePlusCircle size={30}/>
        </button>
      </form>
      <ul>
        {items.map((item, index) => (
          <ListItem 
            key={index} 
            item={item} 
            toggleStatus={toggleStatus} 
            deleteItem={deleteItem} 
          />
        ))}
      </ul>
      {items.length < 1 ? 
        null : 
        <p className={style.count}>
          {`You have ${items.length} To-Dos`}
        </p>
      }
    </div>
  )
}

export default List