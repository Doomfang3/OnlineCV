function switchRegion() {

  switch (flag.getAttribute("src")) {
    case english:
      flag.setAttribute("src", spanish);
      break;
    case spanish:
      flag.setAttribute("src", french);
      break;
    case french:
      flag.setAttribute("src", english);
  }

};

const flag = document.getElementById("switchRegion");
const english = "ressources/img/united-kingdom.svg";
const french = "ressources/img/france.svg";
const spanish = "ressources/img/spain.svg";

document.getElementById('switchRegion').addEventListener('click', switchRegion);
