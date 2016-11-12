console.log('Loaded!');
//counter
var counter=0;
var button= document.getElementById("counter");
button.onclick = function() {
    //Make requst tothe counter end point
    
    //capture the response and store it in a variable
    
    //Render the variablein the correct span.
    counter = counter+1;
    var span= document.getElementById("counter");
    span.innerHTML=counter.toString();
}