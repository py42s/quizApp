let question = document.querySelector("#question");
let choix = Array.from(document.querySelectorAll(".choix-text"));
let suivant = document.querySelector(".suivant");
let counter = document.querySelector("#questioncounter");
let elts = Array.from(document.querySelectorAll("input[type='radio']"));

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQUestion = [];
let finalscore = document.querySelector("#score");
let image = document.querySelector("#image");

// fonction quitter
function quit() {
  document.querySelector(".pageQuest").classList.add("displayerN");
  return document.querySelector(".pageEnd").classList.add("displayer");
}

// le TIMER
// -------------------------------------------------------------------------------
let timeleft = 60;
let downloadTime = setInterval(function () {
  document.querySelector("#progressBar").value = --timeleft;
  document.querySelector("#textCount").innerText = timeleft;
  if (timeleft <= 0) {
    getNewQuestion();
  }
}, 1000);
// -----------------------------------------------------------------------------------

// creation des questions et reponses
//---------------------------------------------------------------------------------
let questions = [
  {
    question: "Dans quel balise HTML est place le code javascript",
    choix1: "La balise js",
    choix2: "La balise javascript",
    choix3: "La balise script",
    choix4: "La balise rel",
    answer: 3,
  },
  {
    question: "comment faire appelle a une fonction nommee <<sum>>",
    choix1: "sum()",
    choix2: "call function sum()",
    choix3: "call sum()",
    choix4: "fonction sum()",
    answer: 1,
  },
  {
    question: "Quel est le bon endroit pour inserer un code javascript",
    choix1: "La section <head>",
    choix2: "La section <head> et <body>",
    choix3: "La section <body>",
    choix4: "La balise link",
    answer: 3,
  },
  {
    question: "Comment ecrire <<Hello World>> dans une boite d'alerte ?",
    choix1: "msg('Hello World')",
    choix2: "alert('Hello World')",
    choix3: "msgBox('Hello World')",
    choix4: "alertBox('Hello World')",
    answer: 2,
  },
  {
    question: "Comment creer une fonction en javascript ?",
    choix1: "function f()",
    choix2: "function=f()",
    choix3: "function:f()",
    choix4: "f()",
    answer: 1,
  },
  {
    question: "Comment ecrire une condition IF en javascript ?",
    choix1: "if a = 2 then",
    choix2: "if a = 2",
    choix3: "if a == 2 else",
    choix4: "if (a == 2 )",
    answer: 4,
  },
  {
    question: "lequel n'est pas une maniere de definir une variable",
    choix1: "var",
    choix2: "const",
    choix3: "let",
    choix4: "variable",
    answer: 4,
  },
  {
    question: "Comment verifier si <<a>> n'est pas egal a 2",
    choix1: "if a <> 2",
    choix2: "if (a != 2)",
    choix3: "if a =! 2 then",
    choix4: "if(a <> 2)",
    answer: 2,
  },
  {
    question: "Que vaut une variable qui n'a jamais ete assignee",
    choix1: "false",
    choix2: "Null",
    choix3: "undefined",
    choix4: "Error",

    answer: 3,
  },
  {
    question: "En javascript quel est le resultat du test 5==='5'",
    choix1: "True",
    choix2: "False",
    choix3: "Exception",
    choix4: "Null",
    answer: 2,
  },
  {
    question:
      "var Num = 12 ; Num %=2; a la suite de cette expression, combien vaut Num",
    choix1: "6",
    choix2: "14",
    choix3: "0.12",
    choix4: "0",
    answer: 4,
  },
  {
    question: "Lequel de ces types d'evenements n'existe pas ?",
    choix1: "blur",
    choix2: "load",
    choix3: "mouseclick",
    choix4: "mouseout",
    answer: 3,
  },
  {
    question:
      "Quel attribut des noeuds de l'arbre DOM correspond a l'attribut HTML class",
    choix1: "class",
    choix2: "CLASS",
    choix3: "className",
    choix4: "listName",
    answer: 3,
  },
  {
    question: "javascript a ete developpe par quelle company",
    choix1: "Netscape",
    choix2: "Java",
    choix3: "Apple",
    choix4: "Microsoft",
    answer: 1,
  },
  {
    question: "Lequel n'est pas un type de donne en javascript",
    choix1: "String",
    choix2: "Number",
    choix3: "Bigint",
    choix4: "aucune bonne reponse",
    answer: 4,
  },
];
// --------------------------------------------------------------------------------

// fonction de pour commencer le Jeux
// ---------------------------------------------------------------
startGame = () => {
  timeleft = 60;
  questionCounter = 0;
  score = 0;
  availableQUestion = [...questions];

  getNewQuestion();
};
// ----------------------------------------------------------------

// passage a une nouvelle question
// --------------------------------------------------------------------
getNewQuestion = () => {
  timeleft = 60;
  if (availableQUestion.length === 0 || questionCounter >= 15) {
    document.querySelector(".pageQuest").classList.add("displayerN");

    return document.querySelector(".pageEnd").classList.add("displayer");
  }

  questionCounter++;

  var questionIndex = Math.floor(Math.random() * availableQUestion.length);
  currentQuestion = availableQUestion[questionIndex];
  question.innerText = currentQuestion.question;

  choix.forEach((choix) => {
    const number = choix.dataset["number"];
    choix.innerText = currentQuestion["choix" + number];
  });
  availableQUestion.splice(questionIndex, 1);

  counter.innerText = questionCounter + "/" + "15";
};
// -----------------------------------------------------------------------

//fonction de verification du checking
// -----------------------------------------------------------------------

suivant.addEventListener("click", () => {
  const ischecked = (element) => element.checked == true;

  let reponse = 0;
  reponse += elts.findIndex(ischecked) + 1;

  let vraireponse = currentQuestion.answer;

  if (reponse == vraireponse) {
    score++;
  }
  let totalScore = score;
  finalscore.innerText = totalScore + "/15";
  if (totalScore <= 8) {
    image.classList.add("failed");
  } else {
    image.classList.remove("failed");
    image.classList.add("success");
  }

  elts.forEach((element) => (element.checked = false));

  getNewQuestion();
});
// ---------------------------------------------------------------------------
startGame();
