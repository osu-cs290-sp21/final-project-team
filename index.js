// title = food title, amounttim = time, text = description, img = image
function insertRecipe(title, amountTim, text, img){

    var templateThings = {
        foodtitle: title,
        time: amountTim,
        description: text,
        image: img
    }
    var recipeTextHTML = Handlebars.templates.insertRecipe(templateThings)
    var recipeContainer = document.querySelector('main.recipe-container');
    recipeContainer.insertAdjacentHTML('beforeend', recipeTextHTML);
}

function showCreateRecipe(){
    var backdrop = document.getElementById('modal-background');
    var button = document.getElementById('add-recipe-modal');

    backdrop.classList.remove('hidden')
    button.classList.remove('hidden')
}

var createRecipeButton = document.getElementById('add-recipe-button');
if(createRecipeButton){
    createRecipeButton.addEventListener('click', insertRecipe)
}


var openRecipeCreate = document.getElementById('add-recipe-button');
if(openRecipeCreate){
    openRecipeCreate.addEventListener('click', showCreateRecipe)
}
