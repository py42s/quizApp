let forme = $(".forme");
let myName = $(".name");
let myEmail = $(".email");
let myError = $("#erreur");
let myError2 = $("#erreur2");
let identite = $("#identite");
let emailsid = $("#emailsid");

forme.submit(function (event) {
  event.preventDefault();
  let nom = myName.val();
  let email = myEmail.val();
  identite.text(nom);
  emailsid.text(email);
  if (myName.val().trim() != "" && myEmail.val().trim() != "") {
    document.querySelector(".pageAccueil").classList.add("displayerN");
    document.querySelector(".pageQuest").classList.add("displayer");
  }
  if (myName.val().trim() == "") {
    myError.text(
      "N'oubliez de renseigner votre nom avant de commencer le Quiz"
    );
    myError.css("color", "red");
    myName.css("border", "1px solid red");
  }
  if (myEmail.val().trim() == "") {
    myError2.text(
      "N'oubliez de renseigner votre email avant de commencer le Quiz"
    );
    myError2.css("color", "red");
    myEmail.css("border", "1px solid red");
  }
});

forme.keyup(function (f) {
  if (myName.val().trim() != "") {
    myError.text("N'oubliez de renseigner votre nom commencer le Quiz");
    myError.css("visibility", "hidden");
    myName.css("border", "1px solid green");
  }
  if (myEmail.val().trim() != "") {
    myError2.text("N'oublier de renseigner votre email commencer le Quiz");
    myError2.css("visibility", "hidden");
    myEmail.css("border", "1px solid green");
  }
});
accueil.addEventListener("click", () => {
  sessionStorage.clear();
  return (window.location.href = "../index.html");
});
