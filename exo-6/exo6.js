// Cours 8 de Codecademy


/* var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
}; */
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
  //  console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
    // joeInfo.bathrooms = 1;
    // console.log(joeInfo.bathrooms)
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
    // joeInfo.garage = 1;
    // console.log(joeInfo.garage)
    let team = {
        players: [{
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11
        }],
        games: [{
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        }],
        addPlayer: function(firstName, lastName, age){
            this.players.push({
                firstName: firstName,
                lastName: lastName,
                age: age
            });
        },
        addGame: function (opponent, teamPoints, opponentPoints) {
            this.games.push({
                opponent: opponent,
                teamPoints: parseInt(teamPoints),
                opponentPoints: parseInt(opponentPoints)
            });
        }
    }

// Appeler les fonctions pour ajouter des joueurs et des matchs
team.addPlayer("John", "Smith", 25);
team.addPlayer("Jane", "Doe", 20);
team.addGame("Broncos", 42, 27);
team.addGame("Patriots", 21, 35);

// Calculer la somme des points de l'équipe sur tous les matchs joués
const totalTeamPoints = team.games.reduce((acc, game) => acc + game.teamPoints, 0);
console.log(`Total team points: ${totalTeamPoints}`);

// Calculer la moyenne des points de l'équipe adverse sur tous les matchs
const averageOpponentPoints = team.games.reduce((acc, game) => acc + game.opponentPoints, 0) / team.games.length;
console.log(`Average opponent points: ${averageOpponentPoints}`);

// Trouver le joueur le plus âgé
const oldestPlayer = team.players.sort((a, b) => b.age - a.age)[0];
console.log(`Oldest player: ${oldestPlayer.firstName} ${oldestPlayer.lastName}, ${oldestPlayer.age} years old`);

// Bonus : Trier les joueurs par ordre alphabétique
const sortedPlayers = team.players.sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log(`Sorted players: ${sortedPlayers.map(p => p.lastName)}`);


    