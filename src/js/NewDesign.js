const modal = document.getElementById("myModal");

class NewDesign {
  constructor(usuario, email, info) {
    this.usuario = usuario;
    this.email = email;
    this.info = info;
    this.initServices();
  }

  addDesign() {
    document.title = `Diseño de ${this.usuario.value}`;
    modal.style.display = "none";
    const dataUser = {
      autor: this.usuario.value,
      email: this.email.value,
      info: this.info.value,
    };
    console.log(dataUser);

    const dataUserJSON = JSON.stringify(dataUser);
    localStorage.setItem("UserData", dataUserJSON);
  }

  initServices() {
    const userData = JSON.parse(localStorage.getItem("UserData"));
    console.log(userData);
    if (!userData) {
      this.showModal();
      document.title = `Your Project`
    } else {
      this.hideModal();
    }
  }

  hideModal() {
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  showModal() {
    setTimeout(() => {
      modal.style.display = "block";
    }, 500);
  }
}

export default NewDesign;
