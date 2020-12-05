let now = new Date();
let hh = now.getHours();
let mm = now.getMinutes();
let ss = now.getSeconds();

let today = hh + ":" + mm;

console.log(today);

document.getElementById("momentTime").value = today;

