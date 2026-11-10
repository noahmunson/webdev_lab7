function init(){
document.getElementById("entrybutton").addEventListener("click", function() {
    window.alert("Noah: " + document.getElementById("entryinput"));
    document.getElementById("textoutput").innerHTML = input;
    })
}





window.addEventListener('load', init);
