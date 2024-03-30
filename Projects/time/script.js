const time = document.querySelector("#time");
const timeUpdate = ()=>{
    const tDate = new Date();
    let hour = tDate.getHours();
    let mins = tDate.getMinutes();
    let secs = tDate.getSeconds();
    if(hour>12)
    {
        hour-=12;
    }
    if(hour<10)
    {
        hour = '0'+hour;
    }
    if(mins<10)
    {
        mins = '0'+mins;
    }
    if(secs<10)
    {
        secs = '0'+secs;
    }
    time.textContent=` ${hour} : ${mins} : ${secs} `;
}

setInterval(()=>{timeUpdate()},500);
