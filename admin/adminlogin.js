let userid=document.getElementById("admin-userid");
let button=document.getElementById("admin-btn");
let password=document.getElementById("admin-password");
let formEl = document.querySelector("form")
const redis = require("ioredis")
const Redis = redis()
formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicled")
    // if(userid.value=="buddyxy"){
    //     if(password.value=="buddyxy"){
    //        alert("Welcome Back Admin !");
    //      Redis.set("admin", "admin")
    //        window.location.href="adminpage.html";
    //     }else{
    //         alert("Wrong Password. Re-Enter your Password !");
    //     }
    // }else{
    //     alert("You are not an Admin !");
    // }
});

   
      
button.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("clicked")
    
})