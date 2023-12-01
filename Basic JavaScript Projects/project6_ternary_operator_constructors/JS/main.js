function Ride_Function(){ // ternary operater that has three parts as bshown in line 3
    var Height, can_ride;
    Height = document.getElementById("Height").Value;
    can_ride = (Height < 52) ? "You are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + ' to ride.';
}

function Vote_Function(){
    var Age, can_vote;
    Age = document.getElementById('Age').value;
    can_vote = (Age < 18) ? "you are too young" : "you are old enough";
    document.getElementById("Vote").innerHTML = can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //keywords that can't be used as names because they already means something else
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-Colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function count_function() { // nested functions means a function inside another
    document.getElementById("counting").innerHTML = count();
    function count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
