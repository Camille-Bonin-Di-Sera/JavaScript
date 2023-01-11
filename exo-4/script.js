// you can write js here



var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
//let RemoveLast = secretMessage.pop('');
//let newObject = secretMessage.push('to', 'program');
//let remove = 6;
//let item = "right";
//let RemoveFirst = secretMessage.shift();
//let aadFirst = secretMessage.unshift("Programming");
//secretMessage.splice(remove, 1, item);
secretMessage = secretMessage.map(function(word) {
    if (word === "get" || word === "right" || word === "the" || word === "first" || word === "time") {
        return "know";
    } else {
        return word;
    }
});
console.log(secretMessage);

console.log('secretMessage', secretMessage);