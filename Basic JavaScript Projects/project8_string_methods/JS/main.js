function full_sentence(){ //concatenating conecting strings together.
    var part_1= "I have ";
    var part_2= "made this ";
    var part_3= "into a complete ";
    var part_4= "sentence";
    var whole_sentence= part_1.concat(part_2, part_3, part_4);
    document.getElementById('concatenate').innerHTML= whole_sentence;
}

function slice_function(){
    var sentence = "All work and no play makes Jonny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById('slice').innerHTML= section;
}

function caps(){ // turns string into upper case
    let str = 'aysha dairi';
    let string = str.toUpperCase();
    document.getElementById('caps').innerHTML= string;
}

let text='Mr. Blue has a blue house'; //search() method caan find the position number of the string
let position= text.search('Blue');

function string_method(){
    var X=1223;
    document.getElementById('numbers_to_string').innerHTML= X.toString();
}
function precision_method(){
    var X=122375876.6785665674754;
    document.getElementById('precision').innerHTML= X.toPrecision(10);
}