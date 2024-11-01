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
  const sec2 = document.querySelector(`.sec2`);
  const footer = document.querySelector(`.footer`);
  
  window.addEventListener(`scroll`, function(){
      const sec2Top = sec2.offsetTop - 300;
      const ftTop = footer.offsetTop;
  
  
      const scrollTop = window.scrollY
      console.log(scrollTop);
  
      const bodyBg = document.querySelector(`body`);
  
      if(scrollTop > sec2Top && scrollTop < ftTop) {
        bodyBg.classList.add(`bg`)
      }    else {
        bodyBg.classList.remove (`bg`);
      }
  });
  const submenuTab = document.querySelectorAll(`.main_menu .menu`);
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

        const removeTab = document.querySelector(`.main_menu n_menu`)
        removeTab.classList.remove(`active`)

    });
  }

  submenuBox.addEventListener(`mouseleave`, function(){
    this.classList.remove(`active`);
  })

  const hamburger = document.querySelector(`#hamburger`);
  const menuList = document.querySelector(`.main_menu`);

  hamburger.addEventListener(`click`, function(){
    this.classList.toggle(`active`);

    const hasClass = this.classList.contains(`active`);
    if (hasClass) {
      menuList.classList.add(`active`);
    } else {
      menuList.classList.remove(`active`);
    }
  })

});