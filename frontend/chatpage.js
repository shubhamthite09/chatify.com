// ----------------- All the requirements here --------------------------------
const allConver = document.querySelector(".chat-list");
    let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2h1YmhhbSIsImlkIjoiNjQ1MjI0ZmY4NDFhM2MwMGQxODQzZGNmIiwicm9sZSI6ImFkbWluaXN0cmV0ZXIiLCJpYXQiOjE2ODMzODQxOTIsImV4cCI6MTY4MzM4NDc5Mn0.oj9xgHkGAWl9Rvyzn0m1CWF0tWO4SelkbdbDJyWnVsE`
    fetch(`http://localhost:7890/chat/getCon`,{
        method:'GET',
        headers:{'Content-type':'Application/json',"authorization":`bearer ${token}`},
    }).then((res)=>res.json()).then((res)=>{
        console.log(res);
        render(res)
    }).catch((err)=>console.log(err))

function render(data){
    allConver.innerHTML="";
    let ar =  data.map((ele)=>{
        return componetn(ele)
    }).join("")
   allConver.innerHTML=ar;
}
function componetn(data){
    return`
    <div class="block active"  onClick="lodeMsg(${data.consId})">
        <div class="imgbx">
            <img src="https://tse1.mm.bing.net/th?id=OIP.KSbuJ35EtQHy2OX4BrJiZwHaLH&pid=Api&P=0" alt="" class="cover">

        </div>
        <div class="details">
            <div class="listhead">
                <h4>${data.frendName}</h4>
                <p class="time">${data.lastTime}</p>
            </div>
            <div class="message">
                <p>${data.lastMsg}</p>
            </div>
        </div>
    </div>
    `
}

function lodeMsg(inp){
    console.log("yes",inp);
    //const socket = io("http://localhost:7890/", { transports: ["websocket"] })
    fetch(`http://localhost:7890/chat/getMsg`,{
        method:'POST',
        headers:{'Content-type':'Application/json',"authorization":`bearer ${token}`},
        body:JSON.stringify({consId:inp})
    }).then((res)=>res.json()).then((res)=>{
        console.log(res);
    }).catch((err)=>console.log(err))
}

