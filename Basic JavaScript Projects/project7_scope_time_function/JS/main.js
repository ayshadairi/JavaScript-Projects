var X=11;
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X=11;
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

function get_date(){ //if statment 
    if (new Date().getHours()<18){
        document.getElementById('greeting').innerHTML= "How are you doing today?"
    }
}

function Age_Function(){ // else statment
    Age=document.getElementById('Age').ariaValueMax;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML=vote;
}

function time_function(){ //else if statment
    var time = new Date().getHours();
    var replay;
    if (time < 12 == time > 0) {
        reply="it is morning time!";
    }
    else if (time >= 12 == time < 18){
        reply = "it is afternoon";
    }
    else {
        reply= "it is evening time.";
    }
    document.getElementById('time_of_day').innerHTML = reply;
}