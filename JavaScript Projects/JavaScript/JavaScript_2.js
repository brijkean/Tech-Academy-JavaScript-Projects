function validateForm() {
    var x = document.forms["myForm"]["fname", "lname"].value;
    if (x== "") {
        alert("Name cannot be left blank");
        return false;
    }
}