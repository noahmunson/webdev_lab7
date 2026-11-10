function init(){
const button = document.getElementById("entrybutton");
const input = document.getElementById("entryinput");
const heading = document.getElementById("textoutput");
button.addEventListener("click", function() {
    const value = input.value;
    alert("Noah: " + value);
    heading.textContent = value;
    });
}





window.addEventListener('load', init);
