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