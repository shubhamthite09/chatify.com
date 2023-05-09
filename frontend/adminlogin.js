let button=document.getElementById("admin-btn");
let formEl = document.querySelector("form")
formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicled")
});

button.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("clicked")
    
})