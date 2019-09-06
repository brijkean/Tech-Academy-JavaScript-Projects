//pg 203
function choose_pet() {
    var pet_output;
    var Pets = document.getElementById("pet_choice").value;
    var reply = " is a wonderful pet!";
    switch(Pets) {
      case "Dog":
      case "dog":    
        pet_output = "A dog" + reply;
      break;
      case "Cat":
      case "cat":    
        pet_output = "A cat" + reply;
      break;
      case "Rabbit":
      case "rabbit":    
        pet_output = "A rabbit" + reply;
      break;
      case "Fish":
      case "fish":    
        pet_output = "A fish" + reply;
      break;
      case "Air plant":
      case "air plant":    
        pet_output = "An air plant" + reply + " Perfect for busy people and first time pet owners.";
      break;
      default:
      pet_output = "Please choose an option from the above list.";
    }
    document.getElementById("output").innerHTML = pet_output;
  }

//pg211
function Hello_World() {
    var x = document.getElementsByClassName("click");
    x[1].innerHTML = "<h3>Hello world!</h3>";
  }

//pg216
var c = document.getElementById("challenge_canvas");
var ctx = c.getContext("2d");
var grad = ctx.createLinearGradient(0,0,250,0);
grad.addColorStop(0,"yellow");
grad.addColorStop(1, "green");

ctx.fillStyle = grad;
ctx.fillRect(0,0,150,80);
  