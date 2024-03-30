import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
export const AddedItems = ({newitem,setNewitem,handleSubmit}) => {
  const inpref=useRef();
 
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label>AddItems</label>
        <input
        ref={inpref}
        type='text'
        placeholder='Enter Item'
        value={newitem}
        required
        onChange={(e)=>setNewitem(e.target.value)}
        />
        <button type='submit' onClick={()=>inpref.current.focus()}><FaPlus/></button>
    </form>
  )
}
