const select = document.querySelectorAll(".select");
const button = document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("output");

fetch("https://api.frankfurter.app/currencies")
.then(res=>{
    return res.json();
})
.then(res=>{
    const currencyarr = Object.entries(res);
    for(i=0;i<currencyarr.length;i++)
    {
    select[0].innerHTML+=`<option value="${Object.entries(res)[i][0]}" id="opt1">${Object.entries(res)[i][0]}</option>`
    select[1].innerHTML+=`<option value="${Object.entries(res)[i][0]}" id="opt2">${Object.entries(res)[i][0]}</option>`
    }
})
button.addEventListener("click",(event)=>{
    const cr1 = select[0].value;
    const cr2 = select[1].value;
    const inval = input.value;
    const otval = output.value;
    console.log(cr1);
    console.log(cr2);
    if(cr1===cr2)
    {
        alert("Select Different countries");
    }
    else if(inval==='')
    {
        alert("Please Enter Some value");
    }
    else
    {
        const host = 'api.frankfurter.app';
      fetch(`https://${host}/latest?amount=${inval}&from=${cr1}&to=${cr2}`)
     .then(resp => resp.json())
     .then((data) => {
     const res = Object.entries(data.rates)[0][1];
     output.value=res;
     //event.preventDefault();
  });

    }
    
})
