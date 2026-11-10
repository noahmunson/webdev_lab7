function init(){
document.getElementById("entrybutton").addEventListener("click", function() {
    window.alert("Noah: " + document.getElementById("entryinput"));
    document.getElementById("textoutput").innerHTML = document.getElementById("entryinput");
    });
}





window.addEventListener('load', init);
