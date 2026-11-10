function init(){
document.getElementById("entrybutton").addEventListener("click", function() {
    window.alert("Noah: " + document.getElementById("entryinput").value);
    document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
    });
}





window.addEventListener('load', init);
