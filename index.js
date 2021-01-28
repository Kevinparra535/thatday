import NewDesign from "./src/js/NewDesign.js";

let usuario = document.getElementById("uname");
let email = document.getElementById("email");
let info = document.getElementById("info");

const addNewDesign = new NewDesign(usuario, email, info);
const userRegisterDesign = document.querySelector(".userRegisterDesign");

userRegisterDesign.addEventListener("click", saveNewDesign)


function saveNewDesign() {
  // console.log("click");
  addNewDesign.addDesign();
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
