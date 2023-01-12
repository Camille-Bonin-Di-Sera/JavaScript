console.log("exo-7");


let traduction = {
    car: "voiture",
    house: "maison",
    game: "jeux",
    videogame: "jeux video",
    show: "spectacle",
};
jsonDatas.forEach((e) => {
    e.trad = traduction[e.type];
});
console.log(jsonDatas);
console.log(jsonDatas);

