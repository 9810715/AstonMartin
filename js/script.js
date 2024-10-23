document.addEventListener(`DOMContentLoaded`, function(){
  AOS.init();
  
  var swiper = new Swiper(".bannerSwiper", {
      loop: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
  
    });
  
    var swiper = new Swiper(".newsSwiper", {
        loop: true,
        direction: "vertical",
        pagination: {
            el: ".news-pagination",
            clickable: true,
        },
      });
  
  const submenuTab = document.querySelectorAll(`.main_menu li`)
  const submenuBox = document.querySelector(`.sub_menu_box`);

    for (const li of submenuTab) {
        li.addEventListener(`mouseenter`, function(){
        submenuBox.classList.add(`active`);
        
        const tab = this.getAttribute(`data-tab`);
        const subMenu = document.querySelectorAll(`.sub_menu`);

        for (const tabBox of subMenu) {
          tabBox.classList.remove(`active`);
        }

        const changeTab = document.querySelector(`#${tab}`);
        changeTab.classList.add(`active`);

      
    });
  }

  submenuBox.addEventListener(`mouseleave`, function(){
    this.classList.remove(`active`);
  })
})