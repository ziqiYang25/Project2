var name = prompt("Hi! What's your name?");
console.log(name);
alert("Hi" + name);

//var name_change = document.getElementById("page");
//name_change.textContent = name +" is making this webpage.";

//var note = document.createElement("p");
//note.textContent = "H Mom how are you?";
//document.body.appendChild(note);
 
//var child = document.getElementById("page");
//document.body.insertBefore(note, child);

//note.setAttribute("class", "extraNote");
//note.setAttribute("style", "foot-size: 25px");
//note.style.backgroundColor = "green";
//note.removeAttribute("style");

var name1 = prompt("what's your favorite movie?");
console.log(name1);
alert(name1+" is a good movie!");
var note = document.createElement("h1");
note.textContent = name1
document.body.appendChild(note);

note.setAttribute("class", "extraNote");
note.setAttribute("style", "foot-size: 25px");
note.style.backgroundColor = "white";
note.removeAttribute("sty;e");

var i = 1;
function changeColor2(event){
    if(document.body.style.backgroundColor !="red"){
        document.body.style.backgroundColor = "red";
    }
    i++;
    if(i == 5){
        clearInterval(intercalID);
        console.log("This function ran 5 times")
    }
}
var intervalID = setInterval(changeColor2, 1000)

/*function start(){
    let movies = ["Green Book", "Batman", "Insideout", "Spiderman"];
    console.log(movies[1]);
}

function starts(){
    var onGreenBookMovie = true;
    var onGreenBookSeries= true;

    var notWastingTime = onGreenBookMovie || onGreenBookSeries;
    println("notWastingTime?"+notWastingTime);
}*/

function start(){
	var age = prompt("What is your age? ");
	var oldEnough = age >= 13;
	println(" years old can watch this movie. " + oldEnough);
}
 