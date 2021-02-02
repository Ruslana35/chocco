const humburger = document.querySelector("#humburger");
const body = document.body;
const overlayContainer = document.querySelector("#overlay")
const showIngredient = document.querySelector("#ingredientClick")
const ingredientList = document.querySelector("#product__ingredients")

humburger.addEventListener("click", e=> {
  e.preventDefault();
  humburger.classList.toggle("hamburger_active");
  overlayContainer.classList.toggle("fullscreen-menu_active");

  overlayContainer.addEventListener ("click", e =>{
    if(e.target == overlayContainer) {
      overlayContainer.classList.remove("fullscreen-menu_active");
    }
  })
  
})

showIngredient.addEventListener("click", e=>{
  e.preventDefault();
  ingredientList.classList.toggle("product__ingredients-content_active")
})
