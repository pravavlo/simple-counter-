//display hello tej when website is loaded
document.write("Hello Tej");
//function to increment or decrement the value of html element when clicked on the button
function increment() {
    var value = document.getElementById("value").innerHTML;
    value = parseInt(value) + 1;
    document.getElementById("value").innerHTML = value;
}
function decrement() {
    var value = document.getElementById("value").innerHTML;
    value = parseInt(value) - 1;
    document.getElementById("value").innerHTML = value;
}