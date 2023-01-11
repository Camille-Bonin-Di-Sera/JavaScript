


// Créer les variables contenant les messages à afficher
let weekday = "C'est un jour de semaine.";
let weekend= "C'est un jour de weekend.";

// Créer une variable pour stocker la date actuelle
let myDate = new Date();


// Créer une variable pour stocker l'heure' actuelle
let hour = myDate.getUTCHours();

// Déterminer le jour actuel
let today = myDate.getUTCDay();

// Tester si c'est un jour de semaine ou de weekend
if (day == 1 && hour < 9) {
    console.log(weekendMessage);
} else if (day == 5 && hour >= 17) {
    console.log(weekendMessage);
} else if (day >= 1 && day <= 5) {
    console.log(weekdayMessage);
} else {
    console.log(weekendMessage);
}

const isTesting = true;




//console.log(today, WeekDay);

/* Il y à plusieurs façon de le faire voici aussi la façon d'un camarade :

const myDate = new Date();
let semaine = "Semaine";
let weekend = "Weekend";
let jour;
let heure;
let isTesting = false;
if (isTesting) {
  jour = prompt("Choisisez le jour de la semaine (1-6 lundi-samedi | 0 dimanche)");
  heure = prompt("Choisisez l'heure (format 24H)");
} else {
  jour = myDate.getDay();
  heure = myDate.getHours();
}

jour === "6" || jour === "0"?console.log(weekend):console.log(semaine);
jour === "5" && heure >= "17"?console.log(weekend):console.log(semaine);
jour === "1" && heure <= "9"?console.log(weekend):console.log(semaine); */