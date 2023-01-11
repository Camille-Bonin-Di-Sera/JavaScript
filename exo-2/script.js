


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
if (today == 5 && hour >= 17) {
    console.log(weekend);
} else if (today >= 1 && today <= 5) {
    console.log(weekday);
} else {
    console.log(weekend);
}




//console.log(today, WeekDay);