if (localStorage.getItem("name") != null) {
  let register = document.querySelector(".register");
  register.classList.add("ninja")
}

let nameregister = document.querySelector(".nameregister");
nameregister.addEventListener("click", function () {
  let name = document.querySelector("#name").value;
  localStorage.setItem("name", name);
  let register = document.querySelector(".register");
  register.classList.add("ninja")
});

let hname = document.querySelector(".hname");
hname.innerHTML = "Pokedex de " + localStorage.getItem("name");
