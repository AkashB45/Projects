import React from 'react'
import { FaTrash } from 'react-icons/fa';
const Main = ({users,handleCheck,handleDelete}) => {
   // let [count,setCount]= useState(0);
   // const [name,setName] = useState("Agilan");
   // const decreaseCount = ()=>{
   //  setCount(--count)
   // }
   // const increaseCount = ()=>{
   //  setCount(++count)
   // }
   // const handleName = () =>{
   //    const myName = ["akash","adharsh","huzaif","abilash","dinesh"];
   //    const rand = Math.floor(Math.random()*5);
   //    setName(myName[rand]);
   // }
   
   
  return (
    
        <main>
         {users.length?
        (<ul >
         {
            users.map((user)=>
               <li className='item' key={user.id}>
                  <input type="checkbox" onChange={()=>handleCheck(user.id)} checked={user.checked}/> 
                  <label onClick={()=>handleCheck(user.id)} className='distxt'
                  style={user.checked===true?{textDecoration:'line-through'}:null}>{user.body}</label>
                  <FaTrash 
                  role="button" 
                  tabIndex="0"
                  onClick={()=>handleDelete(user.id)}
                  aria-label={`delete ${user.user}`}
                  />
                  
               </li>
               
            )
         }
        </ul>):<h1>List is Empty</h1>}
        

        {/* <button onClick={()=>decreaseCount()}>-</button>
        <span>{count}</span>
        <button onClick={()=>increaseCount()}>+</button>
        <br />
        <p >{name}</p>
        <br />
        <button type="button" onClick={handleName}> change Name</button> */}
        </main>
    

  )
}
export default Main;