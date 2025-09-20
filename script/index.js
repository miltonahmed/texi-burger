// const { createElement } = require("react");

const loadCategoryData = () => {
  const categoryApi = 'https://taxi-kitchen-api.vercel.app/api/v1/categories';
  fetch(categoryApi)
    .then(res => res.json())
    .then(data => displayCategoryData(data.categories));
};
const foodLoad=(id)=>{
  const foodCategory = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
  fetch(foodCategory)
    .then(res => res.json())
    .then(data => displayFoodCategory(data.foods));
}
const displayCategoryData = categories => {
  const categoriesContainer = document.getElementById('category-container');
  for (let category of categories) {
    const categoryCard = document.createElement('div');
    categoryCard.innerHTML = `
        <button onclick="foodLoad(${category.id})"  class="btn btn-block shadow btn-category ">

          <img src="${category.categoryImg}" alt="" class="w-10" />
          ${category.categoryName}

        </button>
        `;
    categoriesContainer.append(categoryCard);
  }
  
};

const displayFoodCategory=(foods) =>{
  const displayFoodContainer = document.getElementById('food-container');
  displayFoodContainer.innerHTML = '';
  foods.forEach((food) => {
    const foodCard = document.createElement('div');
    foodCard.innerHTML = `
    <div class="p-5 bg-white flex gap-3 shadow rounded-xl">
          <div class="img flex-1">
            <img src="${food.foodImg}" alt=""
              class="w-[160px] rounded-xl h-[160px] object-cover" />
          </div>
          <div class="flex-2">
            <h1 class="text-xl font-bold">
              ${food.title}
            </h1>

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
        </div>`;
    displayFoodContainer.append(foodCard);
    
  })
   
}
loadCategoryData();
