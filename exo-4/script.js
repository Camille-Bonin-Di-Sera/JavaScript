// you can write js here



var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
//let SctMsg = secretMessage.pop('');
//let newObject = secretMessage.push('to', 'program');
let remove = 6;
let item = "right";

secretMessage.splice(remove, 1, item);
console.log('secretMessage', secretMessage);