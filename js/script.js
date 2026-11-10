function init(){
let button = document.getElementByID("entrybutton");
let input = document.getElementByID("entryinput");
let h2 = document.getElementByID("textoutput");
button.addEventListener("click", function() {
    window.alert("Noah: " + input);
    h2.innerHTML = input;
    }







window.addEventListener('load', init);
