const showIngredient = document.querySelector("#ingredientClick");
const ingredientList = document.querySelector("#productIngredients");
const products = document.querySelector(".products");

products.addEventListener("click", e=> {
  e.preventDefault();
  showList();
})

function showList(){
  if(e.target == showIngredient){
    e.stopPropagation();
    ingredientList.classList.toggle('product__ingredients-content_active')}

}
