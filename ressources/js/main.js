function switchRegion() {

  console.log("Variables established: " + flag.src + " " + english + " " + french);

  flag.src == english
  ? flag.setAttribute("src", french)
  : flag.setAttribute("src", english);

};

const flag = document.getElementById("switchRegion");
const english = "ressources/img/united-kingdom.svg";
const french = "ressources/img/france.svg";

document.getElementById('switchRegion').addEventListener('click', switchRegion);
