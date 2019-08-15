function addFunction() {
	var addition = 1 + 2;
	document.getElementById("math").innerHTML = "1 + 2 = " + addition;
}
function minusFunction() {
    var subtract = 9 - 3;
    document.getElementById("math2").innerHTML = "9 - 3 = " + subtract;
}
function multiply() {
	var simpleM = 12 * 12;
	document.getElementById("x").innerHTML = "12 x 12 = " + simpleM;
}
function divide() {
	var simple_divide = 12 / 4;
	document.getElementById("d").innerHTML = "12 / 4 = " + simple_divide;
}
function moreOperations() {
	var ops = 12 * 4 / (4-2);
	document.getElementById("ops").innerHTML = "12 times 4, divided by 4 minus 2 is " + ops;
}
function showRemainder() {
	var remainder = 36 % 7;
	document.getElementById("remainder").innerHTML = "When you divide 36 by 7 you have a remainder of: " + remainder;
}
function negationOperator() {
	var x = 12;
	document.getElementById("neg").innerHTML = -x;
}
var x = 2; y = 6;
x++;
y--;
document.write("x incremented by one is ", x,"<br> y decremented by one is ", y, "<p></p>");
/* */
window.alert("Here is a random number: " + (Math.random() * 25) + 5);
/* */
document.write("The largest number in this group is ", Math.max(2, 46, 23, -2, 18), "<br>");