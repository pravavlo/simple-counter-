
document.write("Hello Tej");

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