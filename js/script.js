let forme = $(".forme");
let myName = $(".name");
let myEmail = $(".email");
let myError = $("#erreur");
let myError2 = $("#erreur2");

forme.submit(function (event) {
  let names = myName.val();
  let emails = myEmail.val();
  sessionStorage.setItem("monNOm", names);
  sessionStorage.setItem("monEmail", emails);
  if (myName.val().trim() == "") {
    myError.text(
      "N'oubliez de renseigner votre nom avant de commencer le Quiz"
    );
    myError.css("color", "red");
    myName.css("border", "1px solid red");
    event.preventDefault();
  }
  if (myEmail.val().trim() == "") {
    myError2.text(
      "N'oubliez de renseigner votre email avant de commencer le Quiz"
    );
    myError2.css("color", "red");
    myEmail.css("border", "1px solid red");
    event.preventDefault();
  }
});
forme.keyup(function (f) {
  if (myName.val().trim() != "") {
    myError.text("N'oubliez de renseigner votre nom commencer le Quiz");
    myError.css("visibility", "hidden");
    myName.css("border", "1px solid green");
  }
});
forme.keyup(function (f) {
  if (myEmail.val().trim() != "") {
    myError2.text("N'oublier de renseigner votre email commencer le Quiz");
    myError2.css("visibility", "hidden");
    myEmail.css("border", "1px solid green");
  }
});
