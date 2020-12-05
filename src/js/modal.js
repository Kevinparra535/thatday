const modal = document.getElementById("myModal");

function login() {
  document.title = `Diseño de ${document.getElementById("uname").value}`;
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = setTimeout(() => {
  modal.style.display = "block";
}, 1000);
