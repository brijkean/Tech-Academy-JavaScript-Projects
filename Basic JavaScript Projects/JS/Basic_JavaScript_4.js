function Dictionary1() {
    var City = {
        Name:"Denver",
        Location:"Colorado",
        Population: 619968,
        Terrain:"Mountains",
    };
    delete City.Name;
    document.getElementById("Dictionary").innerHTML = City.Name;
  }