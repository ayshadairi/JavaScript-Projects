function DictionaryFunction() { //using dictionary which is created from a key and a value
    var car= {
        color: "yellow",
        name: "BMW",
        HP: "300hp",
        speed: "190MPH",
        year: 2019

    };
    document.getElementById("dictionary").innerHTML = car.speed;
}