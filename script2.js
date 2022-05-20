var response = prompt("What's your name?");
  alert("Hello, " + response + ". Welcome to this psychological puzzle!");
  alert("Actually, it is more like a trick.");
  alert("Have fun :)");

function declaration(){
  alert("There was no official answers in that episode.I made them up for fun :D")
}

function enterAnswer(){
  var answer = prompt("Please enter as number:");
  document.getElementById("choice").innerHTML = "You chose bottle " + answer;
  if (answer === "1"){
    alert("Congrats, " + response + " ! You beat the serial killer and survived!")
  }
  else{
    alert("Sorry, " + response + " . You're dead.")
  }
}
