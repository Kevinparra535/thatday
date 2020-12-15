const modal = document.getElementById("myModal");

function NewDesign(usuario, email, info) {
  this.usuario = usuario;
  this.email = email;
  this.info = info;
  // this.showModal();
}

NewDesign.prototype.addDesign = function () {
  document.title = `Diseño de ${this.usuario.value}`;
  console.log(this.usuario.value);
  console.log(this.email.value);
  console.log(this.info.value);
  modal.style.display = "none";
};

NewDesign.prototype.showModal = () => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 500);
};



export default NewDesign;
