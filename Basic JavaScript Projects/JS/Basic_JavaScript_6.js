//pg117
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
  }
//pg 121
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//pg122
function Ship(Name, Age, Masts) {
    this.Name = Name;
    this.Age = Age;
    this.Masts = Masts;
}
var ship1 = new Ship("Walrus", 11, 3);
var ship2 = new Ship("Ranger", 6, 3); 
function Function2() {
    document.getElementById("New_and_This").innerHTML = "The ship called The " + ship2.Name + " has " + ship2.Masts + " masts.";
}
//pg127
function count_Marbles() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var start = 2;
        function plus_two() {start += 2;}
        plus_two();
        return start;
    }
}
