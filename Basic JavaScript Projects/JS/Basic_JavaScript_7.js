//pg130
//global variable
var x = 12;
function Function_1() {
    document.write(6 + x + "<br>");
}
function Function_2() {
    var y = 2;
    document.write(7 + x - y);
}
Function_1();
Function_2();
function Function_3() {
    console.log(6+ y + x);
}
Function_3();
//pg133
function get_Time() {
    if (new Date().getHours() > 18) {
    document.getElementById("Time").innerHTML = "How are you this evening?";
    } else {document.getElementById("Time").innerHTML = "How are you today?";}
}
//pg134
function can_Vote() {
    var age, reply;
    age = document.getElementById("number").value;
    if (age > 18) {
        reply = "You are old enough to vote.";
    }
    document.getElementById("old_enough").innerHTML = reply;
}
//pg136

 
function bday_Today() {
    var today = new Date();
    var td = today.getUTCDate();
    /* Date.parse used to convert input date string into milliseconds */
    var msec = Date.parse(document.getElementById("birthdate").value);
    var bday = new Date(msec); //creates new date object from millisecond value
    var bd = bday.getUTCDate(); //used to convert bday to same time zone/(day) as today/td
    var bm = bday.getUTCMonth();
    var tm = today.getUTCMonth();
    var reply;
        if (bd == td && bm == tm ) {
            reply = "HAPPY BIRTHDAY!";
        }
        else if (bm < tm) { //if already birthday
            reply = "There are " + (tm - bm) + " months and " + (Math.abs(bd - td)) + " days until your birthday.";
        } 
        else if (bm == tm && bd > td ) { //if birthmonth but not yet birthday
            reply = "There are " + (bd - td) + " days until your birthday.";
        } 
        else if (bm == tm && bd < td ) { //if birthmonth and already birthday
            reply = "There are " + (bm - tm + 12) + " months and " + (Math.abs(td - bd)) + " days until your birthday.";
        }
        else { 
            reply = "There are " + (bm - tm) + " months and " + (Math.abs(bd - td)) + " days until your birthday.";
        } 
        document.getElementById("reply").innerHTML = reply;
    }     