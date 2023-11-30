function Addition() {
    var Addition=2+2;
    document.getElementById("Math").innerHTML= "2+2=" + Addition; //addition function
}

function Sub() {
    var Sub=12-6;
    document.getElementById("Math").innerHTML= "12-6=" + Sub;//subtraction function
}

function Multi() {
    var Simple_Multi=12*6;
    document.getElementById("Math").innerHTML= "12*6=" + Simple_Multi;//multiplying
}

function Div() {
    var Simple_Div=12/6;
    document.getElementById("Math").innerHTML= "12/6=" + Simple_Div;//dividing
}

function More_than_one_operation() {
    var complex_math= (12-2) / 2 * 12 + 2;
    document.getElementById("More math").innerHTML= "12 sub 2 divide by two then multiply by 12 plus two equals" + complex_math;//multiple math oprtations in one
}

function modulus() {
    var simple_math= 10%3;
    document.getElementById("More math").innerHTML= "when you divide 10 by 3 you get a remainder of: " + simple_math;// modulus
}

function unaryFunction() {
    var B=11;
    document.getElementById("Unary").innerHTML= -11;
}



var Z=5.98;
Z--;
document.write(Z) //decrement by one means goes down by one

var X=7;
X++;
document.write(X)// increment is the opposite of the above

window.alert(Math.random() * 99); //picks a number randomly