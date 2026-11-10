function init(){
document.getElementByID("entrybutton").addEventListener("click", function() {
    window.alert("Noah: " + document.getElementByID("entryinput"));
    document.getElementByID("textoutput").innerHTML = input;
    })
}





window.addEventListener('load', init);
