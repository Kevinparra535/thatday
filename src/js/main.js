function subTitle() {
  let location = document.getElementById("location").value || "Cali, Colombia";
  let year = document.getElementById("year").value || "2020";
  let month = document.getElementById("month").value || "2020";
  let day = document.getElementById("day").value || "2020";
  let momentTime = document.getElementById("momentTime").value || "12:00 am";
  let subtitle = `Debajo de las estrellas en ${location}. Un ${day} de ${month} del ${year}, a las ${momentTime}`;
  document.getElementById("subtitle").value = `${subtitle}`;
}

// Change Tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  subTitle();
}

// Cambio de fondo

const cubes = document.getElementsByClassName("cube");
for (let i = 0; i <= cubes.length; i++) {
  cubes[i].addEventListener("click", () => {
    const canvaBackground = document.getElementById("canva__design");
    const styleCube1 = "../src/img/cubes/cube1.webp",
      styleCube2 = "../src/img/cubes/cube2.webp",
      styleCube3 = "../src/img/cubes/cube3.webp",
      styleCube4 = "../src/img/cubes/cube4.webp",
      styleCube5 = "../src/img/cubes/cube5.webp",
      styleCube6 = "../src/img/cubes/cube6.webp",
      styleCube7 = "../src/img/cubes/cube7.webp",
      styleCube8 = "../src/img/cubes/cube8.webp";
    const background = [
      styleCube1,
      styleCube2,
      styleCube3,
      styleCube4,
      styleCube5,
      styleCube6,
      styleCube7,
      styleCube8,
    ];
    canvaBackground.style.background = `url('${background[i]}')`;
    canvaBackground.style.backgroundRepeat = "no-repeat";
    canvaBackground.style.backgroundSize = "cover";
    canvaBackground.style.backgroundPosition = "center";

    console.log(i, background[i]);
  });
  console.log(i);
}
