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
})