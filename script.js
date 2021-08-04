function openHiddenContent() {
    element = document.getElementById("hidden_text");
    state = element.style.display;
   
    if(state == "") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}