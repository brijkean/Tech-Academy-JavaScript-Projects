//pg174
function call_Loop() {
    var num = "";
    var x = 2;
    while (x < 20) {
      num += "  " + x;
      x++;
      x++;
    }
    document.getElementById("Loop").innerHTML = num;
}
//pg177
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
  content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHML = content;
}
//pg181
function array_Function() {
    var grocery = ["milk", "bread", "salad greens", "eggs", "plums"];
    var list = grocery.length;
    var i;
    var contents = "I need to get ";
    for (i = 0; i < list; i++) {
        contents += " " + grocery[i] + ",";
    }
    contents += " from the market.";
    document.getElementById("Array").innerHTML = contents; 
}
//pg189
const ship = {type:"space", wings:2, color:"white"};
function constant_function() {
    ship.wings = 4;
    ship.propulsion = "engines";
    document.getElementById("constant").innerHTML = "This ship has " + ship.wings + " wings. It is propelled with " + ship.propulsion +".";
}

//pg191
var y = 12
document.write(y);
{ 
    let y = 22
    document.write("  " + y);
}
//pg197
let car = {
    make: "Dodge",
    model: "A100",
    color: "teal",
    year: "1964",
    description:  function() {
        return this.color + " " + this.year + " " + this.make + " " + this.model;
    }
};
document.getElementById("let_keyword").innerHTML = "Fred drives a " + car.description() + ".";


