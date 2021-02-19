const showIngredient = document.querySelector(".product__ingredients");
const ingredientList = document.querySelector(".product__ingredients-content");
const products = document.querySelector(".products")



showIngredient.addEventListener('click', e=> {
  e.preventDefault;
  ingredientList.classList.toggle('product__ingredients-content_active')
})




// products.addEventListener("click", e=> {
//   e.preventDefault();
//   showList();
// })

// function showList(){
//   if(e.target == showIngredient){
//     e.stopPropagation();
//     ingredientList.classList.toggle('product__ingredients-content_active')}

// }
