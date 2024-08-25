let main_category_id = 1;



 function handleCategoryClick(event) {
    console.log(event);
    
   main_category_id = event;
 }

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const categoriesContainer = document.getElementById("man-categories");
    data.plants.forEach((category) => {
        if ((category.id == main_category_id)) {
            category.sub_categories.forEach((sub_categories) => {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("category-item");
            categoryDiv.id = `category-${sub_categories.id}`;

            const categoryLink = document.createElement("a");
            categoryLink.href = `${sub_categories.id}.html`;

            const categoryImg = document.createElement("img");
            categoryImg.classList.add(
              "card-cat",
              "img",
              "category-images-icon"
            );
            categoryImg.src = sub_categories.file_path;
            categoryImg.alt = sub_categories.name;

            const categoryNamesDiv = document.createElement("div");
            categoryNamesDiv.classList.add("category-names");

            const categoryTitle = document.createElement("h2");
            categoryTitle.classList.add("category-title");
            categoryTitle.textContent = sub_categories.name;

            categoryNamesDiv.appendChild(categoryTitle);
            categoryLink.appendChild(categoryImg);
            categoryLink.appendChild(categoryNamesDiv);
            categoryDiv.appendChild(categoryLink);
            categoriesContainer.appendChild(categoryDiv);
          });
        }
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
