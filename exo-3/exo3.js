let playerChoice = prompt("Choisissez pierre, feuille ou ciseau").toLowerCase();
//Création des choix de l'utilisateur
switch (playerChoice) {
  case "pierre":
    console.log("Vous avez choisi pierre!");
    break;
  case "feuille":
    console.log("Vous avez choisi feuille!");
    break;
  case "ciseau":
    console.log("Vous avez choisi ciseau!");
    break;
  case "ciseau":
    console.log("tic tac tic tac");
    break;
  default:
    console.log("Veuillez entrer une option valide (pierre, feuille ou ciseau)");
}

// Génération aléatoire de l'ordi 
let computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "pierre";
} else if (computerChoice <= 0.67) {
  computerChoice = "feuille";
} else {
  computerChoice = "ciseau";
}

console.log("L'ordinateur a choisi: " + computerChoice);

//Affichage et calcul du resultat
let result;
switch (playerChoice) {
  case "pierre":
    result = computerChoice === "ciseau" ? "Vous avez gagné!" : "Vous avez perdu!";
    break;
  case "feuille":
    result = computerChoice === "pierre" ? "Vous avez gagné!" : "Vous avez perdu!";
    break;
  case "ciseau":
    result = computerChoice === "feuille" ? "Vous avez gagné!" : "Vous avez perdu!";
    break;
case "bomb":
    result = computerChoice ? "Vous avez gagné!" : "Vous avez gagné!";
    break;
default:
    result = "Veuillez entrer une option valide (pierre, feuille ou ciseau)";
}
console.log(result);
