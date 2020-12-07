let mockup = document.getElementById("preview");
let canva = document.getElementById("canva__design");

function resizeCanva(value) {
  if (value == "picture_small") {
    mockup.src = "../src/img/design/mockup_small.png";
    canva.classList.add("canvas__small");
    canva.classList.remove("canvas");
  }
  if (value == "picture_medium") {
    mockup.src = "../src/img/design/mockup.png";
    canva.classList.remove("canvas__small");
    canva.classList.add("canvas");
  }
}
