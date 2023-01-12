// you can write js here
let input = prompt("Entrez une phrase :");
let vowels = ['a', 'e', 'i', 'o', 'u', 'y','A','E','I','O','U','Y'];
let resultArray = [];

//Parcours chaque caractère de la phrase, grace à input.lenght il détermine la longueur de la phrase
for (let i = 0; i < input.length; i++) {
    if(vowels.indexOf(input[i]) !== -1) { //Si le résultat est différent de -1, cela signifie que le caractère est une voyelle.
        resultArray.push(input[i]); //Si le caractère actuel est une voyelle, il est ajouté à resultArray en utilisant l'opérateur +=.
    }
}
console.log(resultArray.join(''));


