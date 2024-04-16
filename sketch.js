function setup() {
  createCanvas(400, 400);
}
var person1 = ""
var adjective1 = ""
var verb1 = ""
var noun1 = ""
var bodypart1 = ""
var noun2 = ""
var noun3 = ""
var person2 = ""

function print_story() {
  person1 = document.getElementById("person1").value
  adjective1 = document.getElementById("adjective1").value
  verb1 = document.getElementById("verb1").value
  noun1 = document.getElementById("noun1").value
  bodypart1 = document.getElementById("bodypart1").value
  noun2 = document.getElementById("noun2").value
  noun3 = document.getElementById("noun3").value
  person2 = document.getElementById("person2").value
  
  document.getElementById("story").innerHTML = ("A letter to my pen pal Dear "+person1+", I've been feeling "+adjective1+" lately, thanks for asking! Yesterday I accidentally "+verb1+" on a "+noun1+". I hurt my "+bodypart1+" because of that but it's feeling a little better now. I have had a lot of "+noun2+" recently but hopefully I'll get used to it. So, can you tell me how your "+noun3+" has been doing? Sincerely, "+person2)
  
  console.log("A letter to my pen pal Dear "+person1+", I've been feeling "+adjective1+" lately, thanks for asking! Yesterday I accidentally "+verb1+" on a "+noun1+". I hurt my "+bodypart1+" because of that but it's feeling a little better now. I have had a lot of "+noun2+" recently but hopefully I'll get used to it. So, can you tell me how your "+noun3+" has been doing? Sincerely, "+person2)
}

var story = "Dear "+person1+", I've been feeling "+adjective1+" lately, thanks for asking! Yesterday I accidentally "+verb1+" on a "+noun1+". I hurt my "+bodypart1+" because of that but it's feeling a little better now. I have had a lot of "+noun2+" recently but hopefully I'll get used to it. So, can you tell me how your "+noun3 + " has been doing? Sincerely, "+person2

function draw() {
  
}