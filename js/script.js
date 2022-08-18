// Get the toggle button
const toggleButton = document.getElementsByClassName("toggle-button")[0]
// Get the navbar links
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

// Add a click listener that toggles the link list
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})


// Get all the supplements articles
const supplements = document.querySelectorAll('#supplements>article')
// Get the two buttons 
const buttons = document.querySelectorAll('.circle-button')
// Add a listener for the click event
if (buttons != null)
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Take each article and toggle the hidden class
            // If it's hidden then it will be displayed and vice-versa
            for (let supplement of supplements) {
                supplement.classList.toggle('hidden');
            }
        })
    })


// Get all the recipes
const recipes = document.querySelectorAll('#recipes>article')
// Get the load more button
const loadbtn = document.querySelector('#loadmore')
// Add a click listener that removes the "hidden" class
if (loadbtn != null)
    loadbtn.addEventListener('click', () => {
        for (let recipe of recipes) {
            if (recipe.classList.contains('hidden')) {
                recipe.classList.toggle('hidden')
            }
        }
        // Hide the button because there are no more articles
        loadbtn.classList.add("hidden");
    })