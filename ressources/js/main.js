function switchRegion() {

  switch (flag.getAttribute("src")) {
    case english:
      flag.setAttribute("src", spanish);
      spanishText();
      break;
    case spanish:
      flag.setAttribute("src", french);
      frenchText();
      break;
    case french:
      flag.setAttribute("src", english);
      englishText();
  }

  function frenchText() {
    document.getElementById("h2").innerHTML = "Développeur Web";
    document.getElementById("quote").innerHTML = "La seule chose que l'on puisse décider est quoi faire du temps qui nous est imparti.";
    document.getElementById("1h3").innerHTML = "Expérience";
    document.getElementById("1h4").innerHTML = "PVT Australie & Canada - 2016 à 2018";
    document.getElementById("1p").innerHTML = "Expériences diverses.";
    document.getElementById("2h4").innerHTML = "ThyssenKrupp Ascenseurs et ACAF Lyon - 2010 à 2015";
    document.getElementById("2p").innerHTML = "Technicien de Maintenance Ascensoriste";
    document.getElementById("2h3").innerHTML = "Formation";
    document.getElementById("3h4").innerHTML = "Multiples auto-formations - 2018";
    document.getElementById("4h4").innerHTML = "Mention Complémentaire de Technicien de Maintenance Ascensoriste - 2010";
    document.getElementById("5h4").innerHTML = "Baccalauréat Professionnel Electrotechnique- 2009";
    document.getElementById("3p").innerHTML = "Mention Bien";
    document.getElementById("3h3").innerHTML = "Compétences";
    document.getElementById("4p").innerHTML = "P.O.O.";
    document.getElementById("5p").innerHTML = "Français (Langue maternelle) / Anglais (Niveau C1) / Espagnol (Niveau A2)";
    document.getElementById("4h3").innerHTML = "Intérêts";
    document.getElementById("6p").innerHTML = "Voyage";
    document.getElementById("7p").innerHTML = "Jeux de Rôle";
    document.getElementById("75p").innerHTML = "Science-fiction";
    document.getElementById("8p").innerHTML = "Nouvelles Technologies";
    document.getElementById("9p").innerHTML = "Randonnée";
    document.getElementById("5h3").innerHTML = "Vous aimez ce que vous voyez ? Contactez-moi !";
    document.getElementById("1s").innerHTML = "Téléphone";
  };

  function englishText() {
    document.getElementById("h2").innerHTML = "Web Developer";
    document.getElementById("quote").innerHTML = "All we have to decide is what to do with the time that is given to us.";
    document.getElementById("1h3").innerHTML = "Experience";
    document.getElementById("1h4").innerHTML = "WHV Australia & Canada - 2016 to 2018";
    document.getElementById("1p").innerHTML = "Various experiences";
    document.getElementById("2h4").innerHTML = "ThyssenKrupp Lifts and ACAF Lyon - 2010 to 2015";
    document.getElementById("2p").innerHTML = "Lift Maintenance Technician";
    document.getElementById("2h3").innerHTML = "Studies";
    document.getElementById("3h4").innerHTML = "Multiples self-trainings - 2018";
    document.getElementById("4h4").innerHTML = "Complementary Title of Lift Maintenance Technician - 2010";
    document.getElementById("5h4").innerHTML = "Professional Electrotechnic Bachelor - 2009";
    document.getElementById("3p").innerHTML = "With Honors";
    document.getElementById("3h3").innerHTML = "Skills";
    document.getElementById("4p").innerHTML = "O.O.P.";
    document.getElementById("5p").innerHTML = "French (Mother's tongue) / English (Level C1) / Spanish (Level A2)";
    document.getElementById("4h3").innerHTML = "Interests";
    document.getElementById("6p").innerHTML = "Travel";
    document.getElementById("7p").innerHTML = "Role-Playing Games";
    document.getElementById("8p").innerHTML = "New Technologies";
    document.getElementById("9p").innerHTML = "Trekking";
    document.getElementById("5h3").innerHTML = "Love what you see ? Give me a call !";
    document.getElementById("1s").innerHTML = "Phone";
  };

  function spanishText() {
    document.getElementById("h2").innerHTML = "Desarrollador Web";
    document.getElementById("quote").innerHTML = "Lo único que podemos decidir es qué hacer con tiempo se nos ha establecido.";
    document.getElementById("1h3").innerHTML = "Experiéncia";
    document.getElementById("1h4").innerHTML = "WHV Australia & Canada - 2016 a 2018";
    document.getElementById("1p").innerHTML = "Experiencias diversas";
    document.getElementById("2h4").innerHTML = "ThyssenKrupp Elevadores y ACAF Lyon - 2010 a 2015";
    document.getElementById("2p").innerHTML = "Técnico de Mantenimiento Ascensorista";
    document.getElementById("2h3").innerHTML = "Formación";
    document.getElementById("3h4").innerHTML = "Múltiples auto-formaciones - 2018";
    document.getElementById("4h4").innerHTML = "Titulo Complementario de Técnico de Mantenimiento Ascensorista - 2010";
    document.getElementById("5h4").innerHTML = "Bachillerato Profesional Electrotécnico - 2009";
    document.getElementById("3p").innerHTML = "Mención Bien";
    document.getElementById("3h3").innerHTML = "Competencia";
    document.getElementById("4p").innerHTML = "P.O.O.";
    document.getElementById("5p").innerHTML = "Francés (Langua materna) / Ingles (Nivel C1) / Español (Nivel A2)";
    document.getElementById("4h3").innerHTML = "Interes";
    document.getElementById("6p").innerHTML = "Viaje";
    document.getElementById("7p").innerHTML = "Juegos de Rol";
    document.getElementById("75p").innerHTML = "Ciencia-Ficción";
    document.getElementById("8p").innerHTML = "Nuevas Tecnologías";
    document.getElementById("9p").innerHTML = "Senderismo";
    document.getElementById("5h3").innerHTML = "¿ Os gusta lo que veis ? Contacta me !";
    document.getElementById("1s").innerHTML = "Teléfono";
  };


};

const flag = document.getElementById("switchRegion");
const english = "ressources/img/united-kingdom.svg";
const french = "ressources/img/france.svg";
const spanish = "ressources/img/spain.svg";

document.getElementById('switchRegion').addEventListener('click', switchRegion);
