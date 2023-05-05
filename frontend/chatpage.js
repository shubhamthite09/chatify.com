// ----------------- All the requirements here --------------------------------
const allConver = document.querySelector(".chat-list");


    let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2h1YmhhbSIsImlkIjoiNjQ1MjI0ZmY4NDFhM2MwMGQxODQzZGNmIiwicm9sZSI6ImFkbWluaXN0cmV0ZXIiLCJpYXQiOjE2ODMyODg4NzksImV4cCI6MTY4MzI4OTQ3OX0.glgTPoZ3ZkyLlVKKs1Aso2GnxLhXqGRnTwU1l1E3fYc`
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
