var dish_img = document.getElementById("dish_img")

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-container button');
    const randomText = document.getElementById('text');

    // Function to fetch random food recipe
    function fetchRandomSeafoodRecipe() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                const randomRecipe = getRandomRecipe(data.meals);
                displayRecipe(randomRecipe);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to get a random recipe from the array
    function getRandomRecipe(meals) {
        const randomIndex = Math.floor(Math.random() * meals.length);
        return meals[randomIndex];
    }

    // Function to display the recipe
    function displayRecipe(recipe) {
        if (recipe) {
            randomText.innerHTML = `RANDOM RECIPE: ${recipe.strMeal} &#x1F447;`;
            dish_img.setAttribute("src",recipe.strMealThumb)
        } else {
            randomText.innerHTML = 'No recipes found.';
        }
    }

    // Event listener for the Search button
    searchButton.addEventListener('click', function () {
        // Perform search functionality here
        console.log('Search clicked:', searchInput.value);
    });


    // Fetch random food recipe on page load
    fetchRandomSeafoodRecipe();
});



//search
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const datalist = document.getElementById('categoryList');
    const searchResultsContainer = document.getElementById('searchResults');

    // Fetch categories and populate the datalist
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            // Populate the datalist with categories
            data.categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.strCategory;
                datalist.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));

    // Event listener for the search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== '') {
            // Fetch and display search results using the API
            fetchSearchResults(searchTerm);
        } else {
            // Clear the search results container
            searchResultsContainer.innerHTML = '';
        }
    });

    // Function to fetch search results from the API based on category
    function fetchSearchResults(searchTerm) {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the search results
                displaySearchResults(data.meals);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                searchResultsContainer.innerHTML = 'An error occurred while fetching results.';
            });
    }

    // Function to display search results
    function displaySearchResults(meals) {
        if (meals && meals.length > 0) {
            // Build HTML to display search results
            const html = meals.map(meal => `<div>${meal.strMeal}</div>`).join('');
            searchResultsContainer.innerHTML = html;
        } else {
            searchResultsContainer.innerHTML = 'No results found.';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-container button');
    const searchResultsContainer = document.getElementById('searchResults');
    const datalist = document.getElementById('categoryList');

    // Fetch categories and populate the datalist
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            // Populate the datalist with categories
            data.categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.strCategory;
                datalist.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));

    // Event listener for the Search button
    searchButton.addEventListener('click', function () {
        // Get the selected category from the input
        const selectedCategory = searchInput.value.trim();

        if (selectedCategory !== '') {
            // Fetch and display recipes based on the selected category
            fetchRecipesByCategory(selectedCategory);
        } else {
            // Clear the search results container
            searchResultsContainer.innerHTML = '';
        }
    });

    // Function to fetch recipes based on the selected category
    function fetchRecipesByCategory(category) {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the recipes based on the selected category
                displaySearchResults(data.meals);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
                searchResultsContainer.innerHTML = 'An error occurred while fetching recipes.';
            });
    }

    // Function to display search results or recipes
    function displaySearchResults(meals) {
        if (meals && meals.length > 0) {
            // Build HTML to display search results or recipes
            const html = meals.map(meal => `<div>${meal.strMeal}</div>`).join('');
            searchResultsContainer.innerHTML = html;
        } else {
            searchResultsContainer.innerHTML = 'No recipes found for the selected category.';
        }
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-container button');
    const searchResultsContainer = document.getElementById('searchResults');
    const datalist = document.getElementById('categoryList');

    // Fetch categories and populate the datalist
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            // Populate the datalist with categories
            data.categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.strCategory;
                datalist.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));

    // Event listener for the Search button
    searchButton.addEventListener('click', function () {
        // Get the selected category from the input
        const selectedCategory = searchInput.value.trim();

        if (selectedCategory !== '') {
            // Fetch and display recipes based on the selected category
            fetchRecipesByCategory(selectedCategory);
        } else {
            // Clear the search results container
            searchResultsContainer.innerHTML = '';
        }
    });

    // Function to fetch recipes based on the selected category
    function fetchRecipesByCategory(category) {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the recipes based on the selected category
                displaySearchResults(data.meals);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
                searchResultsContainer.innerHTML = 'An error occurred while fetching recipes.';
            });
    }

    // Function to display search results or recipes
    function displaySearchResults(meals) {
        if (meals && meals.length > 0) {
            // Build HTML to display search results or recipes with names and images
            const html = meals.map(meal => `
                <div>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div>${meal.strMeal}</div>
                </div>
            `).join('');
            searchResultsContainer.innerHTML = html;
        } else {
            searchResultsContainer.innerHTML = 'No recipes found for the selected category.';
        }
    }
});








