const btn = document.getElementById("add");
const text = document.getElementById("txt");
const items = document.getElementById("items");
let itemsArr = [];
localStorage.setItem("AddedItems",JSON.stringify(itemsArr))
window.onload =  ()=>{
    
    console.log("loaded");
    const todo = JSON.parse(localStorage.getItem("AddedItems"));
    console.log(todo);
}

     
const addEvent = (event)=>{ 
    
    btn.addEventListener("click",()=>{
    let itm = "*  "+text.value;
    
    
    text.value='';
    addelement(itm);
    })}
let addelement = (itm)=>{
    if(itm!='')
    {
        let p = document.createElement('p');
        p.innerText = itm;
        items.appendChild(p);      
        itemsArr.push(itm);
        localStorage.setItem("AddedItems",JSON.stringify(itemsArr))        
        p.addEventListener("click",()=>{
            strikeOut(p);
        })
        p.addEventListener("dblclick",()=>{
            items.removeChild(p);
            remove(itm);

        })
     }
}
let i=0;
let strikeOut = (p)=>{
    if(i===0)
    {
    p.style.textDecoration="line-through";
    i=1;
    }
    else
    {
        p.style.textDecoration="none";
        i=0;  
    }
}
let remove =(itm)=>{
    const index = itemsArr.indexOf(itm);
    itemsArr.splice(index,1);
    localStorage.setItem("AddedItems",JSON.stringify(itemsArr))
}
addEvent();

