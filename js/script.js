function init(){
var button = document.getElementByID("entrybutton");
var input = document.getElementByID("entryinput");
var h2 = document.getElementByID("textoutput");
button.addEventListener("click", function() {
    window.alert("Noah: " + input);
    h2.innerHTML = input;
    })
}





window.addEventListener('load', init);
