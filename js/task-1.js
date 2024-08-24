const NumberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${NumberOfCategories.length}`);

NumberOfCategories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const numberOfElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
