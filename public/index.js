// add button functionalities here

/* function to show button */
function showButton() {
    var modalBG = document.getElementById("modal-background");
    var addRecipeModal = document.getElementById("add-recipe-modal");

    modalBG.classList.remove('hidden');
    addRecipeModal.classList.remove("hidden");
}

/* event listener */
window.addEventListener('DOMContentLoaded', function () {
    // var recipe = document.getElementsByClassName("recipe");
    
    
    var beepboop = document.getElementById("add-recipe-button");
    if (beepboop) {
        beepboop.addEventListener("click", showButton)
    }
})