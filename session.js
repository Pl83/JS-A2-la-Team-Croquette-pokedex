if (localStorage.getItem("name") != null) {
  let register = document.querySelector(".register");
  register.classList.add("ninja")
}
let hname = document.querySelector(".hname");
hname.innerHTML = "Pokedex de " + localStorage.getItem("name");


let nameregister = document.querySelector(".nameregister");
nameregister.addEventListener("click", function () {
  let name = document.querySelector("#name").value;
  localStorage.setItem("name", name);
  hname.innerHTML = "Pokedex de " + localStorage.getItem("name");
  let register = document.querySelector(".register");
  register.classList.add("ninja")
  let insertname = document.querySelector(".insertname");
  insertname.innerHTML = "D'accord " + name + " écoute moi bien";
  let tuto = document.querySelector(".tuto");
  tuto.classList.remove("ninja")
  let go = document.querySelector(".go");
  go.addEventListener("click", function () {
    tuto.classList.add("ninja")
  })
});