//pop-up code 


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-container button');
    const randomText = document.getElementById('text');
    const dishImg = document.getElementById('dish_img');

    function performSearch() {
        const selectedCategory = searchInput.value.trim();

        if (selectedCategory !== '') {
            fetchSearchResults(selectedCategory);
        } else {
            displayNoItemsFound();
        }
    }

    function displayNoItemsFound() {
        const noItemsFoundMessage = document.createElement('div');
        noItemsFoundMessage.textContent = 'No items found.';
        noItemsFoundMessage.style.color = 'red';
        searchResultsContainer.appendChild(noItemsFoundMessage);
    }

    function openPopup(imageSrc) {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupImage = document.createElement('img');
        popupImage.src = imageSrc;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', closePopup);

        popupContainer.appendChild(popupImage);
        popupContainer.appendChild(closeButton);

        document.body.appendChild(popupContainer);
    }

    function closePopup() {
        const popupContainer = document.querySelector('.popup-container');
        if (popupContainer) {
            popupContainer.remove();
        }
    }

    function fetchRandomSeafoodRecipe() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                const randomRecipe = getRandomRecipe(data.meals);
                displayRecipe(randomRecipe);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function getRandomRecipe(meals) {
        const randomIndex = Math.floor(Math.random() * meals.length);
        return meals[randomIndex];
    }

    function displayRecipe(recipe) {
        if (recipe) {
            randomText.innerHTML = `RANDOM RECIPE: ${recipe.strMeal} &#x1F447;`;
            dishImg.setAttribute("src", recipe.strMealThumb);
            dishImg.addEventListener('click', function () {
                openPopup(recipe.strMealThumb);
            });
        } else {
            randomText.innerHTML = 'No recipes found.';
        }
    }

    // Event listener for the Search button
    searchButton.addEventListener('click', performSearch);

    // Fetch random food recipe on page load
    fetchRandomSeafoodRecipe();
});  

//ingredient code

document.addEventListener('DOMContentLoaded', function () {
    const randomText = document.getElementById('text');
    const dishImg = document.getElementById('dish_img');

    function fetchRandomSeafoodRecipe() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                const randomRecipe = getRandomRecipe(data.meals);
                displayRecipe(randomRecipe);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function getRandomRecipe(meals) {
        const randomIndex = Math.floor(Math.random() * meals.length);
        return meals[randomIndex];
    }

    function displayRecipe(recipe) {
        if (recipe) {
            randomText.innerHTML = `RANDOM RECIPE: ${recipe.strMeal} &#x1F447;`;
            dishImg.setAttribute("src", recipe.strMealThumb);
            dishImg.setAttribute("data-meal-id", recipe.idMeal);
            dishImg.addEventListener('click', fetchAndDisplayIngredients);
        } else {
            randomText.innerHTML = 'No recipes found.';
        }
    }

    function fetchAndDisplayIngredients() {
        const mealId = dishImg.getAttribute("data-meal-id");
        fetchRecipeIngredients(mealId);
    }

    function fetchRecipeIngredients(mealId) {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const recipe = data.meals[0];
                if (recipe) {
                    const ingredientsList = createIngredientsList(recipe);
                    alert(ingredientsList); // Display ingredients in an alert
                } else {
                    console.error('Error fetching recipe details:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching recipe details:', error);
            });
    }

    function createIngredientsList(recipe) {
        let ingredientsList = 'Ingredients:\n';
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredientsList += `${ingredient} - ${measure}\n`;
            } else {
                break; // Stop if no more ingredients
            }
        }
        return ingredientsList.trim();
    }

    // Fetch random food recipe on page load
    fetchRandomSeafoodRecipe();
});









