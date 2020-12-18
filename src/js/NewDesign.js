const modal = document.getElementById("myModal");

function NewDesign(usuario, email, info) {
  this.usuario = usuario;
  this.email = email;
  this.info = info;
  this.initServices();
}

NewDesign.prototype.addDesign = function () {
  document.title = `Diseño de ${this.usuario.value}`;
  modal.style.display = "none";
  const dataUser = {
    autor: this.usuario.value,
    email: this.email.value,
    info: this.info.value,
  };

  const dataUserJSON = JSON.stringify(dataUser);
  localStorage.setItem("UserData", dataUserJSON);
};

NewDesign.prototype.initServices = () => {
  const userData = JSON.parse(localStorage.getItem("UserData"));
  console.log(userData);
  if (userData.email == "" || userData.autor == "") {
    document.title = `Your Project`;
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};

NewDesign.prototype.hideModal = () => {
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
};

NewDesign.prototype.showModal = () => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 500);
};

export default NewDesign;
