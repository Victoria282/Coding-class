function openHiddenContent() {
    element = document.getElementById("hidden_text");
    state = element.style.display;
   
    if(state == "" || state == "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}
