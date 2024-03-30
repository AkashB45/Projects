const btun = document.getElementById("btn");
btun.style.padding="0.8rem";
btun.style.backgroundColor="white";
btun.style.color="black";
btun.style.fontSize="20px";
btun.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
btun.style.borderRadius="10px";

const sec1 = document.querySelector("#sec");

btun.addEventListener("click",(event)=>{
    const rand = Math.floor(Math.random()*10);
    console.log(rand);
    if(btun.style.backgroundColor==="white")
    {
    btun.style.backgroundColor="black";
    btun.style.color="white";
    }else
    {
        btun.style.backgroundColor="white";
        btun.style.color="black"; 
    }
    const clrArr = ["red","orange","yellow","green","violet","purple","pink","blueviolet","bisque","brown"];
    sec1.style.backgroundColor = clrArr[rand];
})