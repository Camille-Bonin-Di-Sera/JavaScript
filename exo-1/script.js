var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

//let Kelvins = 294;
let Celsius = Kelvins - 273; /* Ma varible celius est inferieur à la variable Kelvins de 273 */
let Fahrenheits = Celsius * (9/5) + 32; // Ici la variable ce traduit par : Resultat de celsuis * (9/5) + 32 = fahrenheits


console.log(Math.floor(Fahrenheits));