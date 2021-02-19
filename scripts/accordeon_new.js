const verticalAccor = () =>{
  const links = document.querySelectorAll(".products-menu__title")
  const body = document.querySelector('body')

  const calculateWidth = ()=>{

    const windowWidth = window.innerWidth;
    const MAX_WIDTH = 500;
    const linksWidth = links[0].offsetWidth;
  
    const reqWidth = windowWidth - (linksWidth * links.length);
  
    return reqWidth > MAX_WIDTH ? MAX_WIDTH : reqWidth
  
  }

  function closeItem(activeElement) {
    const activeText = activeElement.querySelector(".products-menu__content");
    activeText.style.width = "0px";
    activeElement.classList.remove("active")
  }
  
  links.forEach (function (elem) {
    elem.addEventListener("click", function(e){
      e.preventDefault();
      const link = e.target.closest(".products-menu__title")
      const active = document.querySelector(".products-menu__item.active")
  
      if(active){
        closeItem(active)
      }
  
      if(!active || active.querySelector(".products-menu__title") !== link){
        const current = link.closest(".products-menu__item");
        current.classList.add("active");
        const currentText = current.querySelector(".products-menu__content");
  
        if(body.offsetWidth > 480) {
          currentText.style.width = calculateWidth() + 'px';
  
          widthEl = calculateWidth();
        }else{
          currentText.style.width = '100%'
        }
      }
    })
  })

  document.addEventListener("click", e => {
    e.preventDefault();
    let activePerson = document.querySelector(".products-menu__item.active");
    const target = e.target;

    if(!target.closest(".products-menu") && activePerson){
      closeItem(activePerson)
    }
    if(target.closest(".products-menu__close") && activePerson){
      closeItem(activePerson)
    }
  })
}

verticalAccor();