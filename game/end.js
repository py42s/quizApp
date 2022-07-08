const mostrecentScore = localStorage.getItem("mostrecentScore");
const finalscore = document.getElementById("score");
const identite = document.getElementById("identite");
const monNOm = localStorage.getItem("monNOm");
const emailsid = document.getElementById("emailsid");
const monEmail = localStorage.getItem("monEmail");
var images = document.getElementById("image");
let accueil = document.getElementById("accueil");

finalscore.innerText = mostrecentScore + "/15";
identite.innerText = monNOm;
emailsid.innerText = monEmail;
if (mostrecentScore >= 8) {
  images.classList.add("success");
} else {
  image.classList.add("failed");
}

accueil.addEventListener("click", () => {
  return (window.location.href = "../index.html");
  // localStorage.clear();
});
