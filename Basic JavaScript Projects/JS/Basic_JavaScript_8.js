//pg142
function makeSentence() {
    var part1 = "This sentence ";
    var part2 = "is composed ";
    var part3 = "from several parts.";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("concat").innerHTML = whole_sentence;
  }
  //pg144
  function Slice1() {
      var sentence = "<q>There is a house in New Orleans.</q>"
      var fragment = sentence.slice(23,34);
      document.getElementById("slice").innerHTML = fragment;
  }
  //pg146
  function string_Method() {
    var x = 12 / 2;
    document.getElementById("nmbr_to_string").innerHTML = x.toString();
  }
  //pg149
  function precision_Method() {
    var n = 1532.4263;
    document.getElementById("precision").innerHTML = n.toPrecision(5);
  }
