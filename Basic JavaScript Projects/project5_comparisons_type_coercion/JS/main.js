document.write(typeof 'word');
document.write(typeof 7);

document.write('10' + 6);

function can() {
    document.getElementById("nan").innerHTML= 0/0; //you will get nan which means no number
}

function work() {
    document.getElementById("isnan").innerHTML= isNaN("This is not a number"); //true becuase this is a string not a number
}

function dwork() {
    document.getElementById("is_nan").innerHTML= isNaN("897");// the opposite of the previous
}

document.write(-4E567);

document.write(4>3); //this is a true comparison 

document.write(9<7); //this is false

console.log(2 + 2); //you would see the result in the console which in this case is 4

console.log(5>7);// you would see the answer in the console compined with the boolean logic false

document.write([12+5] == 17); //double equale sign result in making a comparison between two values this is true

document.write(5 == 10);// this is false

E=12;
W="10";
document.write(E === W); //triple equales mean that if both sides are equale in type and value that means they are true in this case they are false because the second item is a string and the first is a number

B=5;
R=5;
document.write(B === R);//true

K='Aysha';
M='Aysha';
document.write(K === M);//true

document.write(7>5 && 6<9); // boolean && repersent and in this case it's true

document.write(7>11 && 9>8);// it's false because both sides doesn't eauale each other

document.write(7>11 || 9>8);// || stands for OR in this case it is true becuase one of them is true

document.write(7>11 || 9>10);//it's false becuase both sides are wrong

function NotFunction() {
    document.getElementById('Not').innerHTML= !(5>3); //for the not boolean we should write a function 
}

function truenotFunction() {
    document.getElementById('trueNot').innerHTML= !(5>9);
}





