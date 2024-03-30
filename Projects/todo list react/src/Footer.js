import React from 'react'

const handleItems = (length)=>{

  if(length===0)
  return "No items";
else if(length===1)
 return "1 item";
else
return (length + " items");
}
const Footer = ({length}) => {
  return (
    <footer><h1>{handleItems(length)} 
    </h1></footer>
  )
}

export default Footer