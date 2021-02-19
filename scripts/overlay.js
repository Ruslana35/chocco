const humburger = document.querySelector("#humburger");
const body = document.body;
const overlayContainer = document.querySelector("#overlay")
const items = document.querySelector(".menu__item")



function toggleActiveMenu(){
  humburger.classList.toggle("hamburger_active");
  overlayContainer.classList.toggle("fullscreen-menu_active");
  body.classList.toggle("disabled")

}

humburger.addEventListener("click", e=> {
  e.preventDefault();
  toggleActiveMenu()
})

overlayContainer.addEventListener ("click", e =>{
  e.preventDefault();
  if(e.target == overlayContainer || e.target.classList.contains('menu__link')) {
    toggleActiveMenu()
  }
})

items.addEventListener("click", e =>{
  e.preventDefault()
  overlayContainer.classList.remove("fullscreen-menu_active");
})

