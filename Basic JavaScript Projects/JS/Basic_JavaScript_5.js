//pg93 typeof operator 
document.write(typeof "wallaby" + "<br>");
//pg99 infinity and -infinity 
function infinity(){
    document.getElementById("Infinity").innerHTML = 2E309 +"<br>" + -4E309;
}
//pg101 boolean
document.write(12 < 6, " ");
document.write(12 < 26, "<br>");
//pg103 console.log
console.log(Math.pow(2,4) + 4);
//pg105 type coercion 
document.write("12" + 6, "<br>");
/*pg108 ==*/
document.write(12 == (6*2), " ");
document.write(5 == 3, "<br>");
/*pg110 ===
same data type, same value */
var x = 16;
var y = 16;
document.write(x === y, " ");
//different data type, different value
var a = Date(3/05/1964);
var b = "Scotland";
document.write(a === b, " ");
//different data type, same value
var x = 16;
var y = "16";
document.write(x === y, " ");
//same data type, different value
var c = "cat";
var d = "dog";
document.write(x === y, " ");
//pg112 logical operators AND 
document.write("<br>");
document.write(48 > 46 && 8 == (12-4), " ");
document.write(32 > 46 && 8 < 12);
//OR 
document.write("<br>");
document.write(12 > 6 || 5 > 6, " ");
document.write(32 > 46 || 8 > 12);
//pg114 logical operators NOT
function notFunction() {
    document.getElementById("NOT").innerHTML = !(16 > 20) + " " + !(16 > 12);
    
}