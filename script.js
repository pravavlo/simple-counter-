window.alert("Hello Tej!");
function greetings() {
    alert("Hello there!");
}
function add() {
    var value = parseInt(document.getElementById('number').value,10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function subtract() {
    var value = parseInt(document.getElementById('number').value,10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}