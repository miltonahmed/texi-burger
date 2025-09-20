// Optional import for React's createElement (commented out since not used here)
// const { createElement } = require("react");

// Function to load all category data from the API
const loadCategoryData = () => {
  const categoryApi = 'https://taxi-kitchen-api.vercel.app/api/v1/categories';

  // Fetch category data from the API
  fetch(categoryApi)
    .then(res => res.json()) // Convert response to JSON
    .then(data => displayCategoryData(data.categories)); // Pass categories to display function
};

// Function to load default/random food data on initial page load
const defaultDataLoad = () => {
  const defaultData = 'https://taxi-kitchen-api.vercel.app/api/v1/foods/random';

  // Fetch random food data
  fetch(defaultData)
    .then(res => res.json()) // Convert response to JSON
    .then(data => displayFoodCategory(data.foods)); // Display the food items
};

// Function to load food items based on selected category ID
const foodLoad = id => {
  const foodCategory = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;

  // Fetch food data for the selected category
  fetch(foodCategory)
    .then(res => res.json()) // Convert response to JSON
    .then(data => displayFoodCategory(data.foods)); // Display the food items
};

// Function to render category buttons dynamically
const displayCategoryData = categories => {
  const categoriesContainer = document.getElementById('category-container');

  // Loop through each category and create a button
  for (let category of categories) {
    const categoryCard = document.createElement('div');

    // Set inner HTML with category image and name
    categoryCard.innerHTML = `
      <button onclick="foodLoad(${category.id})" class="btn btn-block shadow btn-category">
        <img src="${category.categoryImg}" alt="" class="w-10" />
        ${category.categoryName}
      </button>
    `;

    // Append the button to the container
    categoriesContainer.append(categoryCard);
  }
};

// Function to render food items dynamically
const displayFoodCategory = foods => {
  const displayFoodContainer = document.getElementById('food-container');

  // Clear previous food items before rendering new ones
  displayFoodContainer.innerHTML = '';

  // Loop through each food item and create a styled card
  foods.forEach(food => {
    const foodCard = document.createElement('div');

    // Set inner HTML with food image, title, category, price, and button
    foodCard.innerHTML = `
      <div class="p-5 bg-white flex gap-3 shadow rounded-xl">
        <div class="img flex-1">
          <img src="${food.foodImg}" alt="" class="w-[160px] rounded-xl h-[160px] object-cover" />
        </div>
        <div class="flex-2">
          <h1 class="text-xl font-bold">${food.title}</h1>
          <div class="badge badge-warning">${food.category}</div>
          <div class="divider divider-end">
            <h2 class="text-yellow-600 font-semibold">
              $ <span class="price">${food.price}</span> BDT
            </h2>
          </div>
          <button class="btn btn-warning">
            <i class="fa-solid fa-square-plus"></i>
            Add This Item
          </button>
        </div>
      </div>
    `;

    // Append the food card to the container
    displayFoodContainer.append(foodCard);
  });
};

// Initial function calls to load categories and default food items
loadCategoryData();
defaultDataLoad();
