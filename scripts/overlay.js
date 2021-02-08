const humburger = document.querySelector("#humburger");
const body = document.body;
const overlayContainer = document.querySelector("#overlay")


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
  if(e.target == overlayContainer) {
    overlayContainer.classList.remove("fullscreen-menu_active");
    humburger.classList.remove("hamburger_active");
  }
})

