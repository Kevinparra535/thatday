let canvaSubtitle = document.getElementById("canvas__subtitle");
let canvaTitle = document.getElementById("canvas__title");
let title, year, month, day, momentTime, subtitle, canvaMap;

function canvasTexts() {
  title =
    document.getElementById("title").value ||
    "Somos estrellas nadando en el mar de lo infinito";

  let location =
    document.getElementById("location__input").value || "Bogotá, Colombia";

  year = document.getElementById("year").value || "2020";

  month = document.getElementById("month").value || "2020";

  day = document.getElementById("day").value || "2020";

  momentTime = document.getElementById("momentTime").value || "00:00";

  subtitle = `Debajo de las estrellas en ${location}. Un ${day} de ${month} del ${year}, a las ${momentTime}`;

  document.getElementById("subtitle").value = `${subtitle}`;

  canvaSubtitle.innerHTML = `<p>${subtitle}</p>`;
  canvaTitle.innerHTML = `${title}`;
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
  canvasTexts();
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
    canvaBackground.style.backgroundPosition = "top";
  });
}

// Link spotify

function getSpotifyUrl() {
  const codeSpotify = document.getElementById("codeSpotify");
  let urlSpotify = document.getElementById("urlSpotify");

  if (urlSpotify.value !== "") {
    codeSpotify.style.display = "inline";
  } else {
    codeSpotify.style.display = "none";
  }
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
  });
  const card = document.getElementById("location__container");
  const input = document.getElementById("location__input");

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);
  autocomplete.setFields(["address_components", "geometry", "icon", "name"]);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow__content");
  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);
    const place = autocomplete.getPlace();
    canvaMap = document.getElementById("canvas__map");
    let placeI = place.geometry.viewport.Ra.i;
    let placeJ = place.geometry.viewport.Ra.j;
    let deg = placeI + placeJ;
    canvaMap.style.transform = `rotate(${deg}deg)`;

    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    let address = "";

    if (place.address_components) {
      address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          "",
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          "",
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          "",
      ].join(" ");
    }

    infowindowContent.children["place-icon"].src = place.icon;
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent = address;
    infowindow.open(map, marker);
  });
}


canvasTexts();
