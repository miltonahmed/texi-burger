const loadCategoryData = () => {
  const apiLink = 'https://taxi-kitchen-api.vercel.app/api/v1/categories';
  fetch(apiLink)
    .then(res => res.json())
    .then(data => displayCategoryData(data.categories));
};

const displayCategoryData = categories => {
  const categoriesContainer = document.getElementById('category-container');
  for (let category of categories) {
    const categoryCard = document.createElement('div');
    categoryCard.innerHTML = `
        <button class="btn btn-block shadow btn-category ">

          <img src="${category.categoryImg}" alt="" class="w-10" />
          ${category.categoryName}

        </button>
        `;
    categoriesContainer.append(categoryCard);
  }
  console.log(categoriesContainer);
};

loadCategoryData();
