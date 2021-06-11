// add button functionalities here
// Get navbar search input
var search_bar_input = document.getElementById('search-bar-input')

// Get navbar search button
var search_bar_button = document.getElementById('search-bar-button')

// for search button
search_bar_button.addEventListener('click', search)

// for search box
search_bar_input.addEventListener('keyup', search)

function search() {
    var twits = document.getElementsByClassName('recipe')
    for (i = 0; i < 8; i++) {
		if ((twits[i].childNodes[1].textContent.toLowerCase().includes(search_bar_input.value)) || (twits[i].childNodes[1].textContent.toLowerCase().includes(search_bar_input.value))) {
			twits[i].classList.remove('hidden');
			continue;
		}
		else {
			twits[i].classList.add('hidden');
		}
	}
	if (twits.length > 8) {
			for (i = 8; i < twits.length; i++) {
				if ((twits[i].childNodes[0].textContent.toLowerCase().includes(search_bar_input.value)) || (twits[i].childNodes[0].textContent.toLowerCase().includes(search_bar_input.value))) {
					twits[i].classList.remove('hidden');
					continue;
				}
				else {
					twits[i].classList.add('hidden');
				}
			}
	}
}

/* function to show modal */
function showModal() {
    var modalBG = document.getElementById("modal-background");
    var addRecipeModal = document.getElementById("add-recipe-modal");

    modalBG.classList.remove('hidden');
    addRecipeModal.classList.remove("hidden");
}

/* function to clear input in modal */

function clearModal() {
    var recipeElements = document.getElementsByClassName("add-recipe-elements");
    for (var i = 0; i < recipeElements.length; i++) {
        var userInput = recipeElements[i].querySelector()
    }
}

/* function to hide modal */
function hideModal() {
    var modalBG = document.getElementById("modal-background");
    var addRecipeModal = document.getElementById("add-recipe-modal");

    modalBG.classList.add("hidden");
    addRecipeModal.classList.add("hidden");

    /* clear values in input fields */
    clearModal();
}

/* event listener */
window.addEventListener('DOMContentLoaded', function () {
    // var recipe = document.getElementsByClassName("recipe");

    /* show modal when add recipe button is clicked on */
    var beepboop = document.getElementById("add-recipe-button");
    if (beepboop) {
        beepboop.addEventListener("click", showModal)
    }

    /* close modal button */
    var boopboop = document.querySelector("#add-recipe-modal .quit-modal");
    if (boopboop) {
        boopboop.addEventListener("click", hideModal)
    }
})
