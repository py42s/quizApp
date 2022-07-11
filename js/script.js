let forme = document.querySelector(".forme");
let myName = document.querySelector(".name");
let myEmail = document.querySelector(".email");
let myError = document.querySelector("#erreur");
let myError2 = document.querySelector("#erreur2");
let identite = document.querySelector("#identite");
let emailsid = document.querySelector("#emailsid");

forme.addEventListener("submit", function (event) {
  event.preventDefault();
  let nom = myName.value;
  let email = myEmail.value;
  identite.innerText = nom;
  emailsid.innerText = email;
  if (myName.value.trim() != "" && myEmail.value.trim() != "") {
    document.querySelector(".pageAccueil").classList.add("displayerN");
    document.querySelector(".pageQuest").classList.add("displayer");
  }
  if (myName.value.trim() == "") {
    myError.innerHTML =
      "N'oubliez de renseigner votre nom avant de commencer le Quiz";

    myError.style.color = "red";
    myName.style.border = "1px solid red";
  }
  if (myEmail.value.trim() == "") {
    myError2.innerHTML =
      "N'oubliez de renseigner votre email avant de commencer le Quiz";
    myError2.style.color = "red";
    myEmail.style.border = "1px solid red";
  }
});

forme.addEventListener("input", function (f) {
  if (myName.value.trim() != "") {
    myError.innerHTML = "N'oubliez de renseigner votre nom commencer le Quiz";
    myError.style.visibility = "hidden";
    myName.style.border = "1px solid green";
  }
  if (myEmail.value.trim() != "") {
    myError2.innerHTML =
      "N'oublier de renseigner votre email commencer le Quiz";
    myError2.style.visibility = "hidden";
    myEmail.style.border = "1px solid green";
  }
});
accueil.addEventListener("click", () => {
  return (window.location.href = "../index.html");
});
