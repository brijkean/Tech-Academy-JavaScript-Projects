function Function_1() {
	var string = "This text is blue";
	var result = string.fontcolor("blue");
	document.getElementById("change_text").innerHTML = result;
}
function concatenation() {
	var sentence="We are going";
	sentence += " to add some text together.";
    document.getElementById("concatenate").innerHTML = sentence;
}