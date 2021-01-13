let mockup = document.getElementById("preview");
let canva = document.getElementById("canva__design");

function resizeCanva(value) {
  if (value == "picture_small") {
    $("#preview").attr("src", "../src/img/design/mockup_small.png");
    $("#canva__design").addClass("canvas_small");
    $("#canva__design").removeClass("canvas");
  }
  if (value == "picture_medium") {
    mockup.src = "../src/img/design/mockup.png";
    canva.classList.remove("canvas__small");
    canva.classList.add("canvas");
  }
}
