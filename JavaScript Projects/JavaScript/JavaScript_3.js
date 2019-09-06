function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert("In " + character.id +", " + characterType + " is a " + character.innerHTML +".");
  }
  