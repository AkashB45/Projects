import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import Main from './Main';
import { useState } from 'react';
import { AddedItems } from './AddedItems';
import { useEffect } from 'react'

import SearchItem from './SearchItem';  
import ApiReq from './ApiReq';
function App() {
  
  const [newitem,setNewitem] = useState('');
  const URI = "http://localhost:3500/users";
  const [users,setUsers] = useState([])
  const [search,setSearch]=useState('');
  const [iserror,setIserroor]=useState(null);
  const[istimeout,setIstimetout]=useState(true);
 useEffect(
   ()=>
      {
     const fetchItems = async()=>{
     try 
     {
      const res = await fetch(URI)
      console.log(res);
      const det = await res.json();
      console.log(det);
      setUsers(det);
     }
     catch(err)
     {
      setIserroor("Data Not found");
     }
     finally
     {
      setIstimetout(false);
     }
   }
   setTimeout(()=>{
      (async() => await fetchItems())()},1000)
},[])
 const handleCheck = async (id)=>
 {
      const listItems = users.map((user)=>
            user.id===id?{...user,checked:!user.checked}:user
      )
      setUsers(listItems);
      const myitem = listItems.filter((user)=>user.id===id)

      const updateopt={
        method:'PATCH',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({checked:myitem[0].checked})
      } 
      const bURL = `${URI}/${id}`;
      console.log(myitem);
      const res = await ApiReq(bURL,updateopt)
      {res && setIserroor(res)}

 }
 const handleDelete = async(id)=>
 {
    const listItems = users.filter((user)=>user.id!==id)
    const deloptions={method:'DELETE'};
    const deluri = `${URI}/${id}`
    const res = await ApiReq(deluri,deloptions);
    {res && setIserroor(res)};
    setUsers(listItems);
 }
 const AddItem = async(newitem)=>{

    let itmid = users.length?users[users.length-1].id + 1 : 1;
    
    const itm = {id:itmid,checked:false,body:newitem};
    const listItems = [...users,itm];
    const postopt={
      method:'POST',
      headers:{
         'content-Type':'application/json'
      },
      body:JSON.stringify(itm)
    }
    console.log(JSON.stringify(itm));
    const res = await ApiReq(URI,postopt)
    {res && setIserroor(res)}
    setUsers(listItems);    
    console.log(users);

 }
 const handleSubmit = (event) =>
 {
    event.preventDefault();
    AddItem(newitem);
    setNewitem('');
    console.log("com");
 }
  return (
    <div className="App">
      <Header text="To-Do-List"/>
      <AddedItems newitem={newitem} setNewitem={setNewitem} handleSubmit={handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch}/>
     <main> 
      {iserror && <h1>{`Error: ${iserror}`}</h1>}
      {istimeout && <h2>Loading...</h2>}
      {!iserror && !istimeout && <Main users={users.filter((user)=>(user.body.toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>}
     </main>
      <Footer length={users.length}/>
    </div>
  );
}

export default App;
