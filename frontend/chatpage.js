// ----------------- All the requirements here --------------------------------
const allConver = document.querySelector(".chat-list");


    let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2h1YmhhbSIsImlkIjoiNjQ1MjI0ZmY4NDFhM2MwMGQxODQzZGNmIiwicm9sZSI6ImFkbWluaXN0cmV0ZXIiLCJpYXQiOjE2ODMyOTcxMzEsImV4cCI6MTY4MzI5NzczMX0.3L2svPIgEJmpkMdVj_zJ_6zgj2Xvk-7lllELa-n5RzU`
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
    <div class="block active" >
        <div class="imgbx">
            <img src="https://tse1.mm.bing.net/th?id=OIP.KSbuJ35EtQHy2OX4BrJiZwHaLH&pid=Api&P=0" alt="" class="cover">

        </div>
        <div class="details">
            <div class="listhead">
                <h4>${data.frendName}</h4>
                <p class="time">10:50pm</p>
            </div>
            <div class="message">
                <p>hii how are you</p>
            </div>
        </div>
    </div>
    `
}
