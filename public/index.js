// add button functionalities here
// Get navbar search input
var search_bar_input = document.getElementById('search-bar-input')

// Get navbar search button
var search_bar_button = document.getElementById('search-bar-button')

// for search button
search_bar_button.addEventListener('click', search)

// for search box
search_bar_input.addEventListener('keyup', search)

var allTwits = [];

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

function insertNewRecipe (recipeImage, recipeTitle, recipeTime, recipeDescription, recipeIngredient, recipeDirection) {
    var template = {
        image: recipeImage,
        foodtitle: recipeTitle,
        time: recipeTime,
        description: recipeDescription,
        ingredients: recipeIngredient,
        directions: recipeDirection
    }

    var newTwit = Handlebars.templates.insertRecipe(template);

    var recipeContainer = document.querySelector('index.recipe-container');
    recipeContainer.insertAdjacentHTML('beforeend', newTwit)
};

function addRecipeModalAccept() {
    var recipeImage = document.getElementById('recipe-image-input').value;
    var recipeTitle = document.getElementById('recipe-title-input').value;
    var recipeTime = document.getElementById('recipe-time-input').value;
    var recipeDescription = document.getElementById('recipe-description-input').value;
    var recipeIngredient = document.getElementById('recipe-ingredient-input').value;
    var recipeDirection = document.getElementById('recipe-direction-input').value;

    if (recipeImage && recipeTitle && recipeTime && recipeDescription && recipeIngredient && recipeDirection) {
        allTwits.push( {
            image: recipeImage,
            foodtitle: recipeTitle,
            time: recipeTime,
            description: recipeDescription,
            ingredients: recipeIngredient,
            directions: recipeDirection
        });
        hideModal();
        insertNewRecipe(recipeImage, recipeTitle, recipeTime, recipeDescription,recipeIngredient, recipeDirection);
    }
    else {
        alert('You must all of the required inputs!');
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
    var recipeElements = document.getElementsByClassName("add-recipe-element");
    for (var i = 0; i <= recipeElements.length+1; i++) {
        var userInput = recipeElements[i].querySelector('input, textarea');
        userInput.value = '';
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
    var createTwitButton = document.getElementById("add-recipe-button");
    if (createTwitButton) {
        createTwitButton.addEventListener("click", showModal)
    }

    /* close modal button */
    var modalCloseButton = document.querySelector("#add-recipe-modal .quit-modal");
    if (modalCloseButton) {
        modalCloseButton.addEventListener("click", hideModal)
    }

    var modalAcceptButton = document.querySelector("#add-recipe-modal .confirm-button");
    if (modalAcceptButton) {
        modalAcceptButton.addEventListener("click", addRecipeModalAccept)
    }
})
