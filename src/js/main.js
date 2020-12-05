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
