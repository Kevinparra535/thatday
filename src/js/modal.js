let usuario = document.getElementById("uname");
let email = document.getElementById("email");
let info = document.getElementById("info");
const modal = document.getElementById("myModal");

class NewDesign {
  constructor() {
    this.usuario = usuario;
    this.email = email;
    this.info = info;
  }
  addDesign() {
    document.title = `Diseño de ${this.usuario.value}`;
    console.log(this.usuario.value);
    console.log(this.email.value);
    console.log(this.info.value);
    modal.style.display = "none";
  }
}

let addUser = new NewDesign();

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = setTimeout(() => {
  modal.style.display = "block";
}, 1000);
