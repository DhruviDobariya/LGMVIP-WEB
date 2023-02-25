let box = document.getElementById("box");
let API = async() => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="card">                     
        <div class="card-image">
            <img src="backg.jpg" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content"><br>
            <h3>${element.first_name} ${element.last_name}</h3>
            <h2>${element.email}</h2>
            <h3>User ID: ${element.id}</h3>
        </div>
    </div>`;
        })
        .join("");
    box.innerHTML = info;
};

let GetBtn = document.getElementById("get-btn");
GetBtn.addEventListener("click", () => {
    box.innerHTML = `<h1 class='load'>LOADING USERS DATA<span><i class="fa fa-spinner fa-spin" style="font-size:24px"></i></span></h1>`;
    setTimeout(() => {
        API();
    }, 1000);
});