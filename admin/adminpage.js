
let userCard=document.getElementById('user-card')
let totalUser=document.getElementById('user-count');

function searchUsers() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("user-card");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
document.getElementById("search-input").addEventListener("input", searchUsers);




let togglebtn = document.querySelectorAll(".checkbox");
let body = document.querySelector("body");
let dash = document.querySelector(".tabs")
let usercolor = document.querySelector(".userCount")
let a = usercolor.textContent

togglebtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    body.classList.toggle("dark");
    dash.classList.toggle("dark")
    usercolor.classList.toggle("color")
  });
});




fetch('http://localhost:7890/chat')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    // Userdata=needData.data;
    console.log(data)
    displayUsers(data);

})
.catch((err)=>{
    console.log({'fetch-msg':err.message});
})

fetchData();

function Count(count){
    totalUser.innerText=count
}

// getting all users

function displayUsers(data) {
    userCard.innerHTML="";
    data.forEach((element)=>{
        let card=document.createElement('div');
        card.className="block";
        let imgbx=document.createElement('div');
        imgbx.className="imgbx";
        let image=document.createElement('img');
        image.setAttribute("src",element.picture);
        imgbx.append(image);
        let details=document.createElement('div');
        details.className="details"
        let listhead=document.createElement('div');
        listhead.className="listHead"
        let name=document.createElement("h4");
        name.innerText=element.name;
        listhead.append(name);
        details.append(listhead);
        let ban=document.createElement('div');
        ban.className="ban";
        let button=document.createElement("button");
        button.setAttribute("data-id", element._id);
        button.className="ban-user"
        button.innerText="Block User";
        ban.append(button);
        card.append(imgbx,details,ban);
        userCard.append(card);
        totalUser.innerText=data.length;
    })

    let block=document.querySelectorAll(".ban-user")

    block.forEach((element)=>{
        element.addEventListener("click",(e)=>{
            let id=e.target.getAttribute("data-id");
            fetch(`http://localhost:7890/chat/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>res.json())
            .then((data)=>window.location.href ="admipage.html")
            .catch((err)=>console.log(err))
            console.log(id)
        });
    })
}

