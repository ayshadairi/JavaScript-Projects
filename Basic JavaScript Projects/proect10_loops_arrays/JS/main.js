function call_loop() {
    var digit='';
    var C=2;
    while(C<12){
        digit += "<br>" + C;
        C++;
    }
    document.getElementById('Loop').innerHTML=digit;
}

function count() {
    let text = 'My name is Aysha';
    let length= text.length;
    document.getElementById('count_places').innerHTML= length;
}

var names=['Aysha', 'Emad', 'Ismail', 'Carl', 'Ruby']
var content='';
var A;
function for_loop(){
    for (A=0; A<names.length; A++) {
        content+=names[A]+'<br>';
    }
    document.getElementById('list_of_names').innerHTML=content;
}